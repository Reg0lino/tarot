// js/shuffle-animation.js

class ShuffleController {
    constructor(deck, spread, onComplete) {
        this.deck = [...deck];
        this.spread = spread;
        this.onComplete = onComplete;
        this.isAnimating = false;
        this.washAnimationType = 0;

        this.modal = null;
        this.visualDeckContainer = null;
        this.cutBtn = null;
        this.washBtn = null;
        this.dealBtn = null;

        this.boundCutHandler = this.handleCutClick.bind(this);
        this.boundWashHandler = this.handleWashClick.bind(this);
        this.boundDealHandler = this.handleDealClick.bind(this);
        this.boundCancelHandler = this.handleCancelClick.bind(this);
    }

    start() {
        this._createModal();
        this.addEventListeners();
        this.showModal();
        this.createVisualDeck();
    }

    cleanup() {
        this.removeEventListeners();
        this.hideModal();
        if (typeof this.onComplete === 'function') {
            this.onComplete();
        }
    }

    _createModal() {
        const modalContainer = document.createElement('div');
        modalContainer.id = 'shuffle-zone-modal';
        modalContainer.className = 'modal-container';

        modalContainer.innerHTML = `
            <div class="shuffle-zone-content">
                <button class="close-modal" id="cancel-shuffle-btn" title="Cancel and return to setup">×</button>
                <div id="visual-deck-container"></div>
                <div id="shuffle-controls">
                    <button id="cut-deck-btn" class="shuffle-btn" title="Performs a single, precise cut on the deck.">Cut</button>
                    <button id="wash-deck-btn" class="shuffle-btn" title="Significantly randomizes the entire deck order.">Shuffle Again</button>
                    <button id="begin-reading-btn" class="glowing-btn" title="Deals the cards into the selected spread.">Begin Reading</button>
                </div>
            </div>
        `;

        document.body.appendChild(modalContainer);

        this.modal = modalContainer;
        this.visualDeckContainer = this.modal.querySelector('#visual-deck-container');
        this.cutBtn = this.modal.querySelector('#cut-deck-btn');
        this.washBtn = this.modal.querySelector('#wash-deck-btn');
        this.dealBtn = this.modal.querySelector('#begin-reading-btn');
        this.cancelBtn = this.modal.querySelector('#cancel-shuffle-btn'); 
    }

    addEventListeners() {
        this.cutBtn.addEventListener('click', this.boundCutHandler);
        this.washBtn.addEventListener('click', this.boundWashHandler);
        this.dealBtn.addEventListener('click', this.boundDealHandler);
        this.cancelBtn.addEventListener('click', this.boundCancelHandler); 
    }

    removeEventListeners() {
        this.cutBtn.removeEventListener('click', this.boundCutHandler);
        this.washBtn.removeEventListener('click', this.boundWashHandler);
        this.dealBtn.removeEventListener('click', this.boundDealHandler);
        this.cancelBtn.removeEventListener('click', this.boundCancelHandler); 
    }

    createVisualDeck() {
        this.visualDeckContainer.innerHTML = '<div class="visual-deck"></div>';
    }

    showModal() {
    }

    hideModal() {
        if (this.modal) {
            this.modal.classList.add('hidden');
            setTimeout(() => {
                if (this.modal && this.modal.parentNode) {
                    this.modal.parentNode.removeChild(this.modal);
                }
                this.modal = null;
            }, 300);
        }
    }

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

    handleCancelClick() {
        window.location.hash = '#reading-room';
        this.cleanup();
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
        }, {
            once: true
        });
    }

    animateCascade() {
        this.isAnimating = true;
        const mainDeck = this.visualDeckContainer.querySelector('.visual-deck');
        mainDeck.style.opacity = '0';
        const cardCount = 7;
        const cards = [];
        const currentThemeClass = document.body.className.match(/card-back-theme-\w+/);
        let cardBackStyle = {
            backgroundColor: 'var(--primary-purple)',
            border: '2px solid var(--secondary-purple)'
        };
        if (currentThemeClass) {
            const themeStyle = getComputedStyle(document.querySelector(`.${currentThemeClass[0]} .visual-deck`));
            cardBackStyle = {
                backgroundImage: themeStyle.backgroundImage,
                border: 'none'
            };
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
        const mainDeck = this.visualDeckContainer.querySelector('.visual-deck');
        mainDeck.style.opacity = '0';
        const cardCount = 7;
        const fanAngle = 90;
        const cards = [];
        const currentThemeClass = document.body.className.match(/card-back-theme-\w+/);
        let cardBackStyle = {
            backgroundColor: 'var(--primary-purple)',
            border: '2px solid var(--secondary-purple)'
        };
        if (currentThemeClass) {
            const themeStyle = getComputedStyle(document.querySelector(`.${currentThemeClass[0]} .visual-deck`));
            cardBackStyle = {
                backgroundImage: themeStyle.backgroundImage,
                border: 'none'
            };
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

        const reversedCheckbox = document.getElementById('reversed-cards-checkbox');
        const includeReversed = reversedCheckbox ? reversedCheckbox.checked : false;
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
                completedAnimations++;
                if (completedAnimations === totalAnimations) {
                    this.cleanup();
                }
                return;
            };

            const endRect = placeholder.getBoundingClientRect();
            
            // Use global helper to get the correct image path
            const imgSrc = window.getCardImage(cardData.id, window.currentVisualDeck);

            const finalCardWrapper = document.createElement('div');
            finalCardWrapper.innerHTML = `
                <div class="card-container">
                    <div class="tarot-card">
                        <div class="card-face card-back"></div>
                        <div class="card-face card-front">
                            <img src="${imgSrc}" alt="${cardData.name}" class="${cardData.isReversed ? 'reversed' : ''}" data-card-id="${cardData.id}">
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
                    finalCardWrapper.style.transform = '';
                });
            }, 100 * index);

            finalCardWrapper.addEventListener('transitionend', () => {
                const placeholderCard = placeholder.querySelector('.card-placeholder');
                const newCardContainer = finalCardWrapper.querySelector('.card-container');
                
                if (placeholderCard && newCardContainer) {
                    placeholderCard.replaceWith(newCardContainer);
                } else {
                    placeholder.innerHTML = finalCardWrapper.innerHTML;
                }
                
                placeholder.querySelector('.card-container').addEventListener('click', (e) => e.currentTarget.classList.add('flipped'), {
                    once: true
                });
                placeholder.querySelector('.card-front').addEventListener('click', () => showCardModal(cardData));
                
                finalCardWrapper.remove();

                completedAnimations++;
                if (completedAnimations === totalAnimations) {
                    document.getElementById('reveal-all-container').classList.remove('hidden');
                    this.cleanup();
                }
            }, {
                once: true
            });
        });
    }
}