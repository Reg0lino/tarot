// js/spread-creator.js

class SpreadCreator {
    constructor(appContainer) {
        this.appContainer = appContainer;
        this.ui = {}; 
        this.cards = []; 
        this.selectedCard = null; 

        // Initial View State (Centered 1600x1200 canvas)
        this.canvasState = {
            x: (window.innerWidth - 1600) / 2, 
            y: (window.innerHeight - 1200 - 65) / 2, 
            scale: 1
        };

        // Interaction Flags
        this.isPanning = false;
        this.isDraggingCard = false;
        
        // Interaction Math Containers
        this.startPoint = { x: 0, y: 0 }; // For Panning
        this.lastPanPosition = { x: 0, y: 0 }; // For Panning
        this.dragOffset = { x: 0, y: 0 }; // For Card Dragging

        this.gridSize = 10; 

        // Bindings
        this.boundPointerDown = this.handlePointerDown.bind(this);
        this.boundPointerMove = this.handlePointerMove.bind(this);
        this.boundPointerUp = this.handlePointerUp.bind(this);
        this.boundWheel = this.handleWheel.bind(this);

        // Debounced UI updater (prevents input lag during drag)
        this.debouncedUpdateUI = this.debounce(this.updateSelectedCardUI.bind(this), 50);

        console.log("SpreadCreator initialized (Traffic Cop Architecture).");
    }

    // --- Utility Methods ---
    
    debounce(func, wait) {
        let timeout;
        return function(...args) {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    }

    // --- Core Lifecycle ---

    start() {
        this.cacheUIElements();
        this.addEventListeners();
        this.loadCustomSpreadsList();
        
        // 1. Draw the grid ONCE. It is now a static background image.
        this.drawCanvasBackground(); 
        
        // 2. Move the DOM elements to the starting position.
        this.applyTransform(); 
    }

    cleanup() {
        this.removeEventListeners(); 
        this.ui = {};
        this.cards = [];
        this.selectedCard = null;
    }

    // --- Setup ---

    cacheUIElements() {
        // The Wrapper is the new "Master Controller" for events
        this.ui.wrapper = document.getElementById('creator-canvas-wrapper');
        
        this.ui.canvas = document.getElementById('creator-canvas');
        this.ui.cardContainer = document.getElementById('creator-card-container'); 
        
        // Controls
        this.ui.cardSpawner = document.getElementById('new-card-btn');
        this.ui.spreadNameInput = document.getElementById('spread-name-input');
        this.ui.spreadDescriptionInput = document.getElementById('spread-description-input');
        this.ui.saveSpreadBtn = document.getElementById('save-spread-btn');
        this.ui.customSpreadsList = document.getElementById('custom-spreads-list');
        
        // Inputs
        this.ui.positionXInput = document.getElementById('card-pos-x');
        this.ui.positionYInput = document.getElementById('card-pos-y');
        this.ui.rotationInput = document.getElementById('card-rotation');
        this.ui.labelInput = document.getElementById('card-label');
        this.ui.deleteCardBtn = document.getElementById('delete-card-btn');
        
        // Nudge Buttons
        this.ui.nudgeUpBtn = document.getElementById('nudge-up');
        this.ui.nudgeDownBtn = document.getElementById('nudge-down');
        this.ui.nudgeLeftBtn = document.getElementById('nudge-left');
        this.ui.nudgeRightBtn = document.getElementById('nudge-right');

        // Mobile Drawer
        this.ui.controlPanel = this.appContainer.querySelector('.control-panel');
        this.ui.mobileControlsTrigger = this.appContainer.querySelector('#mobile-controls-trigger');
        this.ui.drawerCloseBtn = this.appContainer.querySelector('#drawer-close-btn');

        if (this.ui.canvas) {
            this.ui.canvas.width = 1600;
            this.ui.canvas.height = 1200;
            this.ui.wrapper.style.cursor = 'grab';
        }
    }

    addEventListeners() {
        // THE TRAFFIC COP: One listener to rule them all
        // We listen on the wrapper, not the canvas or individual cards.
        this.ui.wrapper.addEventListener('pointerdown', this.boundPointerDown);
        
        // Global move/up listeners to catch drags that go outside the window
        document.addEventListener('pointermove', this.boundPointerMove);
        document.addEventListener('pointerup', this.boundPointerUp);
        
        // Zoom listener
        this.ui.wrapper.addEventListener('wheel', this.boundWheel, { passive: false });

        // UI Interactions
        this.ui.cardSpawner.addEventListener('click', (e) => this.handleNewCard(e));
        this.ui.saveSpreadBtn.addEventListener('click', this.handleSaveSpread.bind(this));
        this.ui.deleteCardBtn.addEventListener('click', this.handleDeleteCard.bind(this));
        
        this.ui.nudgeUpBtn.addEventListener('click', () => this.nudgeSelectedCard(0, -this.gridSize));
        this.ui.nudgeDownBtn.addEventListener('click', () => this.nudgeSelectedCard(0, this.gridSize));
        this.ui.nudgeLeftBtn.addEventListener('click', () => this.nudgeSelectedCard(-this.gridSize, 0));
        this.ui.nudgeRightBtn.addEventListener('click', () => this.nudgeSelectedCard(this.gridSize, 0));
        
        this.ui.positionXInput.addEventListener('change', this.handleCardInputChange.bind(this));
        this.ui.positionYInput.addEventListener('change', this.handleCardInputChange.bind(this));
        this.ui.rotationInput.addEventListener('change', this.handleCardInputChange.bind(this));
        this.ui.labelInput.addEventListener('change', this.handleCardInputChange.bind(this));
        
        if (this.ui.mobileControlsTrigger) {
            this.ui.mobileControlsTrigger.addEventListener('click', () => this.ui.controlPanel.classList.add('is-open'));
        }
        if (this.ui.drawerCloseBtn) {
            this.ui.drawerCloseBtn.addEventListener('click', () => this.ui.controlPanel.classList.remove('is-open'));
        }
        
        window.addEventListener('resize', () => this.drawCanvasBackground());
    }

    removeEventListeners() {
        if (!this.ui.wrapper) return;
        this.ui.wrapper.removeEventListener('pointerdown', this.boundPointerDown);
        document.removeEventListener('pointermove', this.boundPointerMove);
        document.removeEventListener('pointerup', this.boundPointerUp);
        this.ui.wrapper.removeEventListener('wheel', this.boundWheel);
        
        this.ui.cardSpawner.removeEventListener('click', this.handleNewCard.bind(this));
        this.ui.saveSpreadBtn.removeEventListener('click', this.handleSaveSpread.bind(this));
        this.ui.deleteCardBtn.removeEventListener('click', this.handleDeleteCard.bind(this));
        
        this.ui.positionXInput.removeEventListener('change', this.handleCardInputChange.bind(this));
        this.ui.positionYInput.removeEventListener('change', this.handleCardInputChange.bind(this));
        this.ui.rotationInput.removeEventListener('change', this.handleCardInputChange.bind(this));
        this.ui.labelInput.removeEventListener('change', this.handleCardInputChange.bind(this));
        
        window.removeEventListener('resize', () => this.drawCanvasBackground());
    }

    // --- The "Traffic Cop" Event Logic ---

    handlePointerDown(e) {
        // Check what we clicked on
        const clickedCard = e.target.closest('.creator-card-placeholder');

        if (clickedCard) {
            // --- CASE A: USER CLICKED A CARD ---
            e.preventDefault();
            e.stopPropagation();

            // 1. Identify the card object
            const cardId = parseInt(clickedCard.dataset.cardId, 10);
            const cardData = this.cards.find(c => c.id === cardId);
            
            // 2. Select it
            this.selectCard(cardData); // Does NOT move camera

            // 3. Setup Dragging State
            this.isDraggingCard = true;
            this.isPanning = false; // Strict separation

            // 4. Calculate Offset for smooth dragging
            // Convert screen click to virtual canvas coordinates
            const wrapperRect = this.ui.wrapper.getBoundingClientRect();
            const point = e.touches ? e.touches[0] : e;
            
            const virtualMouseX = (point.clientX - wrapperRect.left - this.canvasState.x) / this.canvasState.scale;
            const virtualMouseY = (point.clientY - wrapperRect.top - this.canvasState.y) / this.canvasState.scale;

            this.dragOffset.x = this.selectedCard.x - virtualMouseX;
            this.dragOffset.y = this.selectedCard.y - virtualMouseY;
            
            // Visual feedback
            clickedCard.style.cursor = 'grabbing';

        } else {
            // --- CASE B: USER CLICKED THE BACKGROUND ---
            e.preventDefault();

            // 1. Deselect card (optional, but cleaner UX)
            if (this.selectedCard) {
                this.selectCard(null);
            }

            // 2. Setup Panning State
            this.isPanning = true;
            this.isDraggingCard = false; // Strict separation

            // 3. Capture start point for Panning
            const point = e.touches ? e.touches[0] : e;
            this.startPoint = { x: point.clientX, y: point.clientY };
            this.lastPanPosition = { x: this.canvasState.x, y: this.canvasState.y };
            
            this.ui.wrapper.style.cursor = 'grabbing';
        }
    }

    handlePointerMove(e) {
        // If we aren't doing anything, exit immediately
        if (!this.isPanning && !this.isDraggingCard) return;

        e.preventDefault();
        const point = e.touches ? e.touches[0] : e; 

        if (this.isPanning) {
            // --- PANNING LOGIC ---
            // Only moves the canvasState.x/y
            const dx = point.clientX - this.startPoint.x;
            const dy = point.clientY - this.startPoint.y;
            
            this.canvasState.x = this.lastPanPosition.x + dx;
            this.canvasState.y = this.lastPanPosition.y + dy;
            
            this.applyTransform(); // Updates CSS of container
        
        } else if (this.isDraggingCard && this.selectedCard) {
            // --- DRAGGING LOGIC ---
            // Only moves the Card Data
            
            const wrapperRect = this.ui.wrapper.getBoundingClientRect();
            
            const virtualMouseX = (point.clientX - wrapperRect.left - this.canvasState.x) / this.canvasState.scale;
            const virtualMouseY = (point.clientY - wrapperRect.top - this.canvasState.y) / this.canvasState.scale;

            // Apply offset to keep mouse anchored to same spot on card
            let newCardX = virtualMouseX + this.dragOffset.x;
            let newCardY = virtualMouseY + this.dragOffset.y;

            // Snap to Grid
            newCardX = Math.round(newCardX / this.gridSize) * this.gridSize;
            newCardY = Math.round(newCardY / this.gridSize) * this.gridSize;

            // Update Data
            this.selectedCard.x = newCardX;
            this.selectedCard.y = newCardY;
            
            // 1. Visual Update (Smooth)
            this.updateCardElement(this.selectedCard); 
            
            // 2. Sidebar Input Update (Debounced)
            this.debouncedUpdateUI(); 
        }
    }

    handlePointerUp() {
        this.isPanning = false;
        this.isDraggingCard = false;
        this.ui.wrapper.style.cursor = 'grab';

        // Reset cursors on all cards
        if (this.ui.cardContainer) {
            this.ui.cardContainer.querySelectorAll('.creator-card-placeholder').forEach(el => {
                el.style.cursor = 'grab'; 
            });
        }
    }

    // --- Canvas Rendering ---

    drawCanvasBackground() {
        if (!this.ui.canvas) return;
        const ctx = this.ui.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.ui.canvas.width, this.ui.canvas.height);
        
        // Draw Grid
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 0.5;
        for (let x = 0; x <= this.ui.canvas.width; x += this.gridSize) {
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, this.ui.canvas.height); ctx.stroke();
        }
        for (let y = 0; y <= this.ui.canvas.height; y += this.gridSize) {
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(this.ui.canvas.width, y); ctx.stroke();
        }
        ctx.strokeRect(0, 0, this.ui.canvas.width, this.ui.canvas.height);
    }

    applyTransform() {
        // Moves the Container and Canvas DOM elements. Does NOT redraw grid.
        const transformString = `translate(${this.canvasState.x}px, ${this.canvasState.y}px) scale(${this.canvasState.scale})`;
        
        if (this.ui.cardContainer) {
            this.ui.cardContainer.style.transformOrigin = 'top left';
            this.ui.cardContainer.style.transform = transformString;
        }
        
        if (this.ui.canvas) {
            this.ui.canvas.style.transformOrigin = 'top left';
            this.ui.canvas.style.transform = transformString;
        }
    }

    handleWheel(e) {
        e.preventDefault();
        const oldScale = this.canvasState.scale;
        const zoomFactor = 1.1; 
        
        let newScale = e.deltaY > 0 ? oldScale / zoomFactor : oldScale * zoomFactor;
        newScale = Math.max(0.1, Math.min(newScale, 10)); 

        const wrapperRect = this.ui.wrapper.getBoundingClientRect();
        const mouseX = e.clientX - wrapperRect.left;
        const mouseY = e.clientY - wrapperRect.top;

        const worldX = (mouseX - this.canvasState.x) / oldScale;
        const worldY = (mouseY - this.canvasState.y) / oldScale;

        this.canvasState.x = mouseX - (worldX * newScale);
        this.canvasState.y = mouseY - (worldY * newScale);
        this.canvasState.scale = newScale;

        this.applyTransform();
    }

    // --- Card Logic ---

    renderCards() {
        // This function completely rebuilds the DOM for cards. Use sparingly.
        this.ui.cardContainer.innerHTML = ''; 
        this.cards.forEach(cardData => {
            const cardEl = this.createCardElement(cardData);
            this.ui.cardContainer.appendChild(cardEl);
        });
        this.updateSelectedCardUI();
    }

    createCardElement(cardData) {
        const cardEl = document.createElement('div');
        cardEl.className = 'position-container creator-card-placeholder';
        cardEl.dataset.cardId = cardData.id;
        cardEl.style.position = 'absolute';
        
        // NOTE: No event listeners attached here anymore! 
        // Delegation on wrapper handles it.

        let w = 120, h = 210;
        if (cardData.rotation === 90 || cardData.rotation === 270) { [w, h] = [h, w]; }

        const left = cardData.x - (w / 2);
        const top = cardData.y - (h / 2);

        cardEl.style.left = `${left}px`;
        cardEl.style.top = `${top}px`;
        cardEl.style.transform = `rotate(${cardData.rotation}deg)`;

        cardEl.innerHTML = `
            <div class="card-container card-placeholder"></div>
            <div class="position-label">${cardData.label || `Card ${cardData.id}`}</div>
        `;

        if (this.selectedCard && this.selectedCard.id === cardData.id) {
            cardEl.classList.add('selected');
        }

        return cardEl;
    }

    updateCardElement(cardData) {
        // Updates a single card's DOM without rebuilding everything
        const cardEl = this.ui.cardContainer.querySelector(`[data-card-id="${cardData.id}"]`);
        if (cardEl) {
            let w = 120, h = 210;
            if (cardData.rotation === 90 || cardData.rotation === 270) { [w, h] = [h, w]; }
            
            cardEl.style.left = `${cardData.x - (w / 2)}px`;
            cardEl.style.top = `${cardData.y - (h / 2)}px`;
            cardEl.style.transform = `rotate(${cardData.rotation}deg)`;
            cardEl.querySelector('.position-label').textContent = cardData.label || `Card ${cardData.id}`;
        }
    }

    handleNewCard(e) {
        const newId = this.cards.length > 0 ? Math.max(...this.cards.map(c => c.id)) + 1 : 1;
        
        // Calculate spawn position: center of the current viewport
        const wrapperRect = this.ui.wrapper.getBoundingClientRect();
        const viewportCenterX = wrapperRect.width / 2;
        const viewportCenterY = wrapperRect.height / 2;

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
        this.selectCard(newCard); 
        // NOTE: We do NOT center the view. Passive Camera.

        console.log(`Added Card ${newId} at ${snappedX}, ${snappedY}`);

        if (this.ui.controlPanel && this.ui.controlPanel.classList.contains('is-open')) {
            this.ui.controlPanel.classList.remove('is-open');
        }
    }

    selectCard(cardObject) {
        // Visual Update Only
        this.ui.cardContainer.querySelectorAll('.creator-card-placeholder.selected').forEach(el => {
            el.classList.remove('selected');
        });

        this.selectedCard = cardObject;

        if (this.selectedCard) {
            const selectedEl = this.ui.cardContainer.querySelector(`[data-card-id="${this.selectedCard.id}"]`);
            if (selectedEl) {
                selectedEl.classList.add('selected');
            }
        }
        
        this.updateSelectedCardUI();
    }

    updateSelectedCardUI() {
        if (this.selectedCard) {
            this.ui.positionXInput.value = this.selectedCard.x;
            this.ui.positionYInput.value = this.selectedCard.y;
            this.ui.rotationInput.value = this.selectedCard.rotation;
            this.ui.labelInput.value = this.selectedCard.label;
            this.ui.deleteCardBtn.disabled = false;
        } else {
            this.ui.positionXInput.value = '';
            this.ui.positionYInput.value = '';
            this.ui.rotationInput.value = '';
            this.ui.labelInput.value = '';
            this.ui.deleteCardBtn.disabled = true;
        }
    }

    handleCardInputChange() {
        if (!this.selectedCard) return;

        this.selectedCard.x = Math.round(parseInt(this.ui.positionXInput.value, 10) / this.gridSize) * this.gridSize || this.selectedCard.x;
        this.selectedCard.y = Math.round(parseInt(this.ui.positionYInput.value, 10) / this.gridSize) * this.gridSize || this.selectedCard.y;
        this.selectedCard.rotation = parseInt(this.ui.rotationInput.value, 10) || 0; 
        this.selectedCard.label = this.ui.labelInput.value.trim() || `Card ${this.selectedCard.id}`; 

        this.updateCardElement(this.selectedCard); 
        this.updateSelectedCardUI(); 
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
        this.cards = this.cards.filter(c => c.id !== this.selectedCard.id);
        this.selectCard(null);
        this.renderCards();
    }

    // --- Save/Load ---

    handleSaveSpread() {
        const spreadName = this.ui.spreadNameInput.value.trim();
        const spreadDescription = this.ui.spreadDescriptionInput.value.trim();

        if (!spreadName || this.cards.length === 0) {
            alert("Please provide a spread name and add at least one card.");
            return;
        }

        const newSpread = {
            id: `custom-${Date.now()}`, 
            name: spreadName,
            description: spreadDescription,
            cardCount: this.cards.length,
            positions: this.cards.map(card => ({
                label: card.label,
                x: card.x,
                y: card.y,
                rotation: card.rotation
            }))
        };

        let savedSpreads = JSON.parse(localStorage.getItem('customTarotSpreads') || '[]');
        const existingIndex = savedSpreads.findIndex(s => s.name === spreadName);
        if (existingIndex > -1) {
            if (!confirm(`A spread named "${spreadName}" already exists. Do you want to overwrite it?`)) {
                return;
            }
            savedSpreads[existingIndex] = newSpread; 
        } else {
            savedSpreads.push(newSpread); 
        }
        localStorage.setItem('customTarotSpreads', JSON.stringify(savedSpreads));
        alert(`Spread "${spreadName}" saved successfully!`);
        this.loadCustomSpreadsList(); 
    }

    loadCustomSpreadsList() {
        this.ui.customSpreadsList.innerHTML = ''; 
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
            this.selectCard(null);
            
            alert(`Spread "${spreadToLoad.name}" loaded.`);
            // NOTE: Auto-fit removed for Passive Camera consistency.
            // You can add this.autoFitToContent() here if you want fit ONLY on load.
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
        this.loadCustomSpreadsList(); 
        alert("Spread deleted.");
    }

    autoFitToContent() {
        // Logic exists if needed for a "Reset View" button, but not called automatically.
        if (this.cards.length === 0) {
            this.canvasState.x = 0; this.canvasState.y = 0; this.canvasState.scale = 1;
            this.applyTransform();
            return;
        }
        // ... (Standard auto-fit logic can remain here if you add a button for it)
    }
}