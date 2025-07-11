// js/shuffle-animation.js
class ShuffleController {
    constructor(deck, spread) {
        this.deck = [...deck];
        this.spread = spread;
        this.isAnimating = false;
        this.washAnimationType = 0;

        // --- DOM Element Cache ---
        this.modal = document.getElementById('shuffle-zone-modal');
        this.visualDeckContainer = document.getElementById('visual-deck-container');
        this.cutBtn = document.getElementById('cut-deck-btn');
        this.washBtn = document.getElementById('wash-deck-btn');
        this.dealBtn = document.getElementById('begin-reading-btn');
        this.readingCanvas = document.getElementById('reading-canvas'); // Cache the canvas

        // --- Pre-bind event handlers for proper removal ---
        // This is crucial for preventing event listener leaks.
        this.boundCutHandler = this.handleCutClick.bind(this);
        this.boundWashHandler = this.handleWashClick.bind(this);
        this.boundDealHandler = this.handleDealClick.bind(this);
    }
    
    start() {
        this.addEventListeners();
        this.createVisualDeck();
        this.showModal();
    }

    // ANNOTATION: This new method is the core of the cleanup protocol.
    cleanup() {
        this.removeEventListeners();
        this.hideModal();
        // The controller's final act is to remove the blueprint visuals,
        // revealing the fully dealt, interactive cards.
        this.readingCanvas.classList.remove('blueprint-mode');
    }
    
    addEventListeners() {
        this.cutBtn.addEventListener('click', this.boundCutHandler);
        this.washBtn.addEventListener('click', this.boundWashHandler);
        this.dealBtn.addEventListener('click', this.boundDealHandler);
    }

    removeEventListeners() {
        this.cutBtn.removeEventListener('click', this.boundCutHandler);
        this.washBtn.removeEventListener('click', this.boundWashHandler);
        this.dealBtn.removeEventListener('click', this.boundDealHandler);
    }

    createVisualDeck() { this.visualDeckContainer.innerHTML = '<div class="visual-deck"></div>'; }
    showModal() { this.modal.classList.remove('hidden'); }
    hideModal() { this.modal.classList.add('hidden'); }
    
    handleCutClick() {
        if (this.isAnimating) return;
        this.deck = this.cutDeck(this.deck);
        this.animateCut();
    }
    
    handleWashClick() {
        if (this.isAnimating) return;
        this.deck = this.washDeck(this.deck);
        if (this.washAnimationType === 0) this.animateCascade();
        else this.animateFan();
        this.washAnimationType = (this.washAnimationType + 1) % 2;
    }
    
    handleDealClick() {
        if (this.isAnimating) return;
        this.animateDeal();
    }
    
    cutDeck(deck) {
        const cutPoint = Math.floor(deck.length / 2) + Math.floor(Math.random() * 10) - 5;
        const topHalf = deck.slice(0, cutPoint);
        const bottomHalf = deck.slice(cutPoint);
        return [...bottomHalf, ...topHalf];
    }
    
    washDeck(deck) {
        let washedDeck = [...deck];
        for (let i = 0; i < washedDeck.length; i++) {
            const randomIndex = Math.floor(Math.random() * washedDeck.length);
            [washedDeck[i], washedDeck[randomIndex]] = [washedDeck[randomIndex], washedDeck[i]];
        }
        return washedDeck;
    }
    
    animateCut() {
        this.isAnimating = true;
        const mainDeck = this.visualDeckContainer.querySelector('.visual-deck');
        mainDeck.style.opacity = '0';
        const topHalf = document.createElement('div');
        const bottomHalf = document.createElement('div');
        topHalf.className = 'deck-half deck-half-top';
        bottomHalf.className = 'deck-half deck-half-bottom';
        const currentThemeClass = document.body.className.match(/card-back-theme-\w+/);
        if (currentThemeClass) {
            const themeStyle = getComputedStyle(document.querySelector(`.${currentThemeClass[0]} .visual-deck`));
            topHalf.style.backgroundImage = themeStyle.backgroundImage;
            bottomHalf.style.backgroundImage = themeStyle.backgroundImage;
        } else {
            topHalf.style.backgroundColor = 'var(--primary-purple)';
            bottomHalf.style.backgroundColor = 'var(--primary-purple)';
        }
        this.visualDeckContainer.appendChild(topHalf);
        this.visualDeckContainer.appendChild(bottomHalf);
        topHalf.addEventListener('animationend', () => {
            topHalf.remove();
            bottomHalf.remove();
            mainDeck.style.opacity = '1';
            this.isAnimating = false;
        }, { once: true });
    }
    
    animateCascade() {
        this.isAnimating = true;
        const mainDeck = this.visualDeckContainer.querySelector('.visual-deck');
        mainDeck.style.opacity = '0';
        const cardCount = 7;
        const cards = [];
        const currentThemeClass = document.body.className.match(/card-back-theme-\w+/);
        let cardBackStyle = { backgroundColor: 'var(--primary-purple)', border: '2px solid var(--secondary-purple)' };
        if (currentThemeClass) {
            const themeStyle = getComputedStyle(document.querySelector(`.${currentThemeClass[0]} .visual-deck`));
            cardBackStyle = { backgroundImage: themeStyle.backgroundImage, border: 'none' };
        }
        for (let i = 0; i < cardCount; i++) {
            const cardEl = document.createElement('div');
            cardEl.className = 'shuffle-card';
            Object.assign(cardEl.style, cardBackStyle);
            this.visualDeckContainer.appendChild(cardEl);
            cards.push(cardEl);
        }
        requestAnimationFrame(() => {
            cards.forEach((card) => {
                const randomX = (Math.random() - 0.5) * 300;
                const randomY = (Math.random() - 0.7) * 250;
                const randomRot = (Math.random() - 0.5) * 60;
                card.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRot}deg)`;
                card.style.opacity = '1';
            });
        });
        setTimeout(() => {
            cards.forEach((card) => {
                card.style.transform = 'translate(0, 0) rotate(0deg)';
                card.style.opacity = '0';
            });
            setTimeout(() => {
                cards.forEach(card => card.remove());
                mainDeck.style.opacity = '1';
                this.isAnimating = false;
            }, 500);
        }, 800);
    }

    animateFan() {
        this.isAnimating = true;
        this.visualDeckContainer.classList.add('is-shuffling');
        const mainDeck = this.visualDeckContainer.querySelector('.visual-deck');
        mainDeck.style.opacity = '0';
        const cardCount = 7;
        const fanAngle = 90;
        const cards = [];
        const currentThemeClass = document.body.className.match(/card-back-theme-\w+/);
        let cardBackStyle = { backgroundColor: 'var(--primary-purple)', border: '2px solid var(--secondary-purple)' };
        if (currentThemeClass) {
            const themeStyle = getComputedStyle(document.querySelector(`.${currentThemeClass[0]} .visual-deck`));
            cardBackStyle = { backgroundImage: themeStyle.backgroundImage, border: 'none' };
        }
        for (let i = 0; i < cardCount; i++) {
            const cardEl = document.createElement('div');
            cardEl.className = 'shuffle-card';
            Object.assign(cardEl.style, cardBackStyle);
            this.visualDeckContainer.appendChild(cardEl);
            cards.push(cardEl);
        }
        requestAnimationFrame(() => {
            cards.forEach((card, i) => {
                const angle = (i - Math.floor(cardCount / 2)) * (fanAngle / cardCount);
                card.style.transform = `rotate(${angle}deg) translateY(-60px)`;
                card.style.opacity = '1';
            });
        });
        setTimeout(() => {
            cards.forEach((card) => {
                card.style.transform = 'rotate(0deg) translateY(0px)';
                card.style.opacity = '0';
            });
            setTimeout(() => {
                cards.forEach(card => card.remove());
                this.visualDeckContainer.classList.remove('is-shuffling');
                mainDeck.style.opacity = '1';
                this.isAnimating = false;
            }, 500);
        }, 800);
    }

    animateDeal() {
        this.isAnimating = true;
        this.cutBtn.style.display = 'none';
        this.washBtn.style.display = 'none';
        this.dealBtn.style.display = 'none';
        this.visualDeckContainer.style.opacity = '0';

        const includeReversed = document.getElementById('reversed-cards-checkbox').checked;
        const reversalRandom = window.createPRNG(new Date().getTime());

        const cardsToDraw = this.deck.slice(0, this.spread.cardCount).map(card => ({
            ...card,
            isReversed: includeReversed ? reversalRandom() > 0.5 : false
        }));

        const startRect = this.visualDeckContainer.getBoundingClientRect();
        const startX = startRect.left + (startRect.width / 2);
        const startY = startRect.top + (startRect.height / 2);

        let completedAnimations = 0;
        const totalAnimations = cardsToDraw.length;
        
        // If there are no cards to draw, clean up immediately.
        if (totalAnimations === 0) {
            this.cleanup();
            return;
        }

        const showCardModal = (card) => window.openModal(card);

        cardsToDraw.forEach((cardData, index) => {
            const cardPositionIndex = index + 1;
            const placeholder = document.querySelector(`.reading-cloth .pos-${cardPositionIndex}`);
            if (!placeholder) {
                console.error(`Could not find placeholder for position ${cardPositionIndex}`);
                // Ensure cleanup happens even if a placeholder is missing.
                completedAnimations++;
                if (completedAnimations === totalAnimations) {
                    this.cleanup();
                }
                return;
            };

            const endRect = placeholder.getBoundingClientRect();
            
            const finalCardWrapper = document.createElement('div');
            finalCardWrapper.innerHTML = `
                <div class="card-container">
                    <div class="tarot-card">
                        <div class="card-face card-back"></div>
                        <div class="card-face card-front">
                            <img src="img/cards/${cardData.img}" alt="${cardData.name}" class="${cardData.isReversed ? 'reversed' : ''}">
                        </div>
                    </div>
                </div>`;
            finalCardWrapper.className = 'flying-card'; 
            
            Object.assign(finalCardWrapper.style, {
                top: `${startY - (endRect.height / 2)}px`,
                left: `${startX - (endRect.width / 2)}px`,
                width: `${endRect.width}px`,
                height: `${endRect.height}px`,
                transform: 'rotate(0deg)'
            });
            document.body.appendChild(finalCardWrapper);

            setTimeout(() => {
                requestAnimationFrame(() => {
                    finalCardWrapper.style.top = `${endRect.top}px`;
                    finalCardWrapper.style.left = `${endRect.left}px`;
                    finalCardWrapper.style.transform = getComputedStyle(placeholder).transform;
                });
            }, 100 * index);

            finalCardWrapper.addEventListener('transitionend', () => {
                placeholder.innerHTML = finalCardWrapper.innerHTML;
                
                placeholder.querySelector('.card-container').addEventListener('click', (e) => e.currentTarget.classList.add('flipped'), { once: true });
                placeholder.querySelector('.card-front').addEventListener('click', () => showCardModal(cardData));
                
                finalCardWrapper.remove(); 

                completedAnimations++;
                // ANNOTATION: The cleanup protocol is only called after the VERY LAST card
                // has finished its animation, ensuring a seamless transition.
                if (completedAnimations === totalAnimations) {
                    document.querySelector('#reveal-all-container').classList.remove('hidden');
                    this.cleanup(); // Self-destruct and hide the modal.
                }
            }, { once: true });
        });
    }
}