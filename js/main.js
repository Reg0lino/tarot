/*
===================================================================
 main.js (Version 2.0: JSON-based Spread Loading)
===================================================================
*/

document.addEventListener('DOMContentLoaded', () => {

    // -----------------------------------------------------------------
    // |                1. APP-WIDE STATE & CONSTANTS                  |
    // -----------------------------------------------------------------

    // This will be populated asynchronously from JSON files.
    // It is declared here to be accessible within the module scope.
    let masterSpreads = {}; 
    
    // The main container where different views (templates) will be rendered.
    const appContainer = document.getElementById('app-container');
    
    // A variable to hold the instance of the SpreadCreator class when that page is active.
    let spreadCreatorInstance = null;

    // -----------------------------------------------------------------
    // |                   2. CORE HELPER FUNCTIONS                    |
    // -----------------------------------------------------------------

    /**
     * Asynchronously loads all default and custom spreads.
     * Fetches a manifest file for default spreads, then fetches each JSON file.
     * Merges them with custom spreads found in localStorage.
     * @returns {Promise<Object>} A promise that resolves to a unified object of all available spreads.
     */
    async function loadAllSpreads() {
        console.log("Attempting to load all spreads...");
        let availableSpreads = {};

        try {
            // --- Step 1: Fetch the manifest of default spreads ---
            const manifestResponse = await fetch('spreads/manifest.json');
            if (!manifestResponse.ok) {
                throw new Error(`HTTP error! status: ${manifestResponse.status}`);
            }
            const manifest = await manifestResponse.json();
            console.log("Spread manifest loaded:", manifest);

            // --- Step 2: Fetch all individual spread files listed in the manifest ---
            const spreadFetchPromises = manifest.map(fileName =>
                fetch(`spreads/${fileName}`).then(res => {
                    if (!res.ok) {
                        // Log the error for the specific file but don't stop the whole process
                        console.error(`Failed to fetch ${fileName}`);
                        return null; // Return null for failed fetches
                    }
                    return res.json();
                })
            );
            
            const loadedDefaultSpreads = await Promise.all(spreadFetchPromises);
            
            // --- Step 3: Populate the availableSpreads object with valid default spreads ---
            loadedDefaultSpreads.forEach(spread => {
                if (spread && spread.id) { // Check if the spread loaded correctly
                    availableSpreads[spread.id] = spread;
                }
            });

            console.log("Default spreads processed:", availableSpreads);

        } catch (error) {
            console.error("Could not load default spreads from JSON files:", error);
            // If fetching fails, the app will proceed with only custom spreads.
        }

        // --- Step 4: Load custom spreads from localStorage ---
        try {
            const customSpreads = JSON.parse(localStorage.getItem('customTarotSpreads') || '[]');
            
            // --- Step 5: Merge custom spreads into the main object ---
            customSpreads.forEach(spread => {
                if (spread && spread.id) {
                    availableSpreads[spread.id] = spread;
                }
            });
            console.log("Custom spreads merged.");
        } catch (error) {
            console.error("Could not parse custom spreads from localStorage:", error);
        }

        console.log("All available spreads ready:", availableSpreads);
        return availableSpreads;
    }

    /**
     * Loads the tarot deck data from the global `tarotDeckData` variable.
     * This function is kept for consistency and future expansion.
     * @returns {Promise<Array>} A promise that resolves to the deck array.
     */
    async function loadDeck() {
        if (typeof tarotDeckData !== 'undefined' && tarotDeckData.length > 0) {
            return tarotDeckData;
        }
        console.error("tarot-deck.js data not found or is empty.");
        return [];
    }

    /**
     * Replaces <dfn> tags with interactive dictionary links.
     * @param {string} text - The input text containing <dfn> tags.
     * @returns {string} The processed text with anchor tags.
     */
    function createDictionaryLinks(text) {
        if (!text) return '';
        return text.replace(/<dfn>(.*?)<\/dfn>/g, (match, word) => {
            return `<a href="https://www.merriam-webster.com/dictionary/${word.toLowerCase()}" target="_blank" rel="noopener noreferrer" class="dict-link" title="Look up '${word}'">${word}</a>`;
        });
    }

    /**
     * Opens the modal with detailed information about a given card.
     * @param {Object} card - The card object to display.
     */
    function openModal(card) {
        const modal = document.getElementById('card-modal');
        const content = document.getElementById('modal-card-content');
        if (!modal || !content) return;

        const uprightMeaning = `<div class="meaning-section ${!card.isReversed ? 'highlight' : ''}"><h4>Meaning (Upright)</h4><p>${createDictionaryLinks(card.meanings.upright)}</p></div>`;
        const reversedMeaning = `<div class="meaning-section ${card.isReversed ? 'highlight' : ''}"><h4>Meaning (Reversed)</h4><p>${createDictionaryLinks(card.meanings.reversed)}</p></div>`;
        const advice = `<div class="meaning-section"><h4>Advice</h4><p>${createDictionaryLinks(card.isReversed ? card.advice.reversed : card.advice.upright)}</p></div>`;
        const keywordsHTML = `<p><strong>Keywords:</strong> ${createDictionaryLinks((card.isReversed ? card.keywords.reversed : card.keywords.upright).join(', '))}</p>`;
        const notesHTML = (card.notes && card.notes.critique) ? `<details><summary>Historical Notes & Analysis</summary><div class="details-content"><p>${createDictionaryLinks(card.notes.critique)}</p></div></details>` : '';
        
        content.innerHTML = `
            <img src="img/cards/${card.img}" alt="${card.name}" class="${card.isReversed ? 'reversed' : ''}">
            <div>
                <h3>${card.name}</h3>
                <details open><summary>Meanings & Advice</summary><div class="details-content">${uprightMeaning}${reversedMeaning}${advice}</div></details>
                <details><summary>Keywords</summary><div class="details-content">${keywordsHTML}</div></details>
                <details><summary>General Symbolism</summary><div class="details-content"><p>${createDictionaryLinks(card.meanings.general)}</p></div></details>
                ${notesHTML}
            </div>`;
        modal.classList.remove('hidden');
    }

    /**
     * Creates a seeded pseudo-random number generator (PRNG).
     * @param {number} seed - The seed for the generator.
     * @returns {function(): number} A function that returns a random number between 0 and 1.
     */
    window.createPRNG = function(seed) {
        let state = seed % 2147483647;
        if (state <= 0) state += 2147483646;
        return function() {
            state = (state * 16807) % 2147483647;
            return (state - 1) / 2147483646;
        };
    }

    /**
     * Debounces a function to limit the rate at which it gets called.
     * @param {Function} func - The function to debounce.
     * @param {number} wait - The debounce timeout in milliseconds.
     * @returns {Function} The debounced function.
     */
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /**
     * Performs a seeded shuffle on a given deck of cards.
     * Reads shuffle settings from the DOM.
     * @param {Array} deck - The deck of cards to shuffle.
     * @returns {{seed: number, shuffledDeck: Array}} An object containing the final seed and the shuffled deck.
     */
    function performShuffle(deck) {
        const methodRadio = document.querySelector('input[name="shuffle-method"]:checked');
        const shuffleInput = document.getElementById('shuffle-input');
        const method = methodRadio ? methodRadio.value : 'timestamp';
        let value = shuffleInput ? shuffleInput.value : '';
        let seed;

        if (method === 'text') {
            // Use timestamp if text is empty, otherwise hash the text
            seed = value.trim() ? value.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) : new Date().getTime();
            if(!value.trim()) value = "N/A (Timestamp used)"; // For console logging
        } else if (method === 'number' && value.trim() && !isNaN(value)) {
            seed = parseInt(value, 10);
        } else { // 'timestamp' or any other fallback
            seed = new Date().getTime();
            value = "N/A (Timestamp used)"; // For console logging
        }

        const finalSeed = Math.floor(seed * Math.PI);
        const shuffleRandom = window.createPRNG(finalSeed);

        console.clear();
        console.log("%c--- SHUFFLE CALCULATION AUDIT ---", "font-weight:bold; color: #FFD700;");
        console.log(`Shuffle Method: %c${method.toUpperCase()}`, "font-weight:bold;");
        console.log(`User Input: %c"${value}"`, "font-weight:bold;");
        console.log(`Calculated Initial Seed: %c${seed}`, "font-weight:bold;");
        console.log(`Final Seed (Initial × π): %c${finalSeed}`, "font-weight:bold;");
        console.log("%cThis final seed number is the sole input for the shuffling algorithm.", "font-style:italic;");
        console.log("%c---------------------------------", "color: #FFD700;");

        let shuffledDeck = [...deck];
        for (let i = shuffledDeck.length - 1; i > 0; i--) {
            const j = Math.floor(shuffleRandom() * (i + 1));
            [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
        }
        return {
            seed: finalSeed,
            shuffledDeck
        };
    }
    // -----------------------------------------------------------------
    // |                3. VIEW INITIALIZATION LOGIC                   |
    // -----------------------------------------------------------------

    /**
     * Initializes the Home page view.
     * Sets up the "Card of the Day" feature.
     */
    function initHomeView() {
        const cardContainer = document.getElementById('card-of-the-day-container');
        const learnMoreContainer = document.getElementById('learn-more-container');
        const learnMoreBtn = document.getElementById('learn-more-btn');
        const meaningText = document.getElementById('card-of-the-day-meaning');

        if (!cardContainer || !learnMoreContainer || !learnMoreBtn || !meaningText) {
            console.error("Home view elements not found.");
            return;
        }

        async function drawCardOfTheDay() {
            const deck = await loadDeck();
            if (deck.length === 0) return;

            // Generate a consistent daily card based on the day's index
            const today = new Date();
            const dayIndex = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
            const cardIndex = (dayIndex + 5) % deck.length; // Add an offset to not start with The Fool
            const card = { ...deck[cardIndex], isReversed: false }; // Card of the day is always upright

            cardContainer.innerHTML = `
                <div class="card-container">
                    <div class="tarot-card">
                        <div class="card-face card-back"></div>
                        <div class="card-face card-front">
                            <img src="img/cards/${card.img}" alt="${card.name}">
                        </div>
                    </div>
                </div>`;

            const cardElement = cardContainer.querySelector('.card-container');
            cardElement.addEventListener('click', () => {
                if (cardElement.classList.contains('flipped')) return;
                cardElement.classList.add('flipped');
                const meaning = card.keywords.upright[0];
                meaningText.textContent = `Today's theme: ${meaning}.`;
                learnMoreContainer.classList.add('visible');
            }, { once: true });

            learnMoreBtn.addEventListener('click', () => openModal(card));
        }

        drawCardOfTheDay();
    }


    /**
     * Initializes the Reading Room page view.
     * This function is the main controller for setting up a reading.
     * @param {Object} availableSpreads - The unified object of all default and custom spreads.
     */
    function initReadingRoomView(availableSpreads) {

        // --- 1. View-Specific State & Elements ---
        const settingsKey = 'openTarotSettings';
        let selectedSpreadKey = Object.keys(availableSpreads)[0] || null; // Default to first available spread

        const ui = {
            spreadSelection: document.getElementById('spread-selection'),
            spreadInfoText: document.getElementById('spread-info-text'),
            reversedCardsCheckbox: document.getElementById('reversed-cards-checkbox'),
            shuffleMethodsContainer: document.getElementById('shuffle-methods'),
            shuffleInput: document.getElementById('shuffle-input'),
            generateBtn: document.getElementById('generate-btn'),
            shuffleExplanation: document.getElementById('shuffle-explanation'),
            dealBtn: document.getElementById('deal-cards-btn'),
            readingCanvas: document.getElementById('reading-canvas'),
            readingCloth: document.getElementById('reading-cloth'),
            revealAllContainer: document.getElementById('reveal-all-container'),
            readingActionBtn: document.getElementById('reading-action-btn'),
            canvasPlaceholder: document.querySelector('.canvas-placeholder-text'),
            mobileControlsTrigger: document.getElementById('mobile-controls-trigger'),
            controlPanel: document.querySelector('.control-panel'),
            drawerCloseBtn: document.getElementById('drawer-close-btn'),
            cardBackSelection: document.getElementById('card-back-selection'),
            clothSelection: document.getElementById('cloth-selection'),
            sizeSlider: document.getElementById('layout-size-slider'),
            sliderValue: document.getElementById('slider-value'),
            resetSizeBtn: document.getElementById('reset-size-btn'),
            canvasHint: document.querySelector('.canvas-hint')
        };

        // Make openModal globally accessible from the card elements
        window.openModal = openModal;

        // --- 2. State Management & Core Logic ---

        const canvasState = { x: 0, y: 0, scale: 1 };
        let isPanning = false;
        let startPoint = { x: 0, y: 0 };
        let lastPanPosition = { x: 0, y: 0 };
        let hintDismissTimer = null;
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        // --- Inner Functions for Reading Room ---

        function applyTransform() {
            if (ui.readingCloth) {
                ui.readingCloth.style.transformOrigin = 'top left';
                ui.readingCloth.style.transform = `translate(${canvasState.x}px, ${canvasState.y}px) scale(${canvasState.scale})`;
            }
        }

        function createPositionElement(index, posData) {
            const position = document.createElement('div');
            position.className = `position-container pos-${index}`;

            if (posData.x !== undefined && posData.y !== undefined) {
                position.style.position = 'absolute';
                let cardWidth = 120;
                let cardHeight = 210;
                if (posData.rotation === 90 || posData.rotation === 270) {
                    [cardWidth, cardHeight] = [cardHeight, cardWidth];
                }
                position.style.top = `${posData.y - (cardHeight / 2)}px`;
                position.style.left = `${posData.x - (cardWidth / 2)}px`;
            }

            if (posData.rotation !== undefined) {
                position.classList.add(`rotate-${posData.rotation}`);
            } else {
                position.classList.add('rotate-0');
            }

            position.innerHTML = `
                <div class="card-container card-placeholder"></div>
                <div class="position-label">${posData.label || `Card ${index}`}</div>`;
            return position;
        }

        function drawSpreadBlueprint(spreadsCollection) {
            if (!spreadsCollection || !spreadsCollection[selectedSpreadKey]) {
                console.error("Cannot draw blueprint: Invalid spread key or collection.");
                return;
            }
            
            let spread = spreadsCollection[selectedSpreadKey];
            const cloth = ui.readingCloth;

            cloth.innerHTML = '';
            ui.readingCanvas.classList.add('blueprint-mode');
            if (ui.canvasPlaceholder) ui.canvasPlaceholder.style.display = 'block';

            if (spread.positions) {
                cloth.style.position = 'relative';
                cloth.style.width = '1600px';
                cloth.style.height = '1200px';
                cloth.style.display = 'block';
                cloth.style.padding = '0';
                cloth.style.gap = '0';
                cloth.style.gridTemplateColumns = 'none';

                const placedIndices = new Set();
                if (spread.overlapGroups) {
                    spread.overlapGroups.forEach(group => {
                        const groupAnchorCardData = spread.positions[group[0] - 1];
                        const groupContainer = document.createElement('div');
                        groupContainer.className = 'overlap-group';
                        groupContainer.style.position = 'absolute';
                        
                        let anchorCardWidth = 120;
                        let anchorCardHeight = 210;
                        if (groupAnchorCardData.rotation === 90 || groupAnchorCardData.rotation === 270) {
                            [anchorCardWidth, anchorCardHeight] = [anchorCardHeight, anchorCardWidth];
                        }
                        groupContainer.style.top = `${groupAnchorCardData.y - (anchorCardHeight / 2)}px`;
                        groupContainer.style.left = `${groupAnchorCardData.x - (anchorCardWidth / 2)}px`;
                        
                        group.forEach((posIndex, idx) => {
                            const actualCardData = spread.positions[posIndex - 1];
                            const positionEl = createPositionElement(posIndex, {
                                label: actualCardData.label,
                                rotation: actualCardData.rotation
                            });
                            
                            if (idx === 0) positionEl.classList.add('overlap-bottom-card');
                            else if (idx === 1) positionEl.classList.add('overlap-top-card');
                            
                            groupContainer.appendChild(positionEl);
                            placedIndices.add(posIndex);
                        });
                        cloth.appendChild(groupContainer);
                    });
                }
                
                spread.positions.forEach((posData, index) => {
                    const cardPositionIndex = index + 1;
                    if (!placedIndices.has(cardPositionIndex)) {
                        const positionEl = createPositionElement(cardPositionIndex, posData);
                        cloth.appendChild(positionEl);
                    }
                });
            }
        }

        function autoFitSpread(spreadsCollection) {
            setTimeout(() => {
                if (!spreadsCollection || !spreadsCollection[selectedSpreadKey]) return;

                const spread = spreadsCollection[selectedSpreadKey];
                const container = ui.readingCanvas;

                if (!spread || !spread.positions || spread.positions.length === 0 || !container) {
                    canvasState.x = 0; canvasState.y = 0; canvasState.scale = 1;
                    applyTransform();
                    ui.sliderValue.textContent = '100%';
                    ui.sizeSlider.value = 100;
                    return;
                }

                let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
                const cardBaseWidth = 120;
                const cardBaseHeight = 210;

                spread.positions.forEach(posData => {
                    let currentCardWidth = cardBaseWidth;
                    let currentCardHeight = cardBaseHeight;
                    if (posData.rotation === 90 || posData.rotation === 270) {
                        [currentCardWidth, currentCardHeight] = [cardBaseHeight, cardBaseWidth];
                    }
                    const cardLeft = posData.x - (currentCardWidth / 2);
                    const cardTop = posData.y - (currentCardHeight / 2);
                    minX = Math.min(minX, cardLeft);
                    minY = Math.min(minY, cardTop);
                    maxX = Math.max(maxX, cardLeft + currentCardWidth);
                    maxY = Math.max(maxY, cardTop + currentCardHeight);
});

                const contentWidth = maxX - minX;
                const contentHeight = maxY - minY;
                const viewportWidth = container.clientWidth;
                const viewportHeight = container.clientHeight;

                if (contentWidth === 0 || contentHeight === 0) return;

                const PADDING = 80;
                const scaleX = (viewportWidth - PADDING) / contentWidth;
                const scaleY = (viewportHeight - PADDING) / contentHeight;
                const newScale = Math.min(scaleX, scaleY);

                const contentCenterX = minX + contentWidth / 2;
                const contentCenterY = minY + contentHeight / 2;

                canvasState.x = (viewportWidth / 2) - (contentCenterX * newScale);
                canvasState.y = (viewportHeight / 2) - (contentCenterY * newScale);
                canvasState.scale = newScale;

                applyTransform();

                ui.sliderValue.textContent = `${Math.round(canvasState.scale * 100)}%`;
                ui.sizeSlider.value = canvasState.scale * 100;

                if (isTouchDevice) {
                    const hint = ui.canvasHint;
                    if (hint && !hint.classList.contains('hidden')) {
                        hint.style.display = 'block';
                        hintDismissTimer = setTimeout(() => {
                            if (hint && !hint.classList.contains('hidden')) {
                                hint.classList.add('hidden');
                                ui.readingCanvas.removeEventListener('pointerdown', dismissHintOnTap, true);
                            }
                        }, 5000);
                    }
                }
            }, 100);
        }

        // This is still inside the initReadingRoomView function

        function saveSettings() {
            const selectedRadio = document.querySelector('input[name="shuffle-method"]:checked');
            const settings = {
                spread: selectedSpreadKey,
                reversed: ui.reversedCardsCheckbox.checked,
                shuffleMethod: selectedRadio ? selectedRadio.value : 'text',
                cardBack: document.querySelector('input[name="card-back"]:checked')?.value,
                cloth: document.querySelector('input[name="cloth-pattern"]:checked')?.value,
            };
            localStorage.setItem(settingsKey, JSON.stringify(settings));
        }

        function loadSettings() {
            const saved = localStorage.getItem(settingsKey);
            if (!saved) return;
            const settings = JSON.parse(saved);

            // Check if the saved spread key still exists in the available spreads
            if (settings.spread && availableSpreads[settings.spread]) {
                selectedSpreadKey = settings.spread;
            }
            
            if (ui.reversedCardsCheckbox) {
                ui.reversedCardsCheckbox.checked = settings.reversed ?? true; // Default to true if not set
            }
            
            const shuffleMethodRadio = document.querySelector(`input[name="shuffle-method"][value="${settings.shuffleMethod}"]`);
            if (shuffleMethodRadio) shuffleMethodRadio.click();
            
            const cardBackRadio = document.querySelector(`input[name="card-back"][value="${settings.cardBack}"]`);
            if (cardBackRadio) cardBackRadio.click();

            const clothRadio = document.querySelector(`input[name="cloth-pattern"][value="${settings.cloth}"]`);
            if (clothRadio) clothRadio.click();
        }

        function updateShuffleExplanation() {
            const methodRadio = document.querySelector('input[name="shuffle-method"]:checked');
            if (!methodRadio || !ui.shuffleExplanation) return;

            const method = methodRadio.value;
            let seedExplanationHTML = '';

            switch (method) {
                case 'text':
                    seedExplanationHTML = `<p>Each character you type is converted to a numeric code. These codes are summed to produce a single number.</p>
                    <p><strong>Example:</strong> "A" becomes 65, "B" becomes 66. "AB" results in 131.</p>
                    <p><em>Note: If the text box is left empty, the shuffle will use the current timestamp as its seed.</em></p>`;
                    break;
                case 'number':
                    seedExplanationHTML = '<p>The number you enter is used directly as the base for the seed.</p>';
                    break;
                case 'timestamp':
                    seedExplanationHTML = '<p>The current time, measured in milliseconds since Jan 1, 1970, is used as the base number.</p>';
                    break;
            }

            const fullExplanation = `
                ${seedExplanationHTML}
                <p>This base number is then multiplied by Pi (≈3.14159) to create the final, unique <strong>seed</strong>.</p>
                <p>This seed is the starting point for a Pseudo-Random Number Generator (PRNG). A PRNG creates a sequence of numbers that appears random, but is fully determined by the seed. <strong>The same seed will always produce the exact same sequence of numbers, resulting in the exact same card shuffle.</strong></p>
                <hr>
                <h4>Actions in the Shuffle Zone</h4>
                <p>Once the shuffle modal appears, you have two ways to directly manipulate the final card order before the deal.</p>
                <p><strong>The "Cut" Button:</strong></p>
                <p>This action performs a single, precise cut. The program divides the 78-card array at a near-random point (between card 34 and 44) and places the bottom stack on top of the upper stack. This is a deterministic, non-randomizing action.</p>
                <p><strong>The "Shuffle Again" Button:</strong></p>
                <p>This performs a digital version of a "wash" or "scramble" shuffle. The program iterates through the array of 78 cards, from the first card to the last. For each card, it swaps its position with another randomly selected card in the deck. This process significantly randomizes the entire deck order.</p>
            `;

            ui.shuffleExplanation.innerHTML = fullExplanation;
        }

        function dismissHintOnTap() {
            const hint = ui.canvasHint;
            if (hint && !hint.classList.contains('hidden')) {
                hint.classList.add('hidden');
                if (hintDismissTimer) {
                    clearTimeout(hintDismissTimer);
                }
                ui.readingCanvas.removeEventListener('pointerdown', dismissHintOnTap, true);
            }
        }

        // --- 3. Event Handlers ---

        function onPointerDown(e) {
            if (e.target.closest('.tarot-card')) return;
            e.preventDefault();
            isPanning = true;
            const point = e.touches ? e.touches[0] : e;
            startPoint = { x: point.clientX, y: point.clientY };
            lastPanPosition = { x: canvasState.x, y: canvasState.y };
        }

        function onPointerMove(e) {
            if (!isPanning) return;
            e.preventDefault();
            const point = e.touches ? e.touches[0] : e;
            const dx = point.clientX - startPoint.x;
            const dy = point.clientY - startPoint.y;
            canvasState.x = lastPanPosition.x + dx;
            canvasState.y = lastPanPosition.y + dy;
            applyTransform();
        }

        function onPointerUp() {
            isPanning = false;
        }

        function onWheel(e) {
            e.preventDefault();
            const oldScale = canvasState.scale;
            const zoomFactor = 1.1;
            let newScale = e.deltaY > 0 ? oldScale / zoomFactor : oldScale * zoomFactor;
            newScale = Math.max(0.1, Math.min(newScale, 10));

            const canvasRect = ui.readingCanvas.getBoundingClientRect();
            const mouseX = e.clientX - canvasRect.left;
            const mouseY = e.clientY - canvasRect.top;
            const worldX = (mouseX - canvasState.x) / oldScale;
            const worldY = (mouseY - canvasState.y) / oldScale;

            canvasState.x = mouseX - (worldX * newScale);
            canvasState.y = mouseY - (worldY * newScale);
            canvasState.scale = newScale;

            applyTransform();
            ui.sliderValue.textContent = `${Math.round(canvasState.scale * 100)}%`;
            ui.sizeSlider.value = canvasState.scale * 100;
        }

        // Attach event listeners for canvas interaction
        ui.readingCanvas.addEventListener("mousedown", onPointerDown);
        ui.readingCanvas.addEventListener("touchstart", onPointerDown, { passive: false });
        document.addEventListener("mouseup", onPointerUp);
        document.addEventListener("touchend", onPointerUp);
        document.addEventListener("mouseleave", onPointerUp);
        document.addEventListener("mousemove", onPointerMove);
        document.addEventListener("touchmove", onPointerMove, { passive: false });
        ui.readingCanvas.addEventListener("wheel", onWheel, { passive: false });

        if (isTouchDevice) {
            ui.readingCanvas.addEventListener('pointerdown', dismissHintOnTap, true);
        }
        if (ui.mobileControlsTrigger) {
            ui.mobileControlsTrigger.addEventListener('click', () => ui.controlPanel.classList.add('is-open'));
        }
        if (ui.drawerCloseBtn) {
            ui.drawerCloseBtn.addEventListener('click', () => ui.controlPanel.classList.remove('is-open'));
        }
        
        // --- Button Creation Loop (MODIFIED) ---
        Object.keys(availableSpreads).forEach(key => {
            const button = document.createElement('button');
            button.className = 'spread-btn';
            button.dataset.spreadKey = key;
            button.textContent = availableSpreads[key].name;
            ui.spreadSelection.appendChild(button);
        });

        // --- Add Creator Button (NEW) ---
        const creatorLink = document.createElement('a');
        creatorLink.href = '#spread-creator';
        creatorLink.className = 'spread-btn';
        creatorLink.textContent = 'Create / Edit Spreads';
        ui.spreadSelection.appendChild(creatorLink);


        // --- Spread Selection Event Listener (MODIFIED) ---
        ui.spreadSelection.addEventListener('click', (e) => {
            const targetButton = e.target.closest('.spread-btn[data-spread-key]');
            if (targetButton) {
                e.preventDefault();
                selectedSpreadKey = targetButton.dataset.spreadKey;
                
                document.querySelectorAll('.spread-btn').forEach(btn => 
                    btn.classList.toggle('selected', btn.dataset.spreadKey === selectedSpreadKey)
                );
                
                ui.spreadInfoText.textContent = availableSpreads[selectedSpreadKey].description;
                drawSpreadBlueprint(availableSpreads); // Pass the full collection
                autoFitSpread(availableSpreads);     // Pass the full collection
                saveSettings();
            }
        });

        ui.dealBtn.addEventListener('click', () => {
            // Pass the selected spread key in the URL to preserve state across re-renders
            window.location.hash = `#reading-room?deal=true&spread=${selectedSpreadKey}`;
        });

        ui.shuffleMethodsContainer.addEventListener('change', (e) => {
            if (e.target.name === 'shuffle-method') {
                const method = e.target.value;
                const isTimestamp = method === 'timestamp';
                ui.shuffleInput.disabled = isTimestamp;
                ui.generateBtn.style.display = method === 'number' ? 'inline-block' : 'none';
                ui.shuffleInput.placeholder = isTimestamp ? 'Timestamp will be used automatically.' : `Enter a ${method} here...`;
                if (isTimestamp) ui.shuffleInput.value = '';
                else ui.shuffleInput.value = '';
                updateShuffleExplanation();
                saveSettings();
            }
        });

        ui.generateBtn.addEventListener('click', () => {
            ui.shuffleInput.value = Math.floor(Math.random() * 900000) + 100000;
        });

        ui.shuffleInput.addEventListener('input', updateShuffleExplanation);

        ui.sizeSlider.addEventListener('input', (e) => {
            const newPercentage = parseFloat(e.target.value);
            const currentScale = canvasState.scale;
            const baseScale = currentScale / (ui.sizeSlider.value / 100); // Calculate a 'base' scale at 100%
            canvasState.scale = baseScale * (newPercentage / 100);
            
            applyTransform();
            ui.sliderValue.textContent = `${Math.round(newPercentage)}%`;
        });

        ui.resetSizeBtn.addEventListener('click', () => {
            autoFitSpread(availableSpreads);
        });

        ui.readingActionBtn.addEventListener('click', () => {
            ui.readingCloth.querySelectorAll('.card-container:not(.flipped)').forEach(card => card.classList.add('flipped'));
        });

        ui.reversedCardsCheckbox.addEventListener('change', saveSettings);
        ui.cardBackSelection.addEventListener('change', (e) => {
            if (e.target.name === 'card-back') {
                const selectedTheme = e.target.value;
                const themePrefix = 'card-back-theme-';
                document.body.classList.forEach(className => {
                    if (className.startsWith(themePrefix)) {
                        document.body.classList.remove(className);
                    }
                });
                if (selectedTheme !== 'default') {
                    document.body.classList.add(themePrefix + selectedTheme);
                }
                saveSettings();
            }
        });

        ui.clothSelection.addEventListener('change', (e) => {
            if (e.target.name === 'cloth-pattern') {
                const selectedTheme = e.target.value;
                const themePrefix = 'cloth-theme-';
                ui.readingCanvas.classList.forEach(className => {
                    if (className.startsWith(themePrefix)) {
                        ui.readingCanvas.classList.remove(className);
                    }
                });
                if (selectedTheme !== 'default') {
                    ui.readingCanvas.classList.add(themePrefix + selectedTheme);
                }
                saveSettings();
            }
        });

        // --- 4. Initialization ---
        
        loadSettings(); // Load settings first to establish the selectedSpreadKey

        // Initial UI update based on loaded or default settings
        document.querySelector(`.spread-btn[data-spread-key="${selectedSpreadKey}"]`)?.classList.add('selected');
        if (availableSpreads[selectedSpreadKey]) {
            ui.spreadInfoText.textContent = availableSpreads[selectedSpreadKey].description;
        }

        drawSpreadBlueprint(availableSpreads); // Initial drawing of the blueprint
        updateShuffleExplanation();
        autoFitSpread(availableSpreads);     // Initial auto-fitting of the canvas
        
        // Set initial card back and cloth themes
        const initialBack = document.querySelector('input[name="card-back"]:checked');
        if (initialBack && initialBack.value !== 'default') {
            document.body.classList.add('card-back-theme-' + initialBack.value);
        }
        const initialCloth = document.querySelector('input[name="cloth-pattern"]:checked');
        if (initialCloth && initialCloth.value !== 'default') {
            ui.readingCanvas.classList.add('cloth-theme-' + initialCloth.value);
        }

        // --- Deal Trigger Logic (Checks URL for deal parameter) ---
        const urlParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
        if (urlParams.get('deal') === 'true') {
            const spreadToDealKey = urlParams.get('spread');
            if (spreadToDealKey && availableSpreads[spreadToDealKey]) {
                selectedSpreadKey = spreadToDealKey; // Ensure correct spread is selected for the deal
            } else {
                // Fallback if the spread key from URL is invalid
                selectedSpreadKey = Object.keys(availableSpreads)[0];
            }
            
            history.replaceState(null, '', '#reading-room'); // Clean the URL to prevent re-dealing on refresh
            
            setTimeout(async () => {
                const deck = await loadDeck();
                const { shuffledDeck } = performShuffle(deck);
                const spread = availableSpreads[selectedSpreadKey];
                
                if (!spread) {
                    console.error("Deal cannot proceed: Selected spread is not available.");
                    return;
                }

                const shuffleController = new ShuffleController(shuffledDeck, spread, () => {
                    autoFitSpread(availableSpreads);
                    ui.readingCanvas.classList.remove('blueprint-mode');
                    ui.revealAllContainer.classList.remove('hidden');
                });

                ui.readingCanvas.classList.remove('blueprint-mode');
                if (ui.canvasPlaceholder) ui.canvasPlaceholder.style.display = 'none';
                if (ui.controlPanel && ui.controlPanel.classList.contains('is-open')) {
                    ui.controlPanel.classList.remove('is-open');
                }
                shuffleController.start();
            }, 50); // Small timeout to allow UI to render before starting shuffle
        }
    } // --- End of initReadingRoomView ---


    /**
     * Initializes the Grimoire (card encyclopedia) page view.
     * @param {string} [searchTerm=''] - An optional search term to pre-fill the search box.
     */
    function initGrimoireView(searchTerm = '') {
        const grimoireGrid = document.getElementById('grimoire-grid');
        const searchInput = document.getElementById('grimoire-search');
        const filterButtons = document.querySelectorAll('.grimoire-filter-btn');
        const resultsCount = document.getElementById('grimoire-results-count');

        if (!grimoireGrid || !searchInput || !resultsCount) {
            console.error("Grimoire view elements not found.");
            return;
        }

        let currentFilter = 'all';
        let allCards = [];

        async function renderCards() {
            if (allCards.length === 0) {
                allCards = await loadDeck();
            }
            if (allCards.length === 0) return;

            const term = searchInput.value.toLowerCase().trim();
            const filteredCards = allCards.filter(card => {
                const matchesSearch = term === '' ||
                    card.name.toLowerCase().includes(term) ||
                    card.keywords.upright.join(' ').toLowerCase().includes(term) ||
                    card.keywords.reversed.join(' ').toLowerCase().includes(term) ||
                    card.suit.toLowerCase().includes(term);

                const matchesFilter = currentFilter === 'all' ||
                    (currentFilter === 'major' && card.arcana === 'Major Arcana') ||
                    (card.suit.toLowerCase() === currentFilter);

                return matchesSearch && matchesFilter;
            });

            grimoireGrid.innerHTML = '';
            resultsCount.textContent = `Showing ${filteredCards.length} of ${allCards.length} cards.`;

            if (filteredCards.length === 0) {
                grimoireGrid.innerHTML = '<p class="no-results">No cards match your filter criteria.</p>';
                return;
            }

            const fragment = document.createDocumentFragment();
            filteredCards.forEach(card => {
                const cardEl = document.createElement('div');
                cardEl.className = 'grimoire-card-container';
                cardEl.innerHTML = `
                    <img src="img/cards/${card.img}" alt="${card.name}" loading="lazy">
                    <span class="grimoire-card-name">${card.name}</span>`;
                cardEl.addEventListener('click', () => openModal({ ...card, isReversed: false }));
                fragment.appendChild(cardEl);
            });
            grimoireGrid.appendChild(fragment);
        }

        searchInput.addEventListener('input', debounce(renderCards, 250));

        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterButtons.forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');
                currentFilter = e.currentTarget.dataset.filter;
                renderCards();
            });
        });

        if (searchTerm) {
            searchInput.value = searchTerm;
        }
        const activeButton = document.querySelector(`.grimoire-filter-btn[data-filter="${currentFilter}"]`);
        if (activeButton) activeButton.classList.add('active');
        
        renderCards();
    }


    // -----------------------------------------------------------------
    // |                 4. MAIN ROUTER & APP STARTUP                  |
    // -----------------------------------------------------------------

    const routes = {
        'home': { templateId: 'view-home', init: initHomeView },
        'reading-room': { templateId: 'view-reading-room', init: initReadingRoomView },
        'grimoire': { templateId: 'view-grimoire', init: initGrimoireView },
        'spread-creator': {
            templateId: 'view-spread-creator',
            init: () => {
                spreadCreatorInstance = new SpreadCreator(appContainer);
                spreadCreatorInstance.start();
            },
            cleanup: () => {
                if (spreadCreatorInstance) {
                    spreadCreatorInstance.cleanup();
                    spreadCreatorInstance = null;
                }
            }
        }
    };

    async function router() {
        const previousPath = appContainer.dataset.currentPath;
        if (previousPath && routes[previousPath] && routes[previousPath].cleanup) {
            routes[previousPath].cleanup();
        }

        const hash = window.location.hash.slice(1) || 'home';
        const [path, queryString] = hash.split('?');
        const route = routes[path];

        if (route) {
            const template = document.getElementById(route.templateId);
            if (template) {
                appContainer.innerHTML = '';
                appContainer.appendChild(template.content.cloneNode(true));
                appContainer.dataset.currentPath = path;

                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.toggle('active', link.dataset.route === path);
                });
                
                if (path === 'reading-room') {
                    const allSpreads = await loadAllSpreads();
                    route.init(allSpreads);
                } else if (path === 'grimoire') {
                    const searchParams = new URLSearchParams(queryString || '');
                    route.init(decodeURIComponent(searchParams.get('search') || ''));
                } else {
                    route.init();
                }
            }
        } else {
            window.location.hash = 'home';
        }
    }

    // --- Global Event Listeners ---
    const closeModalBtn = document.getElementById('close-modal-btn');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            document.getElementById('card-modal')?.classList.add('hidden');
        });
    }

    window.addEventListener('hashchange', router);
    router(); // Initial call to router

    // --- Starfield Background Animation ---
    const canvas = document.getElementById('starfield-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let stars = [];
        let shootingStars = [];
        let constellations = [];

        function generateStars() {
            stars = [];
            const starCount = Math.floor((canvas.width * canvas.height) / 4000);
            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5,
                    alpha: Math.random(),
                    velocity: (Math.random() - 0.5) / 4
                });
            }
        }

        function createShootingStar() {
            const side = Math.floor(Math.random() * 4);
            let x, y, angle;
            switch (side) {
                case 0: x = Math.random() * canvas.width; y = 0; angle = Math.random() * Math.PI * 0.4 + Math.PI * 0.3; break; // Top
                case 1: x = canvas.width; y = Math.random() * canvas.height; angle = Math.random() * Math.PI * 0.4 + Math.PI * 0.8; break; // Right
                case 2: x = Math.random() * canvas.width; y = canvas.height; angle = Math.random() * Math.PI * 0.4 + Math.PI * 1.3; break; // Bottom
                case 3: x = 0; y = Math.random() * canvas.height; angle = Math.random() * Math.PI * 0.4 - Math.PI * 0.2; break; // Left
            }
            shootingStars.push({ x, y, len: Math.random() * 80 + 20, angle, speed: Math.random() * 5 + 5, alpha: 1, life: 60 });
        }

        function createConstellation() {
            if (stars.length < 5) return;
            const numStars = Math.floor(Math.random() * 4) + 4;
            const startIdx = Math.floor(Math.random() * stars.length);
            let indices = [startIdx];
            let lastIdx = startIdx;

            for (let i = 0; i < numStars - 1; i++) {
                let closest = -1;
                let minDist = 250; // Max distance for a constellation line
                for (let j = 0; j < stars.length; j++) {
                    if (indices.includes(j)) continue;
                    const dist = Math.hypot(stars[lastIdx].x - stars[j].x, stars[lastIdx].y - stars[j].y);
                    if (dist < minDist) {
                        minDist = dist;
                        closest = j;
                    }
                }
                if (closest !== -1) {
                    indices.push(closest);
                    lastIdx = closest;
                } else break;
            }

            if (indices.length > 2) {
                constellations.push({ indices, alpha: 0, maxAlpha: Math.random() * 0.2 + 0.3, life: 600, state: 'fading-in' });
            }
        }

        function resetStarfield() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            generateStars();
            shootingStars = [];
            constellations = [];
        }

        function animateStars() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw stars
            stars.forEach(star => {
                star.y += star.velocity;
                if (star.y < 0) star.y = canvas.height;
                if (star.y > canvas.height) star.y = 0;
                ctx.fillStyle = `rgba(224, 224, 224, ${star.alpha})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw shooting stars
            if (Math.random() < 0.0025 && shootingStars.length < 3) createShootingStar();
            shootingStars = shootingStars.filter(ss => ss.alpha > 0);
            shootingStars.forEach(ss => {
                ss.x += ss.speed * Math.cos(ss.angle);
                ss.y += ss.speed * Math.sin(ss.angle);
                ss.alpha -= 1 / ss.life;
                ctx.strokeStyle = `rgba(255, 221, 153, ${ss.alpha})`;
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(ss.x, ss.y);
                ctx.lineTo(ss.x - ss.len * Math.cos(ss.angle), ss.y - ss.len * Math.sin(ss.angle));
                ctx.stroke();
            });

            // Draw constellations
            if (Math.random() < 0.002 && constellations.length < 3) createConstellation();
            constellations = constellations.filter(c => c.life > 0);
            constellations.forEach(c => {
                c.life--;
                if (c.state === 'fading-in') {
                    c.alpha += c.maxAlpha / 180;
                    if (c.alpha >= c.maxAlpha) {
                        c.alpha = c.maxAlpha;
                        c.state = 'visible';
                    }
                } else if (c.life < 180) {
                    c.state = 'fading-out';
                    c.alpha -= c.maxAlpha / 180;
                }

                if (c.alpha > 0) {
                    ctx.strokeStyle = `rgba(100, 150, 255, ${c.alpha})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    const startPoint = stars[c.indices[0]];
                    ctx.moveTo(startPoint.x, startPoint.y);
                    for (let i = 1; i < c.indices.length; i++) {
                        const point = stars[c.indices[i]];
                        ctx.lineTo(point.x, point.y);
                    }
                    ctx.stroke();
                }
            });

            requestAnimationFrame(animateStars);
        }

        const debouncedReset = debounce(resetStarfield, 250);
        window.addEventListener('resize', debouncedReset);
        
        resetStarfield();
        animateStars();
    }
});