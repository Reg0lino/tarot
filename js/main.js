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
            layoutClass: 'layout-one-card',
            positions: [{ label: '1. The Card' }]
        },
        'three-card': {
            name: 'Three Card',
            cardCount: 3,
            description: 'A simple spread for exploring a path.',
            layoutClass: 'layout-three-card',
            positions: [{ label: '1. The Past' },
                { label: '2. The Present' },
                { label: '3. The Future' }
            ]
        },
        'safe-passage': {
            name: 'Safe Passage (Modern)',
            cardCount: 7,
            description: 'A modern, fictional spread. It has no historical basis and is provided for creative exploration based on the pentagram layout from "Agatha All Along".',
            layoutClass: 'layout-safe-passage',
            positions: [{ label: '1. The Traveler' },
                { label: '2. What\'s Missing' },
                { label: '3. The Path Behind' },
                { label: '4. The Path Ahead' },
                { label: '5. Obstacles' },
                { label: '6. Potential Windfall' },
                { label: '7. The Destination' }
            ],
            overlapGroups: [
                [1, 7]
            ]
        },
        'celtic-cross': {
            name: 'Celtic Cross',
            cardCount: 10,
            description: 'A comprehensive spread for a deep analysis of a situation.',
            layoutClass: 'layout-celtic-cross',
            positions: [{ label: '1. Current energy' },
                { label: '2. The challenge' },
                { label: '3. Conscious beliefs' },
                { label: '4. Subconscious beliefs' },
                { label: '5. The past' },
                { label: '6. The future' },
                { label: '7. Best approach' },
                { label: '8. External influences' },
                { label: '9. Hopes and fears' },
                { label: '10. The outcome' }
            ],
            overlapGroups: [
                [1, 2]
            ]
        },
        'horseshoe': {
            name: 'Horseshoe Spread',
            cardCount: 7,
            description: 'A classic spread for a detailed overview of a situation\'s progression.',
            layoutClass: 'layout-horseshoe',
            positions: [
                { label: '1. Past Influences' }, { label: '2. Present Circumstances' },
                { label: '3. Upcoming Influences' }, { label: '4. Best Course of Action' },
                { label: '5. The Attitude of Others' }, { label: '6. Possible Obstacles' },
                { label: '7. Final Outcome' }
            ]
        },
        'relationship': {
            name: 'Relationship Spread',
            cardCount: 5,
            description: 'Explores the dynamics between two people in a relationship.',
            layoutClass: 'layout-relationship',
            positions: [
                { label: '1. You' }, { label: '2. The Other Person' },
                { label: '3. The Relationship' }, { label: '4. The Past' },
                { label: '5. The Future' }
            ]
        },
        'success': {
            name: 'Success Spread',
            cardCount: 5,
            description: 'Provides insight on achieving a specific goal or ambition.',
            layoutClass: 'layout-success',
            positions: [
                { label: '1. Central Issue' }, { label: '2. Obstacles' },
                { label: '3. Assistance' }, { label: '4. How to Improve' },
                { label: '5. Underlying Factors' }
            ]
        },
        'four-card-cross': {
            name: 'Four Card Cross',
            cardCount: 4,
            description: 'A balanced spread for understanding a situation, its challenges, and its potential.',
            layoutClass: 'layout-four-card-cross',
            positions: [
                { label: 'Position 1' }, { label: 'Position 2' },
                { label: 'Position 3' }, { label: 'Position 4' }
            ]
        },
        'chakra-spread': {
            name: 'Chakra Spread',
            cardCount: 7,
            description: 'For the assessment of overall health and well-being.',
            layoutClass: 'layout-chakra-spread',
            positions: [
                { label: '1. Root Chakra: Foundation' },
                { label: '2. Sacral Chakra: Resources & Relationships' },
                { label: '3. Solar Plexus Chakra: Identity' },
                { label: '4. Heart Chakra: Love' },
                { label: '5. Throat Chakra: Self Expression' },
                { label: '6. Third Eye: Wisdom' },
                { label: '7. Crown Chakra: Spiritual Awareness' }
            ]
        },
        'custom': {
            name: 'Custom Spread',
            cardCount: 0,
            description: 'A flexible layout you design yourself.',
            layoutClass: 'layout-custom'
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

        // --- 1. Scoped State & Variables ---
        const settingsKey = 'openTarotSettings';
        let selectedSpreadKey = 'one-card';
        let scale = 1,
            panning = false,
            initialPinchDistance = null;
        let startPoint = { x: 0, y: 0 },
            currentTranslate = { x: 0, y: 0 },
            lastTranslate = { x: 0, y: 0 };

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
            resetSizeBtn: document.getElementById('reset-size-btn')
        };

        window.openModal = openModal;

        // --- 2. Helper Functions ---
        function applyTransform() {
            if (ui.readingCloth) {
                ui.readingCloth.style.transform = `translate(${currentTranslate.x}px, ${currentTranslate.y}px) scale(${scale})`;
            }
        }

        function getDistance(touches) {
            return Math.hypot(touches[0].clientX - touches[1].clientX, touches[0].clientY - touches[1].clientY);
        }

        function saveSettings() {
            const settings = {
                spread: selectedSpreadKey,
                reversed: ui.reversedCardsCheckbox.checked,
                shuffleMethod: document.querySelector('input[name="shuffle-method"]:checked').value,
                cardBack: document.querySelector('input[name="card-back"]:checked').value,
                cloth: document.querySelector('input[name="cloth-pattern"]:checked').value,
                customCount: ui.customCardCount.value,
                customRows: ui.customRowCount.value
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

            if (ui.customCardCount) {
                ui.customCardCount.value = settings.customCount;
            }
            if (ui.customRowCount) {
                ui.customRowCount.value = settings.customRows;
            }
        }

        function drawSpreadBlueprint() {
            let spread = { ...spreads[selectedSpreadKey] };
            if (selectedSpreadKey === 'custom') {
                spread.cardCount = parseInt(ui.customCardCount.value, 10) || 0;
                const rowCount = parseInt(ui.customRowCount.value, 10) || spread.cardCount;
                ui.readingCloth.style.gridTemplateColumns = `repeat(${rowCount > 0 ? rowCount : 1}, auto)`;
                spread.positions = Array.from({ length: spread.cardCount }, (_, i) => ({ label: `Card ${i + 1}` }));
            }
            ui.readingCloth.innerHTML = '';
            ui.readingCanvas.classList.add('blueprint-mode');
            if (ui.canvasPlaceholder) ui.canvasPlaceholder.style.display = 'block';
            ui.readingCloth.className = `reading-cloth ${spread.layoutClass || 'layout-custom'}`;

            const placedIndices = new Set();
            if (spread.overlapGroups) {
                spread.overlapGroups.forEach(group => {
                    const groupContainer = document.createElement('div');
                    groupContainer.className = 'overlap-group';
                    group.forEach(posIndex => {
                        groupContainer.appendChild(createPositionElement(posIndex, spread));
                        placedIndices.add(posIndex);
                    });
                    ui.readingCloth.appendChild(groupContainer);
                });
            }
            for (let i = 1; i <= spread.cardCount; i++) {
                if (!placedIndices.has(i)) {
                    ui.readingCloth.appendChild(createPositionElement(i, spread));
                }
            }
        }

        function createPositionElement(index, spread) {
            const position = document.createElement('div');
            position.className = `position-container pos-${index}`;
            if (spread.overlapGroups && spread.overlapGroups.some(g => g.includes(index))) {
                position.classList.add(spread.overlapGroups.find(g => g.includes(index))[1] === index ? 'top-card' : 'bottom-card');
            }
            position.innerHTML = `
                <div class="card-container card-placeholder"></div>
                <div class="position-label">${spread.positions[index - 1]?.label || `Card ${index}`}</div>`;
            return position;
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

        function autoFitSpread() {
            const content = ui.readingCloth;
            const container = ui.readingCanvas;
            const contentRect = content.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            // Ensure we don't divide by zero if content hasn't rendered
            if (contentRect.width === 0 || contentRect.height === 0) {
                return;
            }
            // Calculate the scale needed to fit the content's width and height
            const scaleX = containerRect.width / contentRect.width;
            const scaleY = containerRect.height / contentRect.height;
            // Use the smaller of the two scales to ensure the whole spread fits
            // Apply a little padding so it's not flush against the edges
            const newScale = Math.min(scaleX, scaleY) * 0.75;
            // We only apply auto-fit if it would result in zooming out.
            // This prevents small spreads from being unnecessarily enlarged.
            if (newScale < 1) {
                scale = newScale;
                // Reset pan to center the newly scaled content
                currentTranslate = { x: 0, y: 0 };
                lastTranslate = { x: 0, y: 0 };
                // Update the UI slider to reflect the new state
                ui.sliderValue.textContent = `${Math.round(scale * 100)}%`;
                ui.sizeSlider.value = scale * 100;
                applyTransform();
        }
    }

        // --- 3. Event Listeners ---
        function onPointerDown(e) {
            if (e.target.closest('.tarot-card')) return;
            e.preventDefault();
            panning = true;
            startPoint = { x: e.clientX || e.touches[0].clientX, y: e.clientY || e.touches[0].clientY };
            lastTranslate = { ...currentTranslate };
            if (e.touches && e.touches.length === 2) initialPinchDistance = getDistance(e.touches);
        }

        function onPointerUp() {
            panning = false;
            initialPinchDistance = null;
        }

        function onPointerMove(e) {
            if (!panning) return;
            e.preventDefault();
            if (e.touches && e.touches.length === 2) {
                if (initialPinchDistance === null) return;
                const newPinchDistance = getDistance(e.touches);
                const scaleFactor = newPinchDistance / initialPinchDistance;
                scale = Math.max(0.25, Math.min(scale * scaleFactor, 4));
                initialPinchDistance = newPinchDistance;
            } else if (!e.touches || e.touches.length === 1) {
                const currentPoint = { x: e.clientX || e.touches[0].clientX, y: e.clientY || e.touches[0].clientY };
                currentTranslate.x = lastTranslate.x + currentPoint.x - startPoint.x;
                currentTranslate.y = lastTranslate.y + currentPoint.y - startPoint.y;
            }
            applyTransform();
        }

        ui.readingCanvas.addEventListener("mousedown", onPointerDown);
        ui.readingCanvas.addEventListener("touchstart", onPointerDown, { passive: false });
        document.addEventListener("mouseup", onPointerUp);
        document.addEventListener("touchend", onPointerUp);
        document.addEventListener("mouseleave", onPointerUp);
        document.addEventListener("mousemove", onPointerMove);
        document.addEventListener("touchmove", onPointerMove, { passive: false });

        ui.readingCanvas.addEventListener("wheel", (e) => {
            e.preventDefault();
            const delta = e.deltaY > 0 ? -0.1 : 0.1;
            scale = Math.max(0.25, Math.min(scale + delta, 4));
            ui.sliderValue.textContent = `${Math.round(scale * 100)}%`;
            ui.sizeSlider.value = scale * 100;
            applyTransform();
        });

        if (ui.mobileControlsTrigger) {
            const mobileActionBar = document.getElementById('mobile-action-bar');
            if (mobileActionBar) {
                mobileActionBar.innerHTML = '';
                if (ui.revealAllContainer) mobileActionBar.appendChild(ui.revealAllContainer);
                mobileActionBar.appendChild(ui.mobileControlsTrigger);
            }
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
                ui.customControls.classList.toggle('hidden', selectedSpreadKey !== 'custom');
                ui.spreadInfoText.textContent = spreads[selectedSpreadKey].description;
                drawSpreadBlueprint();
                saveSettings();
            }
        });

        ui.dealBtn.addEventListener('click', () => {
            const currentHash = window.location.hash;
            const targetHash = '#reading-room?deal=true';

            // If we are already on the correct URL, the hashchange event won't fire.
            // In this case, we manually call the router to force a re-render.
            if (currentHash === targetHash) {
                router();
            } else {
                // Otherwise, navigate normally to trigger the hashchange event.
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

        ui.sizeSlider.addEventListener('input', () => {
            scale = ui.sizeSlider.value / 100;
            ui.sliderValue.textContent = `${ui.sizeSlider.value}%`;
            applyTransform();
        });

        ui.resetSizeBtn.addEventListener('click', () => {
            scale = 1;
            currentTranslate = { x: 0, y: 0 };
            lastTranslate = { x: 0, y: 0 };
            ui.sliderValue.textContent = '100%';
            ui.sizeSlider.value = 100;
            applyTransform();
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
        applyTransform();

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
            setTimeout(async () => {
                if (ui.dealBtn) {
                    const deck = await loadDeck();
                    const { shuffledDeck } = performShuffle(deck);
                    const spread = spreads[selectedSpreadKey];
                    const shuffleController = new ShuffleController(shuffledDeck, spread, autoFitSpread);

                    // ANNOTATION: This is the key fix. It removes the dimming overlay
                    // from the canvas just before the shuffle modal is created.
                    ui.readingCanvas.classList.remove('blueprint-mode');

                    if (ui.canvasPlaceholder) ui.canvasPlaceholder.style.display = 'none';
                    if (ui.controlPanel && ui.controlPanel.classList.contains('is-open')) {
                        ui.controlPanel.classList.remove('is-open');
                    }
                    shuffleController.start();
                }
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