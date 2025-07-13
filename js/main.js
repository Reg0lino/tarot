/*
===================================================================
 main.js 
===================================================================
*/

document.addEventListener('DOMContentLoaded', () => {

    // -----------------------------------------------------------------
    // |                1. APP-WIDE STATE & CONSTANTS                  |
    // -----------------------------------------------------------------

    let fullDeck = [];
    const appContainer = document.getElementById('app-container');

    const spreads = {
        'one-card': {
            name: 'One Card',
            cardCount: 1,
            description: 'A single card for quick insight.',
            positions: [
                { label: '1. The Card', y: 600, x: 800 }
            ]
        },
        'three-card': {
            name: 'Three Card',
            cardCount: 3,
            description: 'A simple spread for exploring a path.',
            positions: [
                { label: '1. The Past', y: 600, x: 600 },
                { label: '2. The Present', y: 600, x: 800 },
                { label: '3. The Future', y: 600, x: 1000 }
            ]
        },
        'celtic-cross': {
            name: 'Celtic Cross',
            cardCount: 10,
            description: 'A comprehensive spread for a deep analysis of a situation.',
            overlapGroups: [[1, 2]],
            positions: [
                // Core Cross
                { label: '1. Current energy', y: 600, x: 700 }, // Anchor for overlap group (bottom card)
                { label: '2. The challenge', y: 600, x: 700, rotation: 90 }, // Overlaps 1 (top card)
                { label: '3. Conscious beliefs', y: 350, x: 700 },
                { label: '4. Subconscious beliefs', y: 850, x: 700 },
                { label: '5. The past', y: 600, x: 500 },
                { label: '6. The future', y: 600, x: 900 },
                // Staff
                { label: '7. Best approach', y: 950, x: 1100 },
                { label: '8. External influences', y: 700, x: 1100 },
                { label: '9. Hopes and fears', y: 450, x: 1100 },
                { label: '10. The outcome', y: 200, x: 1100 }
            ]
        },
        'horseshoe': {
            name: 'Horseshoe Spread',
            cardCount: 7,
            description: 'A classic spread for a detailed overview of a situation\'s progression.',
            positions: [
                { label: '1. Past Influences', y: 300, x: 500 },
                { label: '2. Present Circumstances', y: 550, x: 500 },
                { label: '3. Upcoming Influences', y: 800, x: 600 },
                { label: '4. Best Course of Action', y: 900, x: 800 },
                { label: '5. The Attitude of Others', y: 800, x: 1000 },
                { label: '6. Possible Obstacles', y: 550, x: 1100 },
                { label: '7. Final Outcome', y: 300, x: 1100 }
            ]
        },
        'relationship': {
            name: 'Relationship Spread',
            cardCount: 5,
            description: 'Explores the dynamics between two people in a relationship.',
            positions: [
                { label: '1. You', y: 600, x: 600 },
                { label: '2. The Other Person', y: 600, x: 1010 },
                { label: '3. The Relationship', y: 550, x: 860, rotation: 90 }, // ANNOTATION: Slightly adjusted X for visual centering
                { label: '4. The Past', y: 800, x: 800 },
                { label: '5. The Future', y: 380, x: 800 }
            ]
        },
        'success': {
            name: 'Success Spread',
            cardCount: 5,
            description: 'Provides insight on achieving a specific goal or ambition.',
            positions: [
                { label: '1. Central Issue', y: 600, x: 800 },
                { label: '2. Obstacles', y: 600, x: 600 },
                { label: '3. Assistance', y: 300, x: 800 },
                { label: '4. How to Improve', y: 600, x: 1000 },
                { label: '5. Underlying Factors', y: 900, x: 800 }
            ]
        },
        'four-card-cross': {
            name: 'Four Card Cross',
            cardCount: 4,
            description: 'A balanced spread for understanding a situation, its challenges, and its potential.',
            positions: [
                { label: 'Position 1', y: 600, x: 600 },
                { label: 'Position 2', y: 450, x: 800 },
                { label: 'Position 3', y: 600, x: 1000 },
                { label: 'Position 4', y: 750, x: 800 }
            ]
        },
        'chakra-spread': {
            name: 'Chakra Spread',
            cardCount: 7,
            description: 'For the assessment of overall health and well-being.',
            positions: [
                { label: '1. Root Chakra: Foundation', y: 1050, x: 800 },
                { label: '2. Sacral Chakra: Resources & Relationships', y: 800, x: 800 },
                { label: '3. Solar Plexus Chakra: Identity', y: 550, x: 800 },
                { label: '4. Heart Chakra: Love', y: 300, x: 800 },
                { label: '5. Throat Chakra: Self Expression', y: 50, x: 800 },
                { label: '6. Third Eye: Wisdom', y: -200, x: 800 },
                { label: '7. Crown Chakra: Spiritual Awareness', y: -450, x: 800 }
            ]
        },
        'safe-passage': {
            name: 'Safe Passage (Modern)',
            cardCount: 7,
            description: 'A modern, fictional spread based on the pentagram spread in the show "Agatha All Along".',
            overlapGroups: [[1, 7]],
            positions: [
                { label: '1. The Traveler', y: 600, x: 800 }, // Anchor for overlap group (bottom card)
                { label: '2. What\'s Missing', y: 900, x: 800 },
                { label: '3. The Path Behind', y: 300, x: 550 },
                { label: '4. The Path Ahead', y: 300, x: 1050 },
                { label: '5. Obstacles', y: 600, x: 450 },
                { label: '6. Potential Windfall', y: 600, x: 1150 },
                { label: '7. The Destination', y: 600, x: 800, rotation: 90 } // Overlaps 1 (top card)
            ]
        }
    };

    // -----------------------------------------------------------------
    // |                   2. CORE HELPER FUNCTIONS                    |
    // -----------------------------------------------------------------

    async function loadDeck() {
        if (fullDeck.length > 0) return fullDeck;
        if (typeof tarotDeckData !== 'undefined' && tarotDeckData.length > 0) {
            fullDeck = tarotDeckData;
            return fullDeck;
        }
        console.error("tarot-deck.js data not found or is empty.");
        return [];
    }

    function createDictionaryLinks(text) {
        if (!text) return '';
        return text.replace(/<dfn>(.*?)<\/dfn>/g, (match, word) => {
            return `<a href="https://www.merriam-webster.com/dictionary/${word.toLowerCase()}" target="_blank" rel="noopener noreferrer" class="dict-link" title="Look up '${word}'">${word}</a>`;
        });
    }

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

    window.createPRNG = function(seed) {
        let state = seed % 2147483647;
        if (state <= 0) state += 2147483646;
        return function() {
            state = (state * 16807) % 2147483647;
            return (state - 1) / 2147483646;
        };
    }

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

    function performShuffle(deck) {
        const methodRadio = document.querySelector('input[name="shuffle-method"]:checked');
        const shuffleInput = document.getElementById('shuffle-input');
        const method = methodRadio ? methodRadio.value : 'timestamp';
        const value = shuffleInput ? shuffleInput.value : '';
        let seed;

        if (method === 'text' && value.trim()) {
            seed = value.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        } else if (method === 'number' && value.trim() && !isNaN(value)) {
            seed = parseInt(value, 10);
        } else {
            seed = new Date().getTime();
        }

        const finalSeed = Math.floor(seed * Math.PI);
        const shuffleRandom = window.createPRNG(finalSeed);

        console.clear();
        console.log("%c--- SHUFFLE CALCULATION AUDIT ---", "font-weight:bold; color: #FFD700;");
        console.log(`Shuffle Method: %c${method.toUpperCase()}`, "font-weight:bold;");
        console.log(`User Input: %c"${value || 'N/A (Timestamp used)'}"`, "font-weight:bold;");
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

    function initHomeView() {
        const cardContainer = document.getElementById('card-of-the-day-container');
        const learnMoreContainer = document.getElementById('learn-more-container');
        const learnMoreBtn = document.getElementById('learn-more-btn');
        const meaningText = document.getElementById('card-of-the-day-meaning');

        if (!cardContainer || !learnMoreContainer || !learnMoreBtn || !meaningText) {
            return;
        }

        async function drawCardOfTheDay() {
            const deck = await loadDeck();
            if (deck.length === 0) return;

            const today = new Date();
            const dayIndex = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
            const cardIndex = (dayIndex + 5) % deck.length;
            const isReversed = false;
            const card = { ...deck[cardIndex],
                isReversed
            };

            cardContainer.innerHTML = `
                <div class="card-container">
                    <div class="tarot-card">
                        <div class="card-face card-back"></div>
                        <div class="card-face card-front">
                            <img src="img/cards/${card.img}" alt="${card.name}" class="${card.isReversed ? 'reversed' : ''}">
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
            });

            learnMoreBtn.addEventListener('click', () => openModal(card));
        }

        drawCardOfTheDay();
    }

    function initReadingRoomView() {

        // --- 1. View-Specific State & Elements ---
        const settingsKey = 'openTarotSettings';
        let selectedSpreadKey = 'one-card';

        const ui = {
            spreadSelection: document.getElementById('spread-selection'),
            customControls: document.getElementById('custom-spread-controls'),
            customCardCount: document.getElementById('custom-card-count'),
            customRowCount: document.getElementById('custom-row-count'),
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

        window.openModal = openModal;

        // --- 2. State Management & Core Logic ---

        const canvasState = { x: 0, y: 0, scale: 1 };
        let isPanning = false;
        let startPoint = { x: 0, y: 0 };
        let lastPanPosition = { x: 0, y: 0 };
        let hintDismissTimer = null;
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        function applyTransform() {
            if (ui.readingCloth) {
                ui.readingCloth.style.transformOrigin = 'top left';
                ui.readingCloth.style.transform = `translate(${canvasState.x}px, ${canvasState.y}px) scale(${canvasState.scale})`;
            }
        }

        function autoFitSpread() {
            setTimeout(() => {
                const spread = spreads[selectedSpreadKey];
                const container = ui.readingCanvas;

                if (!spread || !spread.positions || spread.positions.length === 0 || !container) {
                    // If no positions (e.g., custom with 0 cards) or container missing, reset transform
                    canvasState.x = 0;
                    canvasState.y = 0;
                    canvasState.scale = 1;
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

                    // Account for rotation when calculating bounding box
                    if (posData.rotation === 90 || posData.rotation === 270) {
                        [currentCardWidth, currentCardHeight] = [cardBaseHeight, cardBaseWidth];
                    }

                    // Calculate the top-left corner of the card's visual space based on its center 'x, y' from the spreads data
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

                if (contentWidth === 0 || contentHeight === 0) return; // Should not happen with valid spreads

                const PADDING = 80; // Padding around the spread
                const scaleX = (viewportWidth - PADDING) / contentWidth;
                const scaleY = (viewportHeight - PADDING) / contentHeight;
                const newScale = Math.min(scaleX, scaleY);

                // Calculate the center of the spread content
                const contentCenterX = minX + contentWidth / 2;
                const contentCenterY = minY + contentHeight / 2;

                // Calculate new pan positions to center the spread within the viewport
                canvasState.x = (viewportWidth / 2) - (contentCenterX * newScale);
                canvasState.y = (viewportHeight / 2) - (contentCenterY * newScale);
                canvasState.scale = newScale;

                applyTransform();

                ui.sliderValue.textContent = `${Math.round(canvasState.scale * 100)}%`;
                ui.sizeSlider.value = canvasState.scale * 100;

                if (isTouchDevice) {
                    const hint = ui.canvasHint;
                    if (hint) {
                        hint.style.display = 'block';
                        hintDismissTimer = setTimeout(() => {
                            if (!hint.classList.contains('hidden')) {
                                hint.classList.add('hidden');
                                ui.readingCanvas.removeEventListener('pointerdown', dismissHintOnTap, true);
                            }
                        }, 5000);
                    }
                }
            }, 100); // Small delay to ensure DOM is ready and clientWidth/Height are accurate
        }

        function drawSpreadBlueprint() {
            const spread = { ...spreads[selectedSpreadKey] };
            const cloth = ui.readingCloth;

            cloth.innerHTML = '';
            ui.readingCanvas.classList.add('blueprint-mode');
            if (ui.canvasPlaceholder) ui.canvasPlaceholder.style.display = 'block';

            if (spread.positions) {
                cloth.style.position = 'relative'; // Cloth must be relative for absolute children
                cloth.style.width = '1600px';
                cloth.style.height = '1200px';
                cloth.style.display = 'block';
                cloth.style.padding = '0';
                cloth.style.gap = '0';
                cloth.style.gridTemplateColumns = 'none';

                const placedIndices = new Set();
                if (spread.overlapGroups) {
                    spread.overlapGroups.forEach(group => {
                        const groupAnchorCardData = spread.positions[group[0] - 1]; // The first card in the group defines the group's position
                        const groupContainer = document.createElement('div');
                        groupContainer.className = 'overlap-group';
                        groupContainer.style.position = 'absolute'; // Position the group container absolutely

                        // Calculate group container's top-left based on the anchor card's center
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
                            
                            // ANNOTATION: Apply specific classes for overlap interaction
                            if (idx === 0) { // First card in the group is the "bottom" card
                                positionEl.classList.add('overlap-bottom-card');
                            } else if (idx === 1) { // Second card in the group is the "top" card
                                positionEl.classList.add('overlap-top-card');
                            }
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

        function createPositionElement(index, posData) {
            const position = document.createElement('div');
            position.className = `position-container pos-${index}`;

            if (posData.x !== undefined && posData.y !== undefined) {
                position.style.position = 'absolute';
                
                let cardWidth = 120;
                let cardHeight = 210;
                // ANNOTATION: Only calculate width/height for positioning, not for the transform itself.
                if (posData.rotation === 90 || posData.rotation === 270) {
                    [cardWidth, cardHeight] = [cardHeight, cardWidth];
                }

                position.style.top = `${posData.y - (cardHeight / 2)}px`;
                position.style.left = `${posData.x - (cardWidth / 2)}px`;
            }

            // ANNOTATION: NEW/UPDATED - Add a rotation class instead of setting inline style.
            if (posData.rotation !== undefined) { // Check if rotation is defined
                position.classList.add(`rotate-${posData.rotation}`);
            } else {
                position.classList.add('rotate-0'); // Default to 0 rotation if not specified
            }

            position.innerHTML = `
                <div class="card-container card-placeholder"></div>
                <div class="position-label">${posData.label || `Card ${index}`}</div>`;
            return position;
        }

        function saveSettings() {
            const settings = {
                spread: selectedSpreadKey,
                reversed: ui.reversedCardsCheckbox.checked,
                shuffleMethod: document.querySelector('input[name="shuffle-method"]:checked').value,
                cardBack: document.querySelector('input[name="card-back"]:checked').value,
                cloth: document.querySelector('input[name="cloth-pattern"]:checked').value,
                // ANNOTATION: Removed references to customCount and customRows which no longer exist.
            };
            localStorage.setItem(settingsKey, JSON.stringify(settings));
        }

        function loadSettings() {
            const saved = localStorage.getItem(settingsKey);
            if (!saved) return;
            const settings = JSON.parse(saved);
            const spreadButton = document.querySelector(`.spread-btn[data-spread-key="${settings.spread}"]`);
            if (spreadButton) spreadButton.click();
            if (ui.reversedCardsCheckbox) {
                ui.reversedCardsCheckbox.checked = settings.reversed;
            }
            const shuffleMethodRadio = document.querySelector(`input[name="shuffle-method"][value="${settings.shuffleMethod}"]`);
            if (shuffleMethodRadio) shuffleMethodRadio.click();
            const cardBackRadio = document.querySelector(`input[name="card-back"][value="${settings.cardBack}"]`);
            if (cardBackRadio) cardBackRadio.click();
            const clothRadio = document.querySelector(`input[name="cloth-pattern"][value="${settings.cloth}"]`);
            if (clothRadio) clothRadio.click();
            // ANNOTATION: Removed logic for setting custom input values.
        }

        function updateShuffleExplanation() {
            const methodRadio = document.querySelector('input[name="shuffle-method"]:checked');
            if (!methodRadio) return;
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

        // --- 3. Event Listeners ---

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
            const zoomFactor = 1.1; // Amount to zoom in/out
            
            // Determine new scale
            let newScale = e.deltaY > 0 ? oldScale / zoomFactor : oldScale * zoomFactor;
            newScale = Math.max(0.1, Math.min(newScale, 10)); // Clamp scale to min/max values

            // Calculate mouse position relative to the canvas
            const canvasRect = ui.readingCanvas.getBoundingClientRect();
            const mouseX = e.clientX - canvasRect.left;
            const mouseY = e.clientY - canvasRect.top;

            // Calculate "world" coordinates (coordinates on the unscaled cloth) of the mouse point
            const worldX = (mouseX - canvasState.x) / oldScale;
            const worldY = (mouseY - canvasState.y) / oldScale;

            // Calculate new pan positions to keep the world point under the mouse
            canvasState.x = mouseX - (worldX * newScale);
            canvasState.y = mouseY - (worldY * newScale);
            canvasState.scale = newScale;

            applyTransform();
            ui.sliderValue.textContent = `${Math.round(canvasState.scale * 100)}%`;
            ui.sizeSlider.value = canvasState.scale * 100;
        }

        ui.readingCanvas.addEventListener("mousedown", onPointerDown);
        ui.readingCanvas.addEventListener("touchstart", onPointerDown);
        document.addEventListener("mouseup", onPointerUp);
        document.addEventListener("touchend", onPointerUp);
        document.addEventListener("mouseleave", onPointerUp);
        document.addEventListener("mousemove", onPointerMove);
        document.addEventListener("touchmove", onPointerMove);
        ui.readingCanvas.addEventListener("wheel", onWheel);

        if (isTouchDevice) {
            ui.readingCanvas.addEventListener('pointerdown', dismissHintOnTap, true);
        }

        if (ui.mobileControlsTrigger) {
            ui.mobileControlsTrigger.addEventListener('click', () => ui.controlPanel.classList.add('is-open'));
        }
        if (ui.drawerCloseBtn) {
            ui.drawerCloseBtn.addEventListener('click', () => ui.controlPanel.classList.remove('is-open'));
        }

        Object.keys(spreads).forEach(key => {
            const button = document.createElement('button');
            button.className = 'spread-btn';
            button.dataset.spreadKey = key;
            button.textContent = spreads[key].name;
            ui.spreadSelection.appendChild(button);
        });

        ui.spreadSelection.addEventListener('click', (e) => {
            if (e.target.classList.contains('spread-btn')) {
                document.querySelectorAll('.spread-btn').forEach(btn => btn.classList.remove('selected'));
                e.target.classList.add('selected');
                selectedSpreadKey = e.target.dataset.spreadKey;
                // ANNOTATION: The line that referenced the null 'ui.customControls' has been removed.
                ui.spreadInfoText.textContent = spreads[selectedSpreadKey].description;
                drawSpreadBlueprint();
                autoFitSpread();
                saveSettings();
            }
        });

        ui.dealBtn.addEventListener('click', () => {
            const currentHash = window.location.hash;
            const targetHash = '#reading-room?deal=true';
            if (currentHash === targetHash) {
                router();
            } else {
                window.location.hash = targetHash;
            }
        });

        document.querySelectorAll('#custom-spread-controls input').forEach(input => input.addEventListener('input', () => {
            drawSpreadBlueprint();
            saveSettings();
        }));

        ui.shuffleMethodsContainer.addEventListener('change', (e) => {
            if (e.target.name === 'shuffle-method') {
                const method = e.target.value;
                const isTimestamp = method === 'timestamp';
                ui.shuffleInput.disabled = isTimestamp;
                ui.generateBtn.style.display = method === 'number' ? 'inline-block' : 'none';
                ui.shuffleInput.placeholder = isTimestamp ? 'Timestamp will be used automatically.' : `Enter a ${method} here...`;
                if (isTimestamp) ui.shuffleInput.value = new Date().getTime();
                else ui.shuffleInput.value = '';
                updateShuffleExplanation();
                saveSettings();
            }
        });

        ui.generateBtn.addEventListener('click', () => {
            ui.shuffleInput.value = Math.floor(Math.random() * 900000) + 100000;
            updateShuffleExplanation();
        });

        ui.shuffleInput.addEventListener('input', updateShuffleExplanation);

                ui.sizeSlider.addEventListener('input', (e) => {
            // Trigger autoFitSpread to re-center and scale based on the new slider value
            // We'll calculate the new scale based on the content bounds again to ensure centering.
            const newPercentage = parseFloat(e.target.value);
            const currentSpread = spreads[selectedSpreadKey];
            const contentWidth = (Math.max(...currentSpread.positions.map(p => p.x)) - Math.min(...currentSpread.positions.map(p => p.x))) + 120; // Rough width
            const contentHeight = (Math.max(...currentSpread.positions.map(p => p.y)) - Math.min(...currentSpread.positions.map(p => p.y))) + 210; // Rough height

            const viewportWidth = ui.readingCanvas.clientWidth;
            const viewportHeight = ui.readingCanvas.clientHeight;

            const PADDING = 80;
            const baseScaleX = (viewportWidth - PADDING) / contentWidth;
            const baseScaleY = (viewportHeight - PADDING) / contentHeight;
            const baseScale = Math.min(baseScaleX, baseScaleY);

            // Calculate target scale relative to the base auto-fit scale
            canvasState.scale = baseScale * (newPercentage / 100);

            // Re-calculate x,y to keep the center of the spread in the center of the canvas
            const minX = Math.min(...currentSpread.positions.map(p => p.x - (p.rotation === 90 || p.rotation === 270 ? 105 : 60))); // Card half-width/height
            const minY = Math.min(...currentSpread.positions.map(p => p.y - (p.rotation === 90 || p.rotation === 270 ? 60 : 105))); // Card half-width/height
            
            const spreadOriginalWidth = Math.max(...currentSpread.positions.map(p => p.x + (p.rotation === 90 || p.rotation === 270 ? 105 : 60))) - minX;
            const spreadOriginalHeight = Math.max(...currentSpread.positions.map(p => p.y + (p.rotation === 90 || p.rotation === 270 ? 60 : 105))) - minY;


            const contentCenterX = minX + spreadOriginalWidth / 2;
            const contentCenterY = minY + spreadOriginalHeight / 2;

            canvasState.x = (viewportWidth / 2) - (contentCenterX * canvasState.scale);
            canvasState.y = (viewportHeight / 2) - (contentCenterY * canvasState.scale);

            applyTransform();
            ui.sliderValue.textContent = `${newPercentage}%`;
        });

        ui.resetSizeBtn.addEventListener('click', () => {
            autoFitSpread(); // Resetting now just re-fits the spread
        });

        ui.readingActionBtn.addEventListener('click', () => {
            ui.readingCloth.querySelectorAll('.card-container:not(.flipped)').forEach(card => card.classList.add('flipped'));
        });

        ui.reversedCardsCheckbox.addEventListener('change', saveSettings);
        ui.cardBackSelection.addEventListener('change', (e) => {
            if (e.target.name === 'card-back') {
                const selectedTheme = e.target.value;
                const themePrefix = 'card-back-theme-';
                for (const className of document.body.classList) {
                    if (className.startsWith(themePrefix)) {
                        document.body.classList.remove(className);
                    }
                }
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
                for (const className of ui.readingCanvas.classList) {
                    if (className.startsWith(themePrefix)) {
                        ui.readingCanvas.classList.remove(className);
                    }
                }
                if (selectedTheme !== 'default') {
                    ui.readingCanvas.classList.add(themePrefix + selectedTheme);
                }
                saveSettings();
            }
        });

        // --- 4. Initialization ---
        loadSettings();
        drawSpreadBlueprint();
        updateShuffleExplanation();
        autoFitSpread();

        const initialBack = document.querySelector('input[name="card-back"]:checked');
        if (initialBack && initialBack.value !== 'default') {
            document.body.classList.add('card-back-theme-' + initialBack.value);
        }
        const initialCloth = document.querySelector('input[name="cloth-pattern"]:checked');
        if (initialCloth && initialCloth.value !== 'default') {
            ui.readingCanvas.classList.add('cloth-theme-' + initialCloth.value);
        }

        const urlParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
        if (urlParams.get('deal') === 'true') {
            history.replaceState(null, '', '#reading-room');
            setTimeout(async () => {
                const deck = await loadDeck();
                const { shuffledDeck } = performShuffle(deck);
                const spread = spreads[selectedSpreadKey];
                const shuffleController = new ShuffleController(shuffledDeck, spread, () => {
                    autoFitSpread();
                    ui.readingCanvas.classList.remove('blueprint-mode');
                    ui.revealAllContainer.classList.remove('hidden');
                });

                ui.readingCanvas.classList.remove('blueprint-mode');
                if (ui.canvasPlaceholder) ui.canvasPlaceholder.style.display = 'none';
                if (ui.controlPanel && ui.controlPanel.classList.contains('is-open')) {
                    ui.controlPanel.classList.remove('is-open');
                }
                shuffleController.start();
            }, 50);
        }
    }

    function initGrimoireView(searchTerm = '') {
        const grimoireGrid = document.getElementById('grimoire-grid');
        const searchInput = document.getElementById('grimoire-search');
        const filterButtons = document.querySelectorAll('.grimoire-filter-btn');
        const resultsCount = document.getElementById('grimoire-results-count');

        if (!grimoireGrid || !searchInput || !resultsCount) {
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
                    (currentFilter === 'minor' && card.arcana === 'Minor Arcana') ||
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
                cardEl.addEventListener('click', () => openModal({ ...card,
                    isReversed: false
                }));
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
        if (activeButton) {
            activeButton.classList.add('active');
        }
        renderCards();
    }

    // -----------------------------------------------------------------
    // |                 4. MAIN ROUTER & APP STARTUP                  |
    // -----------------------------------------------------------------

    const routes = {
        'home': { templateId: 'view-home', init: initHomeView },
        'reading-room': { templateId: 'view-reading-room', init: initReadingRoomView },
        'grimoire': { templateId: 'view-grimoire', init: initGrimoireView }
    };

    function router() {
        const hash = window.location.hash.slice(1) || 'home';
        const [path, queryString] = hash.split('?');
        const route = routes[path];

        if (route) {
            const template = document.getElementById(route.templateId);
            if (template) {
                appContainer.innerHTML = '';
                appContainer.appendChild(template.content.cloneNode(true));
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.toggle('active', link.dataset.route === path);
                });

                let searchParams = new URLSearchParams(queryString || '');

                if (path === 'grimoire') {
                    route.init(decodeURIComponent(searchParams.get('search') || ''));
                } else {
                    route.init();
                }
            }
        } else {
            window.location.hash = 'home';
        }
    }

    const closeModalBtn = document.getElementById('close-modal-btn');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            const cardModal = document.getElementById('card-modal');
            if (cardModal) {
                cardModal.classList.add('hidden');
            }
        });
    }

    window.addEventListener('hashchange', router);
    router();

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
                case 0: x = Math.random() * canvas.width; y = 0; angle = Math.random() * Math.PI * 0.4 + Math.PI * 0.3; break;
                case 1: x = canvas.width; y = Math.random() * canvas.height; angle = Math.random() * Math.PI * 0.4 + Math.PI * 0.8; break;
                case 2: x = Math.random() * canvas.width; y = canvas.height; angle = Math.random() * Math.PI * 0.4 + Math.PI * 1.3; break;
                case 3: x = 0; y = Math.random() * canvas.height; angle = Math.random() * Math.PI * 0.4 - Math.PI * 0.2; break;
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
                let minDist = 250;
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

            stars.forEach(star => {
                star.y += star.velocity;
                if (star.y < 0) star.y = canvas.height;
                if (star.y > canvas.height) star.y = 0;
                ctx.fillStyle = `rgba(224, 224, 224, ${star.alpha})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();
            });

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