// main.js (Updated to use local data)

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Starfield Animation ---
    const canvas = document.getElementById('starfield-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let stars = [];
        const numStars = 200;

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5,
                alpha: Math.random(),
                velocity: (Math.random() - 0.5) / 4
            });
        }

        function animateStars() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach(star => {
                star.y += star.velocity;
                if (star.y < 0) {
                    star.y = canvas.height;
                }
                ctx.fillStyle = `rgba(224, 224, 224, ${star.alpha})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();
            });
            requestAnimationFrame(animateStars);
        }
        animateStars();
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }

    // --- Tarot Deck Data ---
    let fullDeck = [];

    // MODIFIED FUNCTION: No longer fetches, just loads local data
    async function loadDeck() {
        if (fullDeck.length > 0) return fullDeck; // Use cache if available
        
        if (typeof tarotDeckData !== 'undefined') {
            fullDeck = tarotDeckData;
            return fullDeck;
        } else {
            console.error("Tarot deck data not found. Make sure tarot-deck.js is loaded correctly before main.js.");
            return [];
        }
    }

    // --- Homepage Logic (Card of the Day) ---
    const cardOfTheDayContainer = document.getElementById('card-of-the-day-container');
    if (cardOfTheDayContainer) {
        loadDeck().then(deck => {
            if (deck.length > 0) {
                const today = new Date().toDateString(); // Get today's date
                const seed = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
                const randomIndex = seed % deck.length;
                const card = deck[randomIndex];
                displayCardOfTheDay(card);
            }
        });
    }

    function displayCardOfTheDay(card) {
        cardOfTheDayContainer.innerHTML = `
            <div class="card-container" style="cursor: default;">
                <div class="tarot-card" style="transform: none;">
                    <div class="card-face card-front">
                        <img src="img/cards/${card.img}" alt="${card.name}">
                    </div>
                </div>
            </div>`;
        const meaningElement = document.getElementById('card-of-the-day-meaning');
        meaningElement.textContent = `"${card.meaning_up}"`;
    }

    // --- Reading Room Logic ---
    const readingRoomContainer = document.getElementById('reading-room-container');
    if (readingRoomContainer) {
        const drawBtn = document.getElementById('draw-cards-btn');
        const spreadBtns = document.querySelectorAll('.spread-btn');
        const cardsDisplayArea = document.getElementById('cards-display-area');
        const resultsTitle = document.getElementById('results-title');
        const mathExplanation = document.getElementById('math-explanation');
        const mathText = document.getElementById('math-text');

        let selectedSpread = 1;
        document.querySelector('.spread-btn[data-spread="1"]').classList.add('selected');

        spreadBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                spreadBtns.forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                selectedSpread = parseInt(btn.dataset.spread, 10);
            });
        });

        drawBtn.addEventListener('click', async () => {
            const deck = await loadDeck();
            if (deck.length === 0) {
                cardsDisplayArea.innerHTML = "<p>Could not retrieve the deck. Please check the console for errors.</p>";
                return;
            }

            const shuffledDeck = shuffleDeck(deck);
            const drawnCards = shuffledDeck.slice(0, selectedSpread);
            
            resultsTitle.textContent = `Your ${selectedSpread}-Card Reading`;
            displayDrawnCards(drawnCards);

            mathExplanation.classList.remove('hidden');
        });
    }

    function shuffleDeck(deck) {
        const method = document.querySelector('input[name="shuffle-method"]:checked').value;
        const intentionText = document.getElementById('user-intention').value;
        const fateNumber = document.getElementById('fate-number').value;

        let seed = 0;
        let explanation = '';

        switch(method) {
            case 'intention':
                if(intentionText.trim() === '') {
                     seed = new Date().getTime();
                     explanation = `Method: Seed of Intention (No text entered). Your shuffle defaulted to using the current timestamp as a seed: ${seed}.`;
                } else {
                    seed = intentionText.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
                    explanation = `Method: Seed of Intention. The text you entered was converted to a number by summing character codes. Your seed is: ${seed}.`;
                }
                break;
            case 'number':
                seed = parseInt(fateNumber, 10) || new Date().getTime();
                explanation = `Method: Number of Fate. Your chosen number was used as the seed: ${seed}. If no number was entered, the timestamp was used.`;
                break;
            case 'timestamp':
            default:
                seed = new Date().getTime();
                explanation = `Method: Pure Chance. The current timestamp was used as the seed: ${seed}.`;
        }

        const mathText = document.getElementById('math-text');
        mathText.textContent = explanation + " This seed was used in a pseudo-random number generator to perform a Fisher-Yates shuffle, ensuring a unique and reproducible shuffle based on your input.";
        
        // Pseudo-random number generator (PRNG) - Mulberry32
        const random = () => {
            let t = seed += 0x6D2B79F5;
            t = Math.imul(t ^ t >>> 15, t | 1);
            t ^= t + Math.imul(t ^ t >>> 7, t | 61);
            return ((t ^ t >>> 14) >>> 0) / 4294967296;
        };
        
        // Fisher-Yates shuffle using the PRNG
        let shuffled = [...deck];
        let currentIndex = shuffled.length;
        let randomIndex;
        
        while (currentIndex !== 0) {
            randomIndex = Math.floor(random() * currentIndex);
            currentIndex--;
            [shuffled[currentIndex], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[currentIndex]];
        }
        
        return shuffled;
    }

    function displayDrawnCards(cards) {
        const cardsDisplayArea = document.getElementById('cards-display-area');
        cardsDisplayArea.innerHTML = '';
        cards.forEach((card, index) => {
            const cardContainer = document.createElement('div');
            cardContainer.className = 'card-container';
            cardContainer.innerHTML = `
                <div class="tarot-card">
                    <div class="card-face card-back"></div>
                    <div class="card-face card-front">
                        <img src="img/cards/${card.img}" alt="${card.name}">
                    </div>
                </div>`;
            
            setTimeout(() => {
                cardContainer.classList.add('flipped');
            }, index * 300);

            cardContainer.addEventListener('click', () => window.openModal(card));
            cardsDisplayArea.appendChild(cardContainer);
        });
    }

    // --- Modal Logic (Shared by all pages) ---
    const modal = document.getElementById('card-modal');
    if (modal) {
        const closeModalBtn = document.getElementById('close-modal-btn');
        const modalCardContent = document.getElementById('modal-card-content');
        
        window.openModal = (card) => { // Make openModal globally accessible
            modalCardContent.innerHTML = `
                <img src="img/cards/${card.img}" alt="${card.name}">
                <div>
                    <h3>${card.name}</h3>
                    <h4>Meaning (Upright)</h4>
                    <p>${card.meaning_up}</p>
                    <h4>Meaning (Reversed)</h4>
                    <p>${card.meaning_rev}</p>
                    <h4>Full Description</h4>
                    <p>${card.desc}</p>
                </div>
            `;
            modal.classList.remove('hidden');
        }
        
        closeModalBtn.addEventListener('click', () => modal.classList.add('hidden'));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    }

    // --- Grimoire Page Logic ---
    const grimoireGrid = document.getElementById('grimoire-grid');
    if (grimoireGrid) {
        const searchBar = document.getElementById('search-bar');

        async function populateGrimoire() {
            const deck = await loadDeck();
            if (deck.length === 0) {
                grimoireGrid.innerHTML = "<p>Could not load the deck. Please check the console for errors.</p>";
                return;
            }
            
            grimoireGrid.innerHTML = ''; // Clear placeholder
            deck.forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.className = 'card-container';
                cardElement.setAttribute('data-card-name', card.name.toLowerCase());
                cardElement.innerHTML = `
                    <div class="tarot-card" style="transform: none;">
                        <div class="card-face card-front">
                            <img src="img/cards/${card.img}" alt="${card.name}">
                        </div>
                    </div>`;
                cardElement.addEventListener('click', () => window.openModal(card));
                grimoireGrid.appendChild(cardElement);
});
        }

        function filterCards() {
            const searchTerm = searchBar.value.toLowerCase();
            const allCards = grimoireGrid.querySelectorAll('.card-container');
            allCards.forEach(cardElement => {
                const cardName = cardElement.dataset.cardName;
                if (cardName.includes(searchTerm)) {
                    cardElement.style.display = 'block';
                } else {
                    cardElement.style.display = 'none';
                }
            });
        }

        searchBar.addEventListener('input', filterCards);

        populateGrimoire();
    }
});