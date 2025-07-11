/*
===================================================================
 main.js (Version 15: Starfield Resize Fix)
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
            positions: [ { label: '1. The Card' } ] },
        'three-card': { 
            name: 'Three Card', 
            cardCount: 3, 
            description: 'A simple spread for exploring a path.', 
            layoutClass: 'layout-three-card', 
            positions: [ { label: '1. The Past' }, 
                { label: '2. The Present' }, 
                { label: '3. The Future' } ] },
        'safe-passage': { 
            name: 'Safe Passage (Modern)', 
            cardCount: 7, 
            description: 'A modern, fictional spread. It has no historical basis and is provided for creative exploration based on the pentagram layout from "Agatha All Along".', 
            layoutClass: 'layout-safe-passage', 
            positions: [ { label: '1. The Traveler' }, 
                { label: '2. What\'s Missing' }, 
                { label: '3. The Path Behind' }, 
                { label: '4. The Path Ahead' }, 
                { label: '5. Obstacles' }, 
                { label: '6. Potential Windfall' }, 
                { label: '7. The Destination' } ], 
                overlapGroups: [[1, 7]] },
        'celtic-cross': { 
            name: 'Celtic Cross', 
            cardCount: 10, 
            description: 'A comprehensive spread for a deep analysis of a situation.', 
            layoutClass: 'layout-celtic-cross', 
            positions: [ { label: '1. Current energy' }, 
                { label: '2. The challenge' }, 
                { label: '3. Conscious beliefs' }, 
                { label: '4. Subconscious beliefs' }, 
                { label: '5. The past' }, 
                { label: '6. The future' }, 
                { label: '7. Best approach' }, 
                { label: '8. External influences' }, 
                { label: '9. Hopes and fears' }, 
                { label: '10. The outcome' } ], 
                overlapGroups: [[1, 2]] },
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
        'custom': { 
            name: 'Custom Spread', 
            cardCount: 0, 
            description: 'A flexible layout you design yourself.', 
            layoutClass: 'layout-custom' }
    };

    // -----------------------------------------------------------------
    // |                   2. CORE HELPER FUNCTIONS                    |
    // -----------------------------------------------------------------

    /**
     * Loads the tarot deck data. Caches the deck after the first load.
     */
    async function loadDeck() {
        if (fullDeck.length > 0) return fullDeck;
        if (typeof tarotDeckData !== 'undefined' && tarotDeckData.length > 0) {
            fullDeck = tarotDeckData;
            return fullDeck;
        }
        console.error("tarot-deck.js data not found or is empty.");
        return [];
    }
    
    /**
     * Finds <dfn> tags and wraps them in a link to Merriam-Webster.
     */
    function createDictionaryLinks(text) {
        if (!text) return '';
        return text.replace(/<dfn>(.*?)<\/dfn>/g, (match, word) => {
            return `<a href="https://www.merriam-webster.com/dictionary/${word.toLowerCase()}" target="_blank" rel="noopener noreferrer" class="dict-link" title="Look up '${word}'">${word}</a>`;
        });
    }

    /**
     * Opens and populates the card details modal.
     */
    function openModal(card) {
        const modal = document.getElementById('card-modal');
        const content = document.getElementById('modal-card-content');
        
        const uprightMeaning = `<div class="meaning-section ${!card.isReversed ? 'highlight' : ''}"><h4>Meaning (Upright)</h4><p>${createDictionaryLinks(card.meanings.upright)}</p></div>`;
        const reversedMeaning = `<div class="meaning-section ${card.isReversed ? 'highlight' : ''}"><h4>Meaning (Reversed)</h4><p>${createDictionaryLinks(card.meanings.reversed)}</p></div>`;
        const advice = `<div class="meaning-section"><h4>Advice</h4><p>${createDictionaryLinks(card.isReversed ? card.advice.reversed : card.advice.upright)}</p></div>`;
        const keywordsHTML = `<p><strong>Keywords:</strong> ${createDictionaryLinks((card.isReversed ? card.keywords.reversed : card.keywords.upright).join(', '))}</p>`;
        const notesHTML = card.notes.critique ? `<details><summary>Historical Notes & Analysis</summary><div class="details-content"><p>${createDictionaryLinks(card.notes.critique)}</p></div></details>` : '';

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
     */
    function createPRNG(seed) {
        let state = seed % 2147483647;
        if (state <= 0) state += 2147483646;
        return function() {
            state = (state * 16807) % 2147483647;
            return (state - 1) / 2147483646;
        };
    }
    
    /**
     * Debounce utility to limit how often a function gets called.
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


    // -----------------------------------------------------------------
    // |                3. VIEW INITIALIZATION LOGIC                   |
    // -----------------------------------------------------------------
    
    /**
     * Initializes the Home page view.
     */
    function initHomeView() {
        const cardContainer = document.getElementById('card-of-the-day-container');
        const learnMoreContainer = document.getElementById('learn-more-container');
        const learnMoreBtn = document.getElementById('learn-more-btn');
        const meaningText = document.getElementById('card-of-the-day-meaning');

        if (!cardContainer || !learnMoreContainer || !learnMoreBtn || !meaningText) {
            console.error("Home view elements for 'Card of the Day' not found.");
            return;
        }

        async function drawCardOfTheDay() {
            const deck = await loadDeck();
            if (deck.length === 0) return;

            const today = new Date();
            const dateString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
            const seed = dateString.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

            const cardRandom = createPRNG(seed);
            const reversalRandom = createPRNG(seed + 1);
            const cardIndex = Math.floor(cardRandom() * deck.length);
            const isReversed = reversalRandom() > 0.5;
            const card = { ...deck[cardIndex], isReversed };

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
                const meaning = card.isReversed ? card.keywords.reversed[0] : card.keywords.upright[0];
                meaningText.textContent = `Today's theme: ${meaning}.`;
                learnMoreContainer.classList.add('visible');
            });

            learnMoreBtn.addEventListener('click', () => openModal(card));
        }

        drawCardOfTheDay();
    }

    /**
     * Initializes the Reading Room view.
     */
    function initReadingRoomView() {
        // --- UI Element Cache ---
        const ui = {
            spreadSelection: document.getElementById('spread-selection'),
            customControls: document.getElementById('custom-spread-controls'),
            spreadInfoText: document.getElementById('spread-info-text'),
            shuffleInput: document.getElementById('shuffle-input'),
            shuffleExplanation: document.getElementById('shuffle-math-text'),
            dealBtn: document.getElementById('deal-cards-btn'),
            readingCanvas: document.getElementById('reading-canvas'),
            readingCloth: document.getElementById('reading-cloth'),
            generateBtn: document.getElementById('generate-btn'),
            sizeSlider: document.getElementById('layout-size-slider'),
            sliderValue: document.getElementById('slider-value'),
            resetSizeBtn: document.getElementById('reset-size-btn'),
            controlPanel: document.querySelector('.control-panel'),
            mobileControlsTrigger: document.getElementById('mobile-controls-trigger'),
            drawerCloseBtn: document.getElementById('drawer-close-btn'),
            revealAllContainer: document.getElementById('reveal-all-container'),
            revealAllBtn: document.getElementById('reveal-all-btn'),
            canvasHint: document.querySelector('.canvas-hint'),
            canvasPlaceholder: document.querySelector('.canvas-placeholder-text'),
            cardBackSelection: document.getElementById('card-back-selection')
            
        };
        const mobileActionBar = document.getElementById('mobile-action-bar');

        let selectedSpreadKey = 'one-card';

        // --- Pan and Zoom Logic ---
        let scale = 1, panning = false, initialPinchDistance = null;
        let startPoint = { x: 0, y: 0 }, currentTranslate = { x: 0, y: 0 }, lastTranslate = { x: 0, y: 0 };

        function applyTransform() {
            ui.readingCloth.style.transform = `translate(${currentTranslate.x}px, ${currentTranslate.y}px) scale(${scale})`;
        }

        function getDistance(touches) {
            return Math.hypot(touches[0].clientX - touches[1].clientX, touches[0].clientY - touches[1].clientY);
        }

        function onPointerDown(e) {
            if (e.target.closest('.tarot-card')) return;
            e.preventDefault();
            panning = true;
            startPoint = { x: e.clientX || e.touches[0].clientX, y: e.clientY || e.touches[0].clientY };
            lastTranslate = { ...currentTranslate };
            if (ui.canvasHint && ui.canvasHint.style.opacity !== "0") ui.canvasHint.style.opacity = "0";
            if (e.touches && e.touches.length === 2) initialPinchDistance = getDistance(e.touches);
        }

        function onPointerUp() { panning = false; initialPinchDistance = null; }

        function onPointerMove(e) {
            if (!panning) return;
            e.preventDefault();
            if (e.touches && e.touches.length === 2) { // Pinching
                if (initialPinchDistance === null) return;
                const newPinchDistance = getDistance(e.touches);
                const scaleFactor = newPinchDistance / initialPinchDistance;
                scale = Math.max(0.25, Math.min(scale * scaleFactor, 4));
                initialPinchDistance = newPinchDistance;
            } else if (!e.touches || e.touches.length === 1) { // Dragging
                const currentPoint = { x: e.clientX || e.touches[0].clientX, y: e.clientY || e.touches[0].clientY };
                currentTranslate.x = lastTranslate.x + currentPoint.x - startPoint.x;
                currentTranslate.y = lastTranslate.y + currentPoint.y - startPoint.y;
            }
            applyTransform();
        }

        // --- Reading Room Helper Functions ---

        function drawSpreadBlueprint() {
            let spread = { ...spreads[selectedSpreadKey] };
            if (selectedSpreadKey === 'custom') {
                spread.cardCount = parseInt(ui.customControls.querySelector('#custom-card-count').value, 10) || 0;
                const rowCount = parseInt(ui.customControls.querySelector('#custom-row-count').value, 10) || spread.cardCount;
                ui.readingCloth.style.gridTemplateColumns = `repeat(${rowCount > 0 ? rowCount : 1}, auto)`;
                spread.positions = Array.from({ length: spread.cardCount }, (_, i) => ({ label: `Card ${i + 1}` }));
            }
            
            ui.readingCloth.innerHTML = '';
            if (ui.canvasPlaceholder) ui.canvasPlaceholder.style.display = 'block';
            ui.readingCloth.className = `reading-cloth ${spread.layoutClass || 'layout-custom'}`;
            ui.revealAllContainer.classList.add('hidden');
            
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
            if (spread.overlapGroups?.some(g => g.includes(index))) {
                position.classList.add(spread.overlapGroups.find(g => g.includes(index))[1] === index ? 'top-card' : 'bottom-card');
            }
            position.innerHTML = `
                <div class="card-container card-placeholder"></div>
                <div class="position-label">${spread.positions[index - 1]?.label || `Card ${index}`}</div>`;
            return position;
        }

        function updateShuffleExplanation() {
            const method = document.querySelector('input[name="shuffle-method"]:checked').value;
            const value = ui.shuffleInput.value;
            let seedText = 'N/A';
            if (value.trim()) seedText = method === 'text' ? `"${value}"` : value;
            ui.shuffleExplanation.textContent = `METHOD: ${method.toUpperCase()} | YOUR INPUT: ${seedText}`;
        }
        
        function performShuffle(deck) {
            const method = document.querySelector('input[name="shuffle-method"]:checked').value;
            const value = ui.shuffleInput.value;
            let seed = new Date().getTime(); // Default seed
            if (method === 'text' && value.trim()) {
                seed = value.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
            } else if (method === 'number' && value.trim() && !isNaN(value)) {
                seed = parseInt(value, 10);
            }
            const finalSeed = Math.floor(seed * Math.PI);
            const shuffleRandom = createPRNG(finalSeed);
            const reversalRandom = createPRNG(finalSeed + 1);
            let shuffledDeck = [...deck];
            for (let i = shuffledDeck.length - 1; i > 0; i--) {
                const j = Math.floor(shuffleRandom() * (i + 1));
                [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
            }
            return { seed: finalSeed, shuffledDeck, reversalRandom };
        }

        // --- Mobile Action Bar Setup ---
        if (mobileActionBar) {
            mobileActionBar.innerHTML = '';
            if (ui.revealAllContainer) mobileActionBar.appendChild(ui.revealAllContainer);
            if (ui.mobileControlsTrigger) mobileActionBar.appendChild(ui.mobileControlsTrigger);
        }

        // --- Event Listeners ---
        ui.readingCanvas.addEventListener("mousedown", onPointerDown);
        ui.readingCanvas.addEventListener("touchstart", onPointerDown, { passive: false });
        document.addEventListener("mouseup", onPointerUp);
        document.addEventListener("touchend", onPointerUp);
        document.addEventListener("mouseleave", onPointerUp);
        document.addEventListener("mousemove", onPointerMove);
        document.addEventListener("touchmove", onPointerMove, { passive: false });

// Replace it with this updated version
        ui.readingCanvas.addEventListener("wheel", (e) => {
            e.preventDefault();
            const delta = e.deltaY > 0 ? -0.1 : 0.1;
            // ANNOTATION: The max scale is correctly clamped to 4 (or 400%).
            scale = Math.max(0.25, Math.min(scale + delta, 4)); 
            ui.sliderValue.textContent = `${Math.round(scale * 100)}%`;
            // ANNOTATION: This new line updates the slider's visual position to match the zoom.
            ui.sizeSlider.value = scale * 100; 
            applyTransform();
        });

        ui.mobileControlsTrigger.addEventListener('click', () => ui.controlPanel.classList.add('is-open'));
        ui.drawerCloseBtn.addEventListener('click', () => ui.controlPanel.classList.remove('is-open'));

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
            }
        });
        
        document.querySelectorAll('#custom-spread-controls input').forEach(input => input.addEventListener('input', drawSpreadBlueprint));
        
        document.querySelectorAll('input[name="shuffle-method"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                const method = e.target.value;
                const isTimestamp = method === 'timestamp';
                ui.shuffleInput.disabled = isTimestamp;
                ui.generateBtn.style.display = method === 'number' ? 'inline-block' : 'none';
                ui.shuffleInput.placeholder = isTimestamp ? 'Timestamp will be used automatically.' : `Enter a ${method} here...`;
                if (isTimestamp) ui.shuffleInput.value = new Date().getTime();
                else ui.shuffleInput.value = '';
                updateShuffleExplanation();
            });
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
        
        ui.revealAllBtn.addEventListener('click', () => {
            ui.readingCloth.querySelectorAll('.card-container:not(.flipped)').forEach(card => card.classList.add('flipped'));
        });

        ui.dealBtn.addEventListener('click', async () => {
            ui.controlPanel.classList.remove('is-open');
            if (ui.canvasPlaceholder) ui.canvasPlaceholder.style.display = 'none';

            let spread = { ...spreads[selectedSpreadKey] };
            if (selectedSpreadKey === 'custom') {
                spread.cardCount = parseInt(ui.customControls.querySelector('#custom-card-count').value, 10);
                spread.positions = Array.from({ length: spread.cardCount }, (_, i) => ({ label: `Card ${i + 1}` }));
            }

            const deck = await loadDeck();
            const { seed, shuffledDeck, reversalRandom } = performShuffle(deck);
            const includeReversed = document.getElementById('reversed-cards-checkbox').checked;
            const drawnCards = shuffledDeck.slice(0, spread.cardCount).map(card => ({
                ...card,
                isReversed: includeReversed ? reversalRandom() > 0.5 : false
            }));

            console.clear();
            console.log(`--- SHUFFLE REPORT ---`);
            console.log(`Final Seed Used: ${seed}`);
            console.log("Drawn Cards (with reversal status):", drawnCards.map(c => `${c.name} ${c.isReversed ? '(R)' : ''}`));
            console.log(`----------------------`);

            drawnCards.forEach((card, index) => {
                const cardPositionIndex = index + 1;
                const pos = ui.readingCloth.querySelector(`.position-container.pos-${cardPositionIndex}`);
                if (!pos) {
                    console.error(`Could not find position container for card ${cardPositionIndex}`);
                    return;
                }
                setTimeout(() => {
                    pos.innerHTML = `
                        <div class="card-container">
                            <div class="tarot-card">
                                <div class="card-face card-back"></div>
                                <div class="card-face card-front">
                                    <img src="img/cards/${card.img}" alt="${card.name}" class="${card.isReversed ? 'reversed' : ''}">
                                </div>
                            </div>
                        </div>
                        <div class="position-label">${spread.positions[index]?.label || `Card ${index + 1}`}</div>`;

                    pos.querySelector('.card-container').addEventListener('click', (e) => e.currentTarget.classList.add('flipped'), { once: true });
                    pos.querySelector('.card-front').addEventListener('click', () => openModal(card));
                }, 100 * index);
            });
            ui.revealAllContainer.classList.remove('hidden');
        });
    // --- Card Back Selection Listener ---
    ui.cardBackSelection.addEventListener('change', (e) => {
        if (e.target.name === 'card-back') {
            const selectedTheme = e.target.value;
            const themePrefix = 'card-back-theme-';

            // Remove any existing theme classes from the body
            for (const className of document.body.classList) {
                if (className.startsWith(themePrefix)) {
                    document.body.classList.remove(className);
                }
            }

            // Add the new theme class if it's not the default
            if (selectedTheme !== 'default') {
                document.body.classList.add(themePrefix + selectedTheme);
            }
        }
    });
    // landmark: Add this new code block right after the 'change' event listener
    // --- Apply Initial Card Back Theme on Load ---
    const initialBack = document.querySelector('input[name="card-back"]:checked');
    if (initialBack && initialBack.value !== 'default') {
        document.body.classList.add('card-back-theme-' + initialBack.value);
    }
        // --- Initial View Setup ---
        document.querySelector('.spread-btn').click();
        document.querySelector('input[name="shuffle-method"]:checked').dispatchEvent(new Event('change'));
        applyTransform();
    }

    /**
     * Initializes the Grimoire (encyclopedia) view.
     */
    function initGrimoireView(searchTerm = '') {
        // This function is stable, no changes needed.
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
        const mobileActionBar = document.getElementById('mobile-action-bar');
        if (mobileActionBar) mobileActionBar.innerHTML = '';

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
                if (path === 'grimoire' && queryString) {
                    const params = new URLSearchParams(queryString);
                    route.init(decodeURIComponent(params.get('search') || ''));
                } else {
                    route.init();
                }
            }
        } else {
            window.location.hash = 'home';
        }
    }
    
    document.getElementById('close-modal-btn').addEventListener('click', () => {
        document.getElementById('card-modal').classList.add('hidden');
    });

    window.addEventListener('hashchange', router);
    router(); // Initial call

    // --- Starfield Background Animation ---
    const canvas = document.getElementById('starfield-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let stars = [];

        function generateStars() {
            stars = []; // Clear existing stars
            const starCount = Math.floor((canvas.width * canvas.height) / 8000); // Scale count with area
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
        
        function resetStarfield() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            generateStars();
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
            requestAnimationFrame(animateStars);
        }

        const debouncedReset = debounce(resetStarfield, 250);
        window.addEventListener('resize', debouncedReset);

        resetStarfield(); // Initial setup
        animateStars(); // Start animation loop
    }
});