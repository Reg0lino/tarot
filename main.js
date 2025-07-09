// main.js (SPA Version)

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Global App State ---
    let fullDeck = [];
    const appContainer = document.getElementById('app-container');

    // --- Shared Functions ---
    async function loadDeck() {
        if (fullDeck.length > 0) return fullDeck;
        if (typeof tarotDeckData !== 'undefined' && tarotDeckData.length > 0) {
            fullDeck = tarotDeckData;
            return fullDeck;
        }
        return [];
    }

    function openModal(card) {
        const modal = document.getElementById('card-modal');
        const content = document.getElementById('modal-card-content');
        content.innerHTML = `
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

    // --- View Initializers ---

    function initHomeView() {
        const cardContainer = document.getElementById('card-of-the-day-container');
        if (!cardContainer) return;

        loadDeck().then(deck => {
            if (deck.length > 0) {
                const today = new Date().toDateString();
                const seed = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
                const randomIndex = seed % deck.length;
                const card = deck[randomIndex];
                
                cardContainer.innerHTML = `
                    <div class="card-container" style="cursor: default; width: 180px; height: 312px; padding: 0;">
                        <div class="tarot-card" style="transform: none;">
                            <div class="card-face card-front">
                                <img src="img/cards/${card.img}" alt="${card.name}">
                            </div>
                        </div>
                    </div>`;
                const meaningElement = document.getElementById('card-of-the-day-meaning');
                meaningElement.textContent = `"${card.meaning_up}"`;
            }
        });
    }

    function initReadingRoomView() {
        const drawBtn = document.getElementById('draw-cards-btn');
        const spreadBtns = document.querySelectorAll('.spread-btn');
        const resultsTitle = document.getElementById('results-title');
        const cardsDisplayArea = document.getElementById('cards-display-area');
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
            if (deck.length === 0) return;

            // --- Shuffle Logic ---
            const method = document.querySelector('input[name="shuffle-method"]:checked').value;
            const intentionText = document.getElementById('user-intention').value;
            const fateNumber = document.getElementById('fate-number').value;
            let seed = 0;
            let explanation = '';

            switch(method) {
                case 'intention':
                    seed = intentionText.trim() === '' ? new Date().getTime() : intentionText.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
                    explanation = `Method: Seed of Intention. Using text as seed.`;
                    break;
                case 'number':
                    seed = parseInt(fateNumber, 10) || new Date().getTime();
                    explanation = `Method: Number of Fate. Using ${seed} as seed.`;
                    break;
                default:
                    seed = new Date().getTime();
                    explanation = `Method: Pure Chance. Using timestamp as seed.`;
            }
            mathText.textContent = explanation;
            mathExplanation.classList.remove('hidden');

            const random = () => {
                let t = seed += 0x6D2B79F5;
                t = Math.imul(t ^ t >>> 15, t | 1);
                t ^= t + Math.imul(t ^ t >>> 7, t | 61);
                return ((t ^ t >>> 14) >>> 0) / 4294967296;
            };
            
            let shuffled = [...deck];
            let currentIndex = shuffled.length, randomIndex;
            while (currentIndex !== 0) {
                randomIndex = Math.floor(random() * currentIndex);
                currentIndex--;
                [shuffled[currentIndex], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[currentIndex]];
            }
            // --- End Shuffle Logic ---

            const drawnCards = shuffled.slice(0, selectedSpread);
            resultsTitle.textContent = `Your ${selectedSpread}-Card Reading`;
            
            cardsDisplayArea.innerHTML = '';
            drawnCards.forEach((card, index) => {
                const cardContainer = document.createElement('div');
                cardContainer.className = 'card-container';
                cardContainer.style.width = '150px'; 
                cardContainer.style.height = '260px';
                cardContainer.style.padding = '0';
                cardContainer.innerHTML = `
                    <div class="tarot-card">
                        <div class="card-face card-back"></div>
                        <div class="card-face card-front">
                            <img src="img/cards/${card.img}" alt="${card.name}">
                        </div>
                    </div>`;
                setTimeout(() => cardContainer.classList.add('flipped'), index * 300);
                cardContainer.addEventListener('click', () => openModal(card));
                cardsDisplayArea.appendChild(cardContainer);
            });
        });
    }

    function initGrimoireView() {
        const grimoireGrid = document.getElementById('grimoire-grid');
        const searchBar = document.getElementById('search-bar');
        if (!grimoireGrid) return;
        
        loadDeck().then(deck => {
            if (deck.length > 0) {
                grimoireGrid.innerHTML = ''; // Clear placeholder
                deck.forEach(card => {
                    const cardElement = document.createElement('div');
                    cardElement.className = 'card-container';
                    cardElement.setAttribute('data-card-name', card.name.toLowerCase());
                    cardElement.innerHTML = `<div class="tarot-card" style="transform: none;"><div class="card-face card-front"><img src="img/cards/${card.img}" alt="${card.name}"></div></div>`;
                    cardElement.addEventListener('click', () => openModal(card));
                    grimoireGrid.appendChild(cardElement);
                });
            }
        });

        searchBar.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            grimoireGrid.querySelectorAll('.card-container').forEach(cardElement => {
                cardElement.style.display = cardElement.dataset.cardName.includes(searchTerm) ? 'block' : 'none';
            });
        });
    }

    // --- Router Logic ---
    const routes = {
        'home': { templateId: 'view-home', init: initHomeView },
        'reading-room': { templateId: 'view-reading-room', init: initReadingRoomView },
        'grimoire': { templateId: 'view-grimoire', init: initGrimoireView }
    };

    function router() {
        const path = window.location.hash.slice(1) || 'home';
        const route = routes[path];

        if (route) {
            const template = document.getElementById(route.templateId);
            if (template) {
                appContainer.innerHTML = ''; // Clear the stage
                const viewContent = template.content.cloneNode(true);
                appContainer.appendChild(viewContent);
                
                // Highlight active nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.toggle('active', link.dataset.route === path);
                });

                // Initialize the specific JS for the new view
                if (typeof route.init === 'function') {
                    route.init();
                }
            }
        } else {
            // Optional: Redirect to home for unknown hashes
            window.location.hash = 'home';
        }
    }

    // --- App Initialization ---

    // Setup modal close button once
    document.getElementById('close-modal-btn').addEventListener('click', () => {
        document.getElementById('card-modal').classList.add('hidden');
    });

    // Listen for hash changes (e.g., clicking a nav link)
    window.addEventListener('hashchange', router);
    // Initial load: route to the current hash or to home
    router(); 

    // Animate starfield
    const canvas = document.getElementById('starfield-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let stars = [];
        for (let i = 0; i < 200; i++) {
            stars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, radius: Math.random() * 1.5, alpha: Math.random(), velocity: (Math.random() - 0.5) / 4 });
        }
        function animateStars() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach(star => {
                star.y += star.velocity;
                if (star.y < 0) star.y = canvas.height;
                ctx.fillStyle = `rgba(224, 224, 224, ${star.alpha})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();
            });
            requestAnimationFrame(animateStars);
        }
        animateStars();
        window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; });
    }
});