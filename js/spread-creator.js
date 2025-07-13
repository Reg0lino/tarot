// js/spread-creator.js

class SpreadCreator {
    constructor(appContainer) {
        this.appContainer = appContainer; // Reference to where the template will be rendered
        this.ui = {}; // To store references to UI elements
        this.cards = []; // Array to hold data for cards currently on the canvas
        this.selectedCard = null; // To track the currently selected card for manipulation

        // ANNOTATION: Initialize canvasState for default 100% zoom, top-left at 0,0
        this.canvasState = {
            x: (window.innerWidth - 1600) / 2, // Centers 1600px width horizontally
            y: (window.innerHeight - 1200 - 65) / 2, // Centers 1200px height vertically, accounting for header (approx 65px)
            scale: 1
        };
        this.isPanning = false;
        this.startPoint = { x: 0, y: 0 };
        this.lastPanPosition = { x: 0, y: 0 };

        // State for card dragging
        this.isDraggingCard = false; // True if a card is currently being dragged
        this.dragOffset = { x: 0, y: 0 }; // Offset from mouse pointer to card's center at drag start

        // Grid snapping configuration
        this.gridSize = 10; // Cards will snap to 10x10 pixel grid

        // Bind event handlers to the instance for proper 'this' context
        this.boundPointerDown = this.handlePointerDown.bind(this);
        this.boundPointerMove = this.handlePointerMove.bind(this);
        this.boundPointerUp = this.handlePointerUp.bind(this);
        this.boundWheel = this.handleWheel.bind(this);

        console.log("SpreadCreator initialized.");
    }

    // --- Core Lifecycle Methods ---

    start() {
        console.log("SpreadCreator started.");
        this.cacheUIElements();
        this.addEventListeners();
        this.loadCustomSpreadsList();
        this.drawCanvasBackground(); // This implicitly draws the grid based on current canvasState
        this.applyTransform(); // ANNOTATION: Apply initial (x:0, y:0, scale:1) transform
        // ANNOTATION: Removed this.autoFitToContent() from here.
    }

    cleanup() {
        console.log("SpreadCreator cleanup.");
        this.removeEventListeners(); // Call the dedicated removal function
        
        // Clear references to DOM elements to help with garbage collection
        this.ui = {};
        this.cards = [];
        this.selectedCard = null;
        this.isPanning = false;
        this.isDraggingCard = false;

        // The router will handle clearing the appContainer's innerHTML
    }

    // --- Setup & Teardown ---

    // renderTemplate is implicitly handled by main.js's router now

    cacheUIElements() {
        // Collect references to DOM elements specific to the spread creator page
        this.ui.canvas = document.getElementById('creator-canvas');
        this.ui.cardSpawner = document.getElementById('new-card-btn');
        this.ui.cardContainer = document.getElementById('creator-card-container'); // Where cards will be placed
        this.ui.spreadNameInput = document.getElementById('spread-name-input');
        this.ui.spreadDescriptionInput = document.getElementById('spread-description-input');
        this.ui.saveSpreadBtn = document.getElementById('save-spread-btn');
        this.ui.customSpreadsList = document.getElementById('custom-spreads-list');
        this.ui.positionXInput = document.getElementById('card-pos-x');
        this.ui.positionYInput = document.getElementById('card-pos-y');
        this.ui.rotationInput = document.getElementById('card-rotation');
        this.ui.labelInput = document.getElementById('card-label');
        this.ui.deleteCardBtn = document.getElementById('delete-card-btn');
        this.ui.nudgeUpBtn = document.getElementById('nudge-up');
        this.ui.nudgeDownBtn = document.getElementById('nudge-down');
        this.ui.nudgeLeftBtn = document.getElementById('nudge-left');
        this.ui.nudgeRightBtn = document.getElementById('nudge-right');

        // ANNOTATION: Add references for mobile drawer functionality
        this.ui.controlPanel = this.appContainer.querySelector('.control-panel');
        this.ui.mobileControlsTrigger = this.appContainer.querySelector('#mobile-controls-trigger');
        this.ui.drawerCloseBtn = this.appContainer.querySelector('#drawer-close-btn');

        // Set virtual canvas dimensions
        if (this.ui.canvas) {
            this.ui.canvas.width = 1600;
            this.ui.canvas.height = 1200;
            this.ui.canvas.style.cursor = 'grab';
        }
    }

    addEventListeners() {
        // Canvas interaction
        this.ui.canvas.addEventListener('pointerdown', this.boundPointerDown);
        document.addEventListener('pointermove', this.boundPointerMove);
        document.addEventListener('pointerup', this.boundPointerUp);
        this.ui.canvas.addEventListener('wheel', this.boundWheel);

        // UI button interactions
        this.ui.cardSpawner.addEventListener('click', (event) => this.handleNewCard(event));
        this.ui.saveSpreadBtn.addEventListener('click', this.handleSaveSpread.bind(this));
        this.ui.deleteCardBtn.addEventListener('click', this.handleDeleteCard.bind(this));
        
        this.ui.nudgeUpBtn.addEventListener('click', () => this.nudgeSelectedCard(0, -this.gridSize));
        this.ui.nudgeDownBtn.addEventListener('click', () => this.nudgeSelectedCard(0, this.gridSize));
        this.ui.nudgeLeftBtn.addEventListener('click', () => this.nudgeSelectedCard(-this.gridSize, 0));
        this.ui.nudgeRightBtn.addEventListener('click', () => this.nudgeSelectedCard(this.gridSize, 0));
        
        // Manual input changes for selected card
        this.ui.positionXInput.addEventListener('change', this.handleCardInputChange.bind(this));
        this.ui.positionYInput.addEventListener('change', this.handleCardInputChange.bind(this));
        this.ui.rotationInput.addEventListener('change', this.handleCardInputChange.bind(this));
        this.ui.labelInput.addEventListener('change', this.handleCardInputChange.bind(this));
        
        // Mobile drawer event listeners
        if (this.ui.mobileControlsTrigger) {
            this.ui.mobileControlsTrigger.addEventListener('click', () => {
                this.ui.controlPanel.classList.add('is-open');
            });
        }
        if (this.ui.drawerCloseBtn) {
            this.ui.drawerCloseBtn.addEventListener('click', () => {
                this.ui.controlPanel.classList.remove('is-open');
                // ANNOTATION: Re-center the view on the selected card when the drawer is manually closed.
                this.centerViewOn(this.selectedCard);
            });
        }
    }

    /**
     * Intelligently centers the canvas view.
     * If a card is provided, it pans to that card.
     * If no target is provided, it fits all cards in the view.
     * @param {Object|null} target - The card object to center on, or null to fit all.
     */
    centerViewOn(target = null) {
        if (target && target.x !== undefined && target.y !== undefined) {
            // Pan to a specific card without changing zoom
            this.panToVirtualPoint(target.x, target.y);
        } else {
            // Fit all current cards into the view
            this.autoFitToContent();
        }
    }

        /**
     * Pans the canvas to bring a specific virtual coordinate to the center of the viewport.
     * @param {number} virtualX - The x-coordinate on the virtual canvas.
     * @param {number} virtualY - The y-coordinate on the virtual canvas.
     */
    panToVirtualPoint(virtualX, virtualY) {
        const viewportWidth = this.ui.canvas.clientWidth;
        const viewportHeight = this.ui.canvas.clientHeight;

        const targetScreenX = viewportWidth / 2;
        const targetScreenY = viewportHeight / 2;

        const currentScreenX = (virtualX * this.canvasState.scale) + this.canvasState.x;
        const currentScreenY = (virtualY * this.canvasState.scale) + this.canvasState.y;

        const dx = targetScreenX - currentScreenX;
        const dy = targetScreenY - currentScreenY;

        this.canvasState.x += dx;
        this.canvasState.y += dy;
        this.applyTransform();
    }

    removeEventListeners() {
        if (!this.ui.canvas) return; // If UI was never cached, do nothing

        // Canvas interaction
        this.ui.canvas.removeEventListener('pointerdown', this.boundPointerDown);
        document.removeEventListener('pointermove', this.boundPointerMove);
        document.removeEventListener('pointerup', this.boundPointerUp);
        this.ui.canvas.removeEventListener('wheel', this.boundWheel);

        // UI button interactions
        this.ui.cardSpawner.removeEventListener('click', this.handleNewCard.bind(this));
        this.ui.saveSpreadBtn.removeEventListener('click', this.handleSaveSpread.bind(this));
        this.ui.deleteCardBtn.removeEventListener('click', this.handleDeleteCard.bind(this));

        // Nudge buttons don't need removal if they are anonymous arrow functions,
        // but we'll manage them properly if we ever refactor them.
        
        // Manual input changes
        this.ui.positionXInput.removeEventListener('change', this.handleCardInputChange.bind(this));
        this.ui.positionYInput.removeEventListener('change', this.handleCardInputChange.bind(this));
        this.ui.rotationInput.removeEventListener('change', this.handleCardInputChange.bind(this));
        this.ui.labelInput.removeEventListener('change', this.handleCardInputChange.bind(this));

        // Mobile drawer (the anonymous functions will be garbage collected with the elements)
        // No explicit removal needed here as the elements are destroyed by the router.
    }

    // --- Canvas & Card Rendering ---

    drawCanvasBackground() {
        const ctx = this.ui.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.ui.canvas.width, this.ui.canvas.height);
        
        // Draw a light grid
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 0.5;
        for (let x = 0; x <= this.ui.canvas.width; x += this.gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, this.ui.canvas.height);
            ctx.stroke();
        }
        for (let y = 0; y <= this.ui.canvas.height; y += this.gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(this.ui.canvas.width, y);
            ctx.stroke();
        }
        ctx.strokeRect(0, 0, this.ui.canvas.width, this.ui.canvas.height); // Outline the canvas
    }

    renderCards() {
        // Remove existing card event listeners before clearing/re-adding
        this.ui.cardContainer.querySelectorAll('.creator-card-placeholder').forEach(cardEl => {
            cardEl.removeEventListener('pointerdown', this.handleCardPointerDown);
        });

        this.ui.cardContainer.innerHTML = ''; // Clear existing cards
        this.cards.forEach(cardData => {
            const cardEl = this.createCardElement(cardData);
            this.ui.cardContainer.appendChild(cardEl);
        });
        this.updateSelectedCardUI(); // Ensure UI reflects selection after re-render
    }

    createCardElement(cardData) {
        const cardEl = document.createElement('div');
        cardEl.className = 'position-container creator-card-placeholder';
        cardEl.dataset.cardId = cardData.id;
        cardEl.style.position = 'absolute';
        
        let cardVisualWidth = 120;
        let cardVisualHeight = 210;
        if (cardData.rotation === 90 || cardData.rotation === 270) {
            [cardVisualWidth, cardVisualHeight] = [cardVisualHeight, cardVisualWidth];
        }

        const calculatedLeft = cardData.x - (cardVisualWidth / 2);
        const calculatedTop = cardData.y - (cardVisualHeight / 2);

        cardEl.style.left = `${calculatedLeft}px`;
        cardEl.style.top = `${calculatedTop}px`;
        cardEl.style.transform = `rotate(${cardData.rotation}deg)`;

        cardEl.innerHTML = `
            <div class="card-container card-placeholder"></div>
            <div class="position-label">${cardData.label || `Card ${cardData.id}`}</div>
        `;
        cardEl.addEventListener('pointerdown', (e) => this.handleCardPointerDown(e, cardData.id));

        if (this.selectedCard && this.selectedCard.id === cardData.id) {
            cardEl.classList.add('selected');
        }

        // ANNOTATION: DEBUG PRINT
        console.log(`[SpreadCreator] Rendering card ${cardData.id}: Data(X=${cardData.x}, Y=${cardData.y}) -> CSS(Left=${calculatedLeft}px, Top=${calculatedTop}px)`);

        return cardEl;
    }

    updateCardElement(cardData) {
        const cardEl = this.ui.cardContainer.querySelector(`[data-card-id="${cardData.id}"]`);
        if (cardEl) {
            let cardVisualWidth = 120;
            let cardVisualHeight = 210;
            if (cardData.rotation === 90 || cardData.rotation === 270) {
                [cardVisualWidth, cardVisualHeight] = [cardVisualHeight, cardVisualWidth];
            }
            cardEl.style.left = `${cardData.x - (cardVisualWidth / 2)}px`;
            cardEl.style.top = `${cardData.y - (cardVisualHeight / 2)}px`;
            cardEl.style.transform = `rotate(${cardData.rotation}deg)`;
            cardEl.querySelector('.position-label').textContent = cardData.label || `Card ${cardData.id}`;
        }
    }

    // --- Canvas Panning & Zooming (adapted from main.js) ---

    applyTransform() {
        if (this.ui.cardContainer) {
            this.ui.cardContainer.style.transformOrigin = 'top left';
            this.ui.cardContainer.style.transform = `translate(${this.canvasState.x}px, ${this.canvasState.y}px) scale(${this.canvasState.scale})`;
        }
        // The canvas element itself holds the grid, so its transform needs to match the card container
        if (this.ui.canvas) {
            this.ui.canvas.style.transformOrigin = 'top left';
            this.ui.canvas.style.transform = `translate(${this.canvasState.x}px, ${this.canvasState.y}px) scale(${this.canvasState.scale})`;
            this.drawCanvasBackground(); // Redraw grid on transform to keep it aligned
        }
    }

    handlePointerDown(e) {
        // If a card was clicked, its specific handler will run and stop propagation.
        // If we reach here, it means the canvas background was clicked.
        if (e.target.closest('.creator-card-placeholder')) {
            // This is handled by handleCardPointerDown, which calls e.stopPropagation().
            // So, if we are inside this block, the event should not have propagated from a card.
            return; 
        }

        e.preventDefault(); // Prevent default browser behavior (e.g., text selection) for canvas pan
        this.isPanning = true;
        
        // ANNOTATION: Deselect card when clicking canvas background
        if (this.selectedCard) {
            this.selectCard(null); // Deselects the card and updates UI
        }

        const point = e.touches ? e.touches[0] : e;
        this.startPoint = { x: point.clientX, y: point.clientY };
        this.lastPanPosition = { x: this.canvasState.x, y: this.canvasState.y };
        this.ui.canvas.style.cursor = 'grabbing';
    }

    handlePointerMove(e) {
        if (!this.isPanning && !this.isDraggingCard) return; // Only proceed if either panning OR dragging a card

        e.preventDefault();
        const point = e.touches ? e.touches[0] : e; // Get consistent pointer coordinates

        if (this.isPanning) {
            // Canvas Panning Logic
            const dx = point.clientX - this.startPoint.x;
            const dy = point.clientY - this.startPoint.y;
            this.canvasState.x = this.lastPanPosition.x + dx;
            this.canvasState.y = this.lastPanPosition.y + dy;
            this.applyTransform();
        } else if (this.isDraggingCard && this.selectedCard) {
            // Card Dragging Logic
            const canvasRect = this.ui.canvas.getBoundingClientRect();
            
            // Convert current screen mouse position to virtual canvas coordinates
            // Apply the current canvas transform in reverse to get the virtual position
            const virtualMouseX = (point.clientX - canvasRect.left - this.canvasState.x) / this.canvasState.scale;
            const virtualMouseY = (point.clientY - canvasRect.top - this.canvasState.y) / this.canvasState.scale;

            // Calculate new card center position by applying the initial dragOffset
            let newCardX = virtualMouseX + this.dragOffset.x;
            let newCardY = virtualMouseY + this.dragOffset.y;

            // Apply grid snapping
            newCardX = Math.round(newCardX / this.gridSize) * this.gridSize;
            newCardY = Math.round(newCardY / this.gridSize) * this.gridSize;

            // Update card data and its visual element
            this.selectedCard.x = newCardX;
            this.selectedCard.y = newCardY;
            this.updateCardElement(this.selectedCard); // Update card's visual position
            this.updateSelectedCardUI(); // Keep input fields updated live
        }
    }

    handlePointerUp() {
        this.isPanning = false;
        this.isDraggingCard = false; // Reset card dragging state
        this.ui.canvas.style.cursor = 'grab'; // Reset canvas cursor

        // Reset cursor for any previously dragged card element if it was set
        if (this.ui.cardContainer) {
            this.ui.cardContainer.querySelectorAll('.creator-card-placeholder').forEach(el => {
                el.style.cursor = 'grab'; // All cards should revert to grab cursor
            });
        }
    }

    handleWheel(e) {
        e.preventDefault();

        const oldScale = this.canvasState.scale;
        const zoomFactor = 1.1; // Amount to zoom in/out
        
        let newScale = e.deltaY > 0 ? oldScale / zoomFactor : oldScale * zoomFactor;
        newScale = Math.max(0.1, Math.min(newScale, 10)); // Clamp scale to min/max values

        const canvasRect = this.ui.canvas.getBoundingClientRect();
        const mouseX = e.clientX - canvasRect.left;
        const mouseY = e.clientY - canvasRect.top;

        const worldX = (mouseX - this.canvasState.x) / oldScale;
        const worldY = (mouseY - this.canvasState.y) / oldScale;

        this.canvasState.x = mouseX - (worldX * newScale);
        this.canvasState.y = mouseY - (worldY * newScale);
        this.canvasState.scale = newScale;

        this.applyTransform();
    }

        panToVirtualPoint(virtualX, virtualY) {
        const viewportWidth = this.ui.canvas.clientWidth;
        const viewportHeight = this.ui.canvas.clientHeight;

        // Calculate where the virtual point should be on screen if it were centered
        const targetScreenX = viewportWidth / 2;
        const targetScreenY = viewportHeight / 2;

        // Calculate current screen position of the virtual point
        const currentScreenX = (virtualX * this.canvasState.scale) + this.canvasState.x;
        const currentScreenY = (virtualY * this.canvasState.scale) + this.canvasState.y;

        // Calculate the needed pan offset
        const dx = targetScreenX - currentScreenX;
        const dy = targetScreenY - currentScreenY;

        // Apply the pan
        this.canvasState.x += dx;
        this.canvasState.y += dy;
        this.applyTransform();
    }


    // --- Card Creation & Manipulation ---

    handleNewCard(mouseEvent) {
        const newId = this.cards.length > 0 ? Math.max(...this.cards.map(c => c.id)) + 1 : 1;
        
        // Calculate spawn position: center of the current viewport
        const canvasRect = this.ui.canvas.getBoundingClientRect();
        const viewportCenterX = canvasRect.width / 2;
        const viewportCenterY = canvasRect.height / 2;

        // Convert screen center to virtual canvas coordinates
        const virtualX = (viewportCenterX - this.canvasState.x) / this.canvasState.scale;
        const virtualY = (viewportCenterY - this.canvasState.y) / this.canvasState.scale;
        
        const snappedX = Math.round(virtualX / this.gridSize) * this.gridSize;
        const snappedY = Math.round(virtualY / this.gridSize) * this.gridSize;

        const newCard = {
            id: newId,
            x: snappedX,
            y: snappedY,
            rotation: 0,
            label: `Card ${newId}`
        };

        this.cards.push(newCard);
        this.renderCards();
        this.selectCard(newCard); // Pass the full card object

        console.log(`[SpreadCreator] Added new card: ID=${newCard.id}, X=${newCard.x}, Y=${newCard.y}`);

        // Auto-close the mobile drawer if it's open
        if (this.ui.controlPanel && this.ui.controlPanel.classList.contains('is-open')) {
            this.ui.controlPanel.classList.remove('is-open');
        }
    }

    handleCardPointerDown(e, cardId) {
        e.stopPropagation(); // Prevent canvas panning
        
        // ANNOTATION: Find the full card object from the ID
        const cardToSelect = this.cards.find(c => c.id === cardId);
        if (!cardToSelect) return;

        this.selectCard(cardToSelect); // Pass the full object, not just the ID

        this.isDraggingCard = true;
        const point = e.touches ? e.touches[0] : e;

        const canvasRect = this.ui.canvas.getBoundingClientRect();
        const virtualMouseX = (point.clientX - canvasRect.left - this.canvasState.x) / this.canvasState.scale;
        const virtualMouseY = (point.clientY - canvasRect.top - this.canvasState.y) / this.canvasState.scale;

        this.dragOffset.x = this.selectedCard.x - virtualMouseX;
        this.dragOffset.y = this.selectedCard.y - virtualMouseY;
        
        const selectedEl = this.ui.cardContainer.querySelector(`[data-card-id="${cardId}"]`);
        if (selectedEl) {
            selectedEl.style.cursor = 'grabbing';
        }
    }

    selectCard(cardObject) {
        // Deselect any currently selected card visually
        this.ui.cardContainer.querySelectorAll('.creator-card-placeholder.selected').forEach(el => {
            el.classList.remove('selected');
        });

        this.selectedCard = cardObject; // Directly assign the object or null

        if (this.selectedCard) {
            const selectedEl = this.ui.cardContainer.querySelector(`[data-card-id="${this.selectedCard.id}"]`);
            if (selectedEl) {
                selectedEl.classList.add('selected');
            }
            // Center the view on the newly selected card.
            this.centerViewOn(this.selectedCard);
        }
        
        this.updateSelectedCardUI();
    }

    updateSelectedCardUI() {
        // Update the input fields to show data of selected card
        if (this.selectedCard) {
            this.ui.positionXInput.value = this.selectedCard.x;
            this.ui.positionYInput.value = this.selectedCard.y;
            this.ui.rotationInput.value = this.selectedCard.rotation;
            this.ui.labelInput.value = this.selectedCard.label;
            this.ui.deleteCardBtn.disabled = false;
        } else {
            // Disable and clear inputs if no card is selected
            this.ui.positionXInput.value = '';
            this.ui.positionYInput.value = '';
            this.ui.rotationInput.value = '';
            this.ui.labelInput.value = '';
            this.ui.deleteCardBtn.disabled = true;
        }
    }

    handleCardInputChange() {
        if (!this.selectedCard) return;

        // Parse and snap values from inputs, fallback to current value if invalid
        this.selectedCard.x = Math.round(parseInt(this.ui.positionXInput.value, 10) / this.gridSize) * this.gridSize || this.selectedCard.x;
        this.selectedCard.y = Math.round(parseInt(this.ui.positionYInput.value, 10) / this.gridSize) * this.gridSize || this.selectedCard.y;
        this.selectedCard.rotation = parseInt(this.ui.rotationInput.value, 10) || 0; // Rotation usually defaults to 0 if not specified
        this.selectedCard.label = this.ui.labelInput.value.trim() || `Card ${this.selectedCard.id}`; // Trim whitespace

        this.updateCardElement(this.selectedCard); // Re-render the specific card
        this.updateSelectedCardUI(); // Re-sync UI (important if invalid input was rounded/snapped)
    }

    nudgeSelectedCard(dx, dy) {
        if (!this.selectedCard) return;
        this.selectedCard.x = Math.round((this.selectedCard.x + dx) / this.gridSize) * this.gridSize;
        this.selectedCard.y = Math.round((this.selectedCard.y + dy) / this.gridSize) * this.gridSize;
        this.updateCardElement(this.selectedCard);
        this.updateSelectedCardUI();
    }

    handleDeleteCard() {
        if (!this.selectedCard) return;
        // Filter out the selected card, then re-index IDs for simplicity if desired (optional)
        this.cards = this.cards.filter(c => c.id !== this.selectedCard.id);
        this.selectedCard = null; // Deselect
        this.renderCards(); // Re-render all cards
        this.updateSelectedCardUI(); // Update UI
        this.autoFitToContent(); // Auto-fit after card deletion
    }

    // --- Save/Load Spreads ---

    handleSaveSpread() {
        const spreadName = this.ui.spreadNameInput.value.trim();
        const spreadDescription = this.ui.spreadDescriptionInput.value.trim();

        if (!spreadName || this.cards.length === 0) {
            alert("Please provide a spread name and add at least one card.");
            return;
        }

        const newSpread = {
            id: `custom-${Date.now()}`, // Unique ID for custom spreads
            name: spreadName,
            description: spreadDescription,
            cardCount: this.cards.length,
            // ANNOTATION: Map internal card data to the format expected by the main app's spreads object
            positions: this.cards.map(card => ({
                label: card.label,
                x: card.x,
                y: card.y,
                rotation: card.rotation
            }))
        };

        let savedSpreads = JSON.parse(localStorage.getItem('customTarotSpreads') || '[]');
        // Check if a spread with this name already exists for overwriting
        const existingIndex = savedSpreads.findIndex(s => s.name === spreadName);
        if (existingIndex > -1) {
            if (!confirm(`A spread named "${spreadName}" already exists. Do you want to overwrite it?`)) {
                return;
            }
            savedSpreads[existingIndex] = newSpread; // Overwrite existing spread
        } else {
            savedSpreads.push(newSpread); // Add as new spread
        }
        localStorage.setItem('customTarotSpreads', JSON.stringify(savedSpreads));
        alert(`Spread "${spreadName}" saved successfully!`);
        this.loadCustomSpreadsList(); // Refresh the list of saved spreads
    }

    loadCustomSpreadsList() {
        this.ui.customSpreadsList.innerHTML = ''; // Clear current list
        const savedSpreads = JSON.parse(localStorage.getItem('customTarotSpreads') || '[]');

        if (savedSpreads.length === 0) {
            this.ui.customSpreadsList.innerHTML = '<p class="no-saved-spreads-text">No custom spreads saved yet.</p>';
            return;
        }

        savedSpreads.forEach(spread => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="saved-spread-name">${spread.name} (${spread.cardCount} cards)</span>
                <div class="saved-spread-actions">
                    <button data-id="${spread.id}" class="glowing-btn load-custom-btn">Load</button>
                    <button data-id="${spread.id}" class="glowing-btn delete-custom-btn">Delete</button>
                </div>
            `;
            // ANNOTATION: Use bound functions for event listeners to ensure correct 'this' context if not arrow function
            li.querySelector('.load-custom-btn').addEventListener('click', () => this.loadSpreadIntoCreator(spread.id));
            li.querySelector('.delete-custom-btn').addEventListener('click', () => this.deleteSavedSpread(spread.id));
            this.ui.customSpreadsList.appendChild(li);
        });
    }

    loadSpreadIntoCreator(spreadId) {
        const savedSpreads = JSON.parse(localStorage.getItem('customTarotSpreads') || '[]');
        const spreadToLoad = savedSpreads.find(s => s.id === spreadId);

        if (spreadToLoad) {
            this.cards = spreadToLoad.positions.map((pos, index) => ({
                id: index + 1,
                x: pos.x,
                y: pos.y,
                rotation: pos.rotation || 0,
                label: pos.label
            }));
            this.ui.spreadNameInput.value = spreadToLoad.name;
            this.ui.spreadDescriptionInput.value = spreadToLoad.description;
            
            this.renderCards();
            this.selectCard(null); // Deselect any card after loading
            this.updateSelectedCardUI();
            
            alert(`Spread "${spreadToLoad.name}" loaded.`);
            // ANNOTATION: Fit all cards from the loaded spread into the view.
            this.centerViewOn(null); 
        } else {
            alert("Spread not found.");
        }
    }

    deleteSavedSpread(spreadId) {
        if (!confirm("Are you sure you want to delete this spread?")) {
            return;
        }
        let savedSpreads = JSON.parse(localStorage.getItem('customTarotSpreads') || '[]');
        savedSpreads = savedSpreads.filter(s => s.id !== spreadId);
        localStorage.setItem('customTarotSpreads', JSON.stringify(savedSpreads));
        this.loadCustomSpreadsList(); // Refresh the list
        alert("Spread deleted.");
    }

    autoFitToContent() {
        // ANNOTATION: This is a copy of the main autoFitSpread, but targets this.ui.canvas
        if (this.cards.length === 0) {
            this.canvasState.x = 0;
            this.canvasState.y = 0;
            this.canvasState.scale = 1;
            this.applyTransform();
            return;
        }

        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        const cardBaseWidth = 120;
        const cardBaseHeight = 210;

        this.cards.forEach(cardData => {
            let currentCardWidth = cardBaseWidth;
            let currentCardHeight = cardBaseHeight;

            // Account for rotation when calculating bounding box
            if (cardData.rotation === 90 || cardData.rotation === 270) {
                [currentCardWidth, currentCardHeight] = [cardBaseHeight, cardBaseWidth];
            }

            // Calculate the top-left corner of the card's visual space based on its center 'x, y' from the cards data
            const cardLeft = cardData.x - (currentCardWidth / 2);
            const cardTop = cardData.y - (currentCardHeight / 2);

            minX = Math.min(minX, cardLeft);
            minY = Math.min(minY, cardTop);
            maxX = Math.max(maxX, cardLeft + currentCardWidth);
            maxY = Math.max(maxY, cardTop + currentCardHeight);
        });

        const contentWidth = maxX - minX;
        const contentHeight = maxY - minY;
        const viewportWidth = this.ui.canvas.clientWidth;
        const viewportHeight = this.ui.canvas.clientHeight;

        if (contentWidth === 0 || contentHeight === 0) return;

        const PADDING = 80; // Padding around the spread
        const scaleX = (viewportWidth - PADDING) / contentWidth;
        const scaleY = (viewportHeight - PADDING) / contentHeight;
        const newScale = Math.min(scaleX, scaleY);

        // Calculate the center of the spread content
        const contentCenterX = minX + contentWidth / 2;
        const contentCenterY = minY + contentHeight / 2;

        this.canvasState.x = (viewportWidth / 2) - (contentCenterX * newScale);
        this.canvasState.y = (viewportHeight / 2) - (contentCenterY * newScale);
        this.canvasState.scale = newScale;

        this.applyTransform();
    }
}