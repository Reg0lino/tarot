// main.js (Version 9: The Definitive Polish & Fix)

document.addEventListener('DOMContentLoaded', () => {
    
    // =================================================================================
    // SECTION 1: APP-WIDE STATE AND SHARED FUNCTIONS
    // =================================================================================

    let fullDeck = [];
    const appContainer = document.getElementById('app-container');

    // --- Data: Spreads Database ---
    const spreads = {
        'one-card': { name: 'One Card', cardCount: 1, description: 'A single card for quick insight.', layoutClass: 'layout-one-card', positions: [ { label: '1. The Card' } ] },
        'three-card': { name: 'Three Card', cardCount: 3, description: 'A simple spread for exploring a path.', layoutClass: 'layout-three-card', positions: [ { label: '1. The Past' }, { label: '2. The Present' }, { label: '3. The Future' } ] },
        'safe-passage': { name: 'Safe Passage (Modern)', cardCount: 7, description: 'A modern, fictional spread. It has no historical basis and is provided for creative exploration.', layoutClass: 'layout-safe-passage',
            positions: [ { label: '1. The Traveler' }, { label: '2. What\'s Missing' }, { label: '3. The Path Behind' }, { label: '4. The Path Ahead' }, { label: '5. Obstacles' }, { label: '6. Potential Windfall' }, { label: '7. The Destination' } ],
            overlapGroups: [[1, 7]] // [bottom, top]
        },
        'celtic-cross': { name: 'Celtic Cross', cardCount: 10, description: 'A comprehensive spread for a deep analysis of a situation.', layoutClass: 'layout-celtic-cross',
            positions: [ { label: '1. Current energy' }, { label: '2. The challenge' }, { label: '3. Conscious beliefs' }, { label: '4. Subconscious beliefs' }, { label: '5. The past' }, { label: '6. The future' }, { label: '7. Best approach' }, { label: '8. External influences' }, { label: '9. Hopes and fears' }, { label: '10. The outcome' } ],
            overlapGroups: [[1, 2]] // [bottom, top]
        },
        'custom': { name: 'Custom Spread', cardCount: 0, description: 'A flexible layout you design yourself.', layoutClass: 'layout-custom' }
    };

    /**
     * Loads the tarot deck from the tarot-deck.js file. Caches it after the first load.
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
     * NEW: Takes a string and converts <dfn> tags into clickable dictionary links.
     * @param {string} text The text to process.
     * @returns {string} The processed HTML string.
     */
    function createDictionaryLinks(text) {
        if (!text) return '';
        return text.replace(/<dfn>(.*?)<\/dfn>/g, (match, word) => {
            return `<a href="https://www.merriam-webster.com/dictionary/${word.toLowerCase()}" target="_blank" rel="noopener noreferrer" class="dict-link" title="Look up '${word}'">${word}</a>`;
        });
    }

    /**
     * REWRITTEN: Opens and populates the modal using the new detailed data schema.
     * @param {object} card - The card object to display.
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
     * @param {number} seed - The initial seed number.
     * @returns {function} A function that returns a new random number between 0 and 1 each time it's called.
     */
    function createPRNG(seed) {
        let state = seed % 2147483647;
        if (state <= 0) state += 2147483646;
        return function() {
            state = (state * 16807) % 2147483647;
            return (state - 1) / 2147483646;
        };
    }

    // =================================================================================
    // SECTION 2: VIEW INITIALIZATION LOGIC
    // =================================================================================

    /**
     * FIXED: Initializes the Homepage view without using the Reading Room's shuffle logic.
     */
    function initHomeView() {
        const cardContainerElement = document.getElementById('card-of-the-day-container');
        const learnMoreContainer = document.getElementById('learn-more-container');
        const learnMoreBtn = document.getElementById('learn-more-btn');
        const meaningElement = document.getElementById('card-of-the-day-meaning');
        if (!cardContainerElement) return;
        let revealedCard = null;

        loadDeck().then(deck => {
            if (deck.length > 0) {
                const today = new Date().toDateString();
                const seed = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
                const randomForShuffle = createPRNG(seed);
                const randomForReversal = createPRNG(seed + 1);

                let shuffled = [...deck];
                let currentIndex = shuffled.length, randomIndex;
                while (currentIndex != 0) {
                    randomIndex = Math.floor(randomForShuffle() * currentIndex);
                    currentIndex--;
                    [shuffled[currentIndex], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[currentIndex]];
                }
                
                revealedCard = { ...shuffled[0], isReversed: randomForReversal() > 0.5 };
                
                const cardContainer = document.createElement('div');
                cardContainer.className = 'position-container';
                cardContainer.innerHTML = `<div class="card-container"><div class="tarot-card"><div class="card-face card-back"></div><div class="card-face card-front"><img src="img/cards/${revealedCard.img}" alt="${revealedCard.name}" class="${revealedCard.isReversed ? 'reversed' : ''}"></div></div></div>`;

                cardContainer.addEventListener('click', () => {
                    cardContainer.querySelector('.card-container').classList.add('flipped');
                    meaningElement.textContent = `"${revealedCard.isReversed ? revealedCard.meanings.reversed : revealedCard.meanings.upright}"`;
                    learnMoreContainer.classList.add('visible');
                }, { once: true });

                cardContainerElement.innerHTML = '';
                cardContainerElement.appendChild(cardContainer);
            }
        });

        learnMoreBtn.addEventListener('click', () => {
            if (revealedCard) window.location.hash = `#grimoire?search=${encodeURIComponent(revealedCard.name)}`;
        });
    }

    /**
     * REWRITTEN: Initializes the Reading Room view with the new two-column layout and all features.
     */
    function initReadingRoomView() {
        const ui = {
            spreadSelection: document.getElementById('spread-selection'),
            customControls: document.getElementById('custom-spread-controls'),
            spreadInfoText: document.getElementById('spread-info-text'),
            shuffleInput: document.getElementById('shuffle-input'),
            shuffleExplanation: document.getElementById('shuffle-math-text'),
            dealBtn: document.getElementById('deal-cards-btn'),
            readingCloth: document.getElementById('reading-cloth'),
            generateBtn: document.getElementById('generate-btn'),
            sizeSlider: document.getElementById('layout-size-slider'),
            sliderValue: document.getElementById('slider-value'),
            resetSizeBtn: document.getElementById('reset-size-btn'),
            revealAllContainer: document.getElementById('reveal-all-container'),
            revealAllBtn: document.getElementById('reveal-all-btn')
        };
        let selectedSpreadKey = 'one-card';

        // --- Reading Room Helper Functions ---

        function drawSpreadBlueprint() {
            let spread = { ...spreads[selectedSpreadKey] };
            if (selectedSpreadKey === 'custom') {
                spread.cardCount = parseInt(document.getElementById('custom-card-count').value, 10) || 0;
                const rowCount = parseInt(document.getElementById('custom-row-count').value, 10) || spread.cardCount;
                ui.readingCloth.style.gridTemplateColumns = `repeat(${rowCount > 0 ? rowCount : 1}, auto)`;
                spread.positions = Array.from({ length: spread.cardCount }, (_, i) => ({ label: `Card ${i + 1}`}));
            }
            
            ui.readingCloth.innerHTML = '';
            ui.readingCloth.className = `reading-cloth ${spread.layoutClass || 'layout-custom'}`;
            ui.revealAllContainer.classList.add('hidden');
            
            const placedIndices = new Set();
            if (spread.overlapGroups) {
                spread.overlapGroups.forEach(group => {
                    const groupContainer = document.createElement('div');
                    groupContainer.className = 'overlap-group';
                    group.forEach((posIndex) => {
                        groupContainer.appendChild(createPositionElement(posIndex, spread));
                        placedIndices.add(posIndex);
                    });
                    ui.readingCloth.appendChild(groupContainer);
                });
            }

            for (let i = 1; i <= spread.cardCount; i++) {
                if (!placedIndices.has(i)) ui.readingCloth.appendChild(createPositionElement(i, spread));
            }
        }
        
        function createPositionElement(index, spread) {
            const position = document.createElement('div');
            position.className = `position-container pos-${index}`;
            const group = spread.overlapGroups?.find(g => g.includes(index));
            if (group) {
                position.classList.add(group[1] === index ? 'top-card' : 'bottom-card');
            }
            position.innerHTML = `<div class="card-container card-placeholder"></div><div class="position-label">${spread.positions[index-1]?.label || `Card ${index}`}</div>`;
            return position;
        }

        function updateShuffleExplanation() {
            const method = document.querySelector('input[name="shuffle-method"]:checked').value;
            const value = ui.shuffleInput.value;
            let seedText = 'N/A';
            if (value.trim()) seedText = method === 'text' ? `"${value}"` : value;
            ui.shuffleExplanation.textContent = `METHOD: ${method.toUpperCase()} | YOUR INPUT: ${seedText}`;
        }

        // --- Setting up Event Listeners ---

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
        
        document.querySelectorAll('input[name="shuffle-method"]').forEach(radio => radio.addEventListener('change', (e) => {
            const method = e.target.value;
            const isTimestamp = method === 'timestamp';
            ui.shuffleInput.disabled = isTimestamp;
            ui.generateBtn.style.display = method === 'number' ? 'inline-block' : 'none';
            ui.shuffleInput.placeholder = isTimestamp ? 'Timestamp will be used automatically.' : `Enter a ${method} here...`;
            if (isTimestamp) ui.shuffleInput.value = new Date().getTime(); else ui.shuffleInput.value = '';
            updateShuffleExplanation();
        }));

        ui.generateBtn.addEventListener('click', () => {
            ui.shuffleInput.value = Math.floor(Math.random() * 900000) + 100000;
            updateShuffleExplanation();
        });

        ui.shuffleInput.addEventListener('input', updateShuffleExplanation);
        
        ui.sizeSlider.addEventListener('input', () => {
            const scaleValue = ui.sizeSlider.value / 100;
            ui.readingCloth.style.transform = `scale(${scaleValue})`;
            ui.sliderValue.textContent = `${ui.sizeSlider.value}%`;
        });
        
        ui.resetSizeBtn.addEventListener('click', () => {
            ui.sizeSlider.value = 100;
            ui.sizeSlider.dispatchEvent(new Event('input'));
        });
        
        ui.revealAllBtn.addEventListener('click', () => {
            ui.readingCloth.querySelectorAll('.card-container:not(.flipped)').forEach(card => card.classList.add('flipped'));
        });

        ui.dealBtn.addEventListener('click', async () => {
            let spread = { ...spreads[selectedSpreadKey] };
            if (selectedSpreadKey === 'custom') {
                spread.cardCount = parseInt(document.getElementById('custom-card-count').value, 10);
                spread.positions = Array.from({ length: spread.cardCount }, (_, i) => ({ label: `Card ${i + 1}`}));
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
            
            const positions = Array.from(ui.readingCloth.querySelectorAll('.position-container'));
            positions.forEach(pos => {
                const posIndexMatch = pos.className.match(/pos-(\d+)/);
                if (!posIndexMatch) return;
                const posIndex = parseInt(posIndexMatch[1]);
                const card = drawnCards[posIndex-1];
                if (!card) return;
                
                setTimeout(() => {
                    const positionLabel = pos.querySelector('.position-label').outerHTML;
                    pos.innerHTML = `<div class="card-container"><div class="tarot-card"><div class="card-face card-back"></div><div class="card-face card-front"><img src="img/cards/${card.img}" alt="${card.name}" class="${card.isReversed ? 'reversed' : ''}"></div></div></div>${positionLabel}`;
                    pos.querySelector('.card-container').addEventListener('click', (e) => e.currentTarget.classList.add('flipped'), { once: true });
                    pos.querySelector('.card-front').addEventListener('click', () => openModal(card));
                }, 100 * (posIndex-1));
            });
            ui.revealAllContainer.classList.remove('hidden');
        });

        function performShuffle(deck) {
            const method = document.querySelector('input[name="shuffle-method"]:checked').value;
            const value = document.getElementById('shuffle-input').value;
            let seed = 0;
            switch(method) {
                case 'text': seed = value.trim() ? value.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) : new Date().getTime(); break;
                case 'number': seed = value.trim() && !isNaN(value) ? parseInt(value, 10) : new Date().getTime(); break;
                default: seed = new Date().getTime(); break;
            }
            const finalSeed = Math.floor(seed * Math.PI);
            const shuffleRandom = createPRNG(finalSeed);
            const reversalRandom = createPRNG(finalSeed + 1);
            let shuffledDeck = [...deck];
            let currentIndex = shuffledDeck.length, randomIndex;
            while (currentIndex !== 0) {
                randomIndex = Math.floor(shuffleRandom() * currentIndex);
                currentIndex--;
                [shuffledDeck[currentIndex], shuffledDeck[randomIndex]] = [shuffledDeck[randomIndex], shuffledDeck[currentIndex]];
            }
            return { seed: finalSeed, shuffledDeck, reversalRandom };
        }

        // Initialize view state
        document.querySelector('.spread-btn').click();
        document.querySelector('input[name="shuffle-method"]:checked').dispatchEvent(new Event('change'));
    }

// --- REWRITTEN GRIMOIRE INITIALIZER (FOOL-PROOF) ---
function initGrimoireView(searchTerm = '') {
    const grimoireGrid = document.getElementById('grimoire-grid');
    const searchBar = document.getElementById('search-bar');
    if (!grimoireGrid) return;

    loadDeck().then(deck => {
        if (deck.length > 0) {
            grimoireGrid.innerHTML = ''; // Clear placeholder
            deck.forEach(card => {
                // Use a new, dedicated structure to avoid any and all style conflicts.
                const cardElement = document.createElement('div');
                cardElement.className = 'grimoire-card'; 
                cardElement.setAttribute('data-card-name', card.name.toLowerCase());
                
                cardElement.innerHTML = `
                    <img src="img/cards/${card.img}" alt="${card.name}">
                    <p class="grimoire-card-name">${card.name}</p>
                `;
                
                cardElement.addEventListener('click', () => openModal(card));
                grimoireGrid.appendChild(cardElement);
            });

            // If a search term was passed from the homepage, apply it.
            if (searchTerm) {
                searchBar.value = searchTerm;
            }
            // Trigger the filter once on load to ensure all cards are visible.
            searchBar.dispatchEvent(new Event('input', { bubbles: true }));
        }
    });

    searchBar.addEventListener('input', (e) => {
        const currentSearch = e.target.value.toLowerCase();
        grimoireGrid.querySelectorAll('.grimoire-card').forEach(cardElement => {
            // Use flex for centering, not block
            cardElement.style.display = cardElement.dataset.cardName.includes(currentSearch) ? 'flex' : 'none';
        });
    });
}

    // =================================================================================
    // SECTION 3: ROUTER AND APP INITIALIZATION
    // =================================================================================
    const routes = { 'home': { templateId: 'view-home', init: initHomeView }, 'reading-room': { templateId: 'view-reading-room', init: initReadingRoomView }, 'grimoire': { templateId: 'view-grimoire', init: initGrimoireView } };
    function router() { const hash = window.location.hash.slice(1); const [path, queryString] = hash.split('?'); const routeName = path || 'home'; const route = routes[routeName]; if (route) { const template = document.getElementById(route.templateId); if (template) { appContainer.innerHTML = ''; appContainer.appendChild(template.content.cloneNode(true)); document.querySelectorAll('.nav-link').forEach(link => link.classList.toggle('active', link.dataset.route === routeName)); if (routeName === 'grimoire' && queryString) { const params = new URLSearchParams(queryString); route.init(decodeURIComponent(params.get('search') || '')); } else { route.init(); } } } else { window.location.hash = 'home'; } }
    document.getElementById('close-modal-btn').addEventListener('click', () => { document.getElementById('card-modal').classList.add('hidden'); });
    window.addEventListener('hashchange', router);
    router();
    const canvas = document.getElementById('starfield-canvas'); if (canvas) { const ctx = canvas.getContext('2d'); canvas.width = window.innerWidth; canvas.height = window.innerHeight; let stars = []; for (let i = 0; i < 200; i++) { stars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, radius: Math.random() * 1.5, alpha: Math.random(), velocity: (Math.random() - 0.5) / 4 }); } function animateStars() { ctx.clearRect(0, 0, canvas.width, canvas.height); stars.forEach(star => { star.y += star.velocity; if (star.y < 0) star.y = canvas.height; ctx.fillStyle = `rgba(224, 224, 224, ${star.alpha})`; ctx.beginPath(); ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2); ctx.fill(); }); requestAnimationFrame(animateStars); } animateStars(); window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }); }
});