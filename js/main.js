/*
===================================================================
 main.js (Version 4.2: Fixed Missing Functions)
===================================================================
*/

// -----------------------------------------------------------------
// |          0. GLOBAL HELPERS (Exposed for Animation)            |
// -----------------------------------------------------------------

window.currentVisualDeck = 'rws'; // Default visual deck

window.deckProfiles = {
    'rws': { 
        path: 'cards', 
        ext: 'jpg', 
        type: 'standard' 
    },
    'thoth': { 
        path: 'thothcards', 
        ext: 'png', 
        type: 'thoth', 
        prefix: 'Thot',
        suitMap: { 'w': 'W', 'c': 'C', 's': 'S', 'p': 'D' }
    },
    'marseille': { 
        path: 'frenchcards', 
        ext: 'png', 
        type: 'french', 
        prefix: 'MaNC'
    },
    'urban': { 
        path: 'urbancards', 
        ext: 'png', 
        type: 'thoth', 
        prefix: 'UrbT',
        suitMap: { 'w': 'W', 'c': 'C', 's': 'S', 'p': 'D' }
    },
    'renaissance': { 
        path: 'rencards', 
        ext: 'png', 
        type: 'renaissance', 
        prefix: 'Rena'
    },
    'italian': { 
        path: 'italiancards', 
        ext: 'png', 
        type: 'italian', 
        prefix: 'AncI'
    },
    'learning': { 
        path: 'learndeck', 
        ext: 'png', 
        type: 'learning', 
        prefix: 'Lear'
    }
};

window.getCardImage = function(cardId, deckKey, size = 'small') {
    // Fallback to RWS if deckKey is undefined or invalid
    const profile = window.deckProfiles[deckKey] || window.deckProfiles['rws'];
    
    // LOGIC CHANGE: Determine path based on size request
    // If size is 'small', we look in the /small/ subdirectory.
    // If 'large' (or anything else), we look in the root deck folder.
    let basePath = `img/${profile.path}/`;
    if (size === 'small') {
        basePath = `img/${profile.path}/small/`;
    }
    
    // Parse internal ID (e.g., "w14" or "m00")
    const type = cardId.charAt(0); // 'm', 'w', 'c', 's', 'p'
    const numStr = cardId.substring(1);
    const num = parseInt(numStr, 10);

    let filename = "";

    // --- STANDARD RWS ---
    if (profile.type === 'standard') {
        return `${basePath}${cardId}.${profile.ext}`;
    }

    // --- THOTH & URBAN STYLE ---
    if (profile.type === 'thoth') {
        let suitChar = "";
        let rankStr = "";
        if (type === 'm') {
            suitChar = "T"; 
            rankStr = numStr; 
        } else {
            const suitMap = profile.suitMap || { 'w': 'W', 'c': 'C', 's': 'S', 'p': 'D' };
            suitChar = suitMap[type];
            if (num === 1) rankStr = "0A"; 
            else if (num <= 10) rankStr = numStr; 
            else if (num === 11) rankStr = "PS"; 
            else if (num === 12) rankStr = "PN"; 
            else if (num === 13) rankStr = "QU"; 
            else if (num === 14) rankStr = "KN"; 
        }
        filename = `${profile.prefix}-${suitChar}-${rankStr}.${profile.ext}`;
    }

    // --- FRENCH / ITALIAN STYLE ---
    if (profile.type === 'french' || profile.type === 'italian') {
        let suitChar = "";
        let rankStr = numStr; 
        if (type === 'm') {
            suitChar = "T";
        } else {
            const suitMap = { 'w': 'B', 'c': 'C', 's': 'S', 'p': 'D' };
            suitChar = suitMap[type];
            if (num <= 10) rankStr = numStr;
            else if (num === 11) rankStr = "J1"; 
            else if (num === 12) rankStr = "J2"; 
            else if (num === 13) rankStr = "QU"; 
            else if (num === 14) rankStr = "KI"; 
        }
        filename = `${profile.prefix}-${suitChar}-${rankStr}.${profile.ext}`;
    }

    // --- RENAISSANCE STYLE ---
    if (profile.type === 'renaissance') {
        let suitChar = "";
        let rankStr = numStr;
        if (type === 'm') {
            suitChar = "T";
        } else {
            suitChar = type.toUpperCase(); 
            if (num <= 10) rankStr = numStr;
            else if (num === 11) rankStr = "JA"; 
            else if (num === 12) rankStr = "KN"; 
            else if (num === 13) rankStr = "QU"; 
            else if (num === 14) rankStr = "KI"; 
            if (num === 1) rankStr = "0A";
        }
        filename = `${profile.prefix}-${suitChar}-${rankStr}.${profile.ext}`;
    }
    
    // --- LEARNING STYLE ---
    if (profile.type === 'learning') {
        let suitChar = "";
        let rankStr = numStr;
        if (type === 'm') {
            suitChar = "T";
        } else {
            suitChar = type.toUpperCase();
            if (num === 1) rankStr = "0A";
            else if (num <= 10) rankStr = numStr;
            else if (num === 11) rankStr = "J1"; 
            else if (num === 12) rankStr = "J2"; 
            else if (num === 13) rankStr = "QU"; 
            else if (num === 14) rankStr = "KI"; 
        }
        filename = `${profile.prefix}-${suitChar}-${rankStr}.${profile.ext}`;
    }

    return basePath + filename;
};

document.addEventListener('DOMContentLoaded', () => {

    // -----------------------------------------------------------------
    // |                1. APP-WIDE STATE & CONSTANTS                  |
    // -----------------------------------------------------------------

    const appContainer = document.getElementById('app-container');
    let spreadCreatorInstance = null;
    let currentSystem = 'rws'; 

    // -----------------------------------------------------------------
    // |                   2. CORE HELPER FUNCTIONS                    |
    // -----------------------------------------------------------------

    function updateCardImages() {
        const allCardImages = document.querySelectorAll('.tarot-card .card-front img');
        allCardImages.forEach(img => {
            const cardId = img.dataset.cardId;
            if (cardId) {
                img.src = window.getCardImage(cardId, window.currentVisualDeck);
            }
        });
        const dailyImg = document.querySelector('#card-of-the-day-container img');
        if (dailyImg && dailyImg.dataset.cardId) {
            dailyImg.src = window.getCardImage(dailyImg.dataset.cardId, window.currentVisualDeck);
        }
    }

    async function loadAllSpreads() {
        let availableSpreads = {};
        try {
            const manifestResponse = await fetch('spreads/manifest.json');
            if (manifestResponse.ok) {
                const manifest = await manifestResponse.json();
                const spreadFetchPromises = manifest.map(fileName =>
                    fetch(`spreads/${fileName}`).then(res => res.ok ? res.json() : null)
                );
                const loadedDefaultSpreads = await Promise.all(spreadFetchPromises);
                loadedDefaultSpreads.forEach(spread => {
                    if (spread && spread.id) availableSpreads[spread.id] = spread;
                });
            }
        } catch (error) { console.error("Spread load error:", error); }

        try {
            const customSpreads = JSON.parse(localStorage.getItem('customTarotSpreads') || '[]');
            customSpreads.forEach(spread => {
                if (spread && spread.id) availableSpreads[spread.id] = spread;
            });
        } catch (error) { console.error("Custom spread load error:", error); }
        return availableSpreads;
    }

    async function loadDeck() {
        const data = (typeof tarotDeck !== 'undefined') ? tarotDeck : 
                     (typeof tarotDeckData !== 'undefined') ? tarotDeckData : [];
        if (data.length > 0) return data;
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

        const systemData = card.meanings[currentSystem] || card.meanings['rws'];
        const meta = card.meta || {};

        let lightTitle = "Upright", shadowTitle = "Reversed";
        if (currentSystem === 'thoth') { lightTitle = "Balanced Energy"; shadowTitle = "Ill-Dignified / Shadow"; }
        else if (currentSystem === 'anima') { lightTitle = "Natural Instinct"; shadowTitle = "Unbalanced Instinct"; }
        else if (currentSystem === 'marseille') { lightTitle = "Flowing"; shadowTitle = "Blocked"; }

        let metaHTML = `<div class="card-meta-tags" style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:1rem; font-size:0.85rem; color:var(--accent-gold);">`;
        if (meta.astrology) metaHTML += `<span style="border:1px solid var(--border-light); padding:2px 8px; border-radius:10px;">🪐 ${meta.astrology}</span>`;
        if (meta.element) metaHTML += `<span style="border:1px solid var(--border-light); padding:2px 8px; border-radius:10px;">element: ${meta.element}</span>`;
        if (currentSystem === 'thoth' && meta.hebrew_letter) metaHTML += `<span style="border:1px solid var(--border-light); padding:2px 8px; border-radius:10px;">🔠 ${meta.hebrew_letter}</span>`;
        if (currentSystem === 'anima' && systemData.animal) metaHTML += `<span style="border:1px solid var(--border-light); padding:2px 8px; border-radius:10px;">🐾 ${systemData.animal}</span>`;
        metaHTML += `</div>`;

        const lightClass = !card.isReversed ? 'highlight' : 'dimmed';
        const shadowClass = card.isReversed ? 'highlight' : 'dimmed';

        const lightText = systemData.light || systemData.upright || systemData.general;
        const shadowText = systemData.shadow || systemData.reversed || "The energy of this card is blocked or manifesting in an unbalanced way.";
        const coreText = systemData.general || "";
        
        const questions = systemData.questions || ["How does this energy manifest in my life?"];
        const questionsHTML = `<ul>${questions.map(q => `<li>${q}</li>`).join('')}</ul>`;
        const keywords = systemData.keywords || [];
        const keywordsHTML = `<p><strong>Keywords:</strong> ${createDictionaryLinks(keywords.join(', '))}</p>`;

        const imageSrc = window.getCardImage(card.id, window.currentVisualDeck);

        content.innerHTML = `
            <div style="text-align:center;">
                <img src="${imageSrc}" alt="${card.name}" class="${card.isReversed ? 'reversed' : ''}" style="max-width:200px; border-radius:8px; box-shadow:0 0 15px rgba(0,0,0,0.5);">
                <h3 style="font-family:'Cormorant Garamond'; font-size:1.8rem; margin:1rem 0;">${card.name}</h3>
                <div style="font-style:italic; margin-bottom:1rem; opacity:0.8;">${card.arcana} • ${card.suit}</div>
                ${metaHTML}
            </div>
            <div class="modal-text-content">
                <div class="meaning-section" style="margin-bottom: 1rem; border-bottom: 1px solid var(--border-light); padding-bottom: 1rem;">
                    <h4>Core Essence</h4>
                    <p>${createDictionaryLinks(coreText)}</p>
                </div>
                <div class="meaning-section ${lightClass}">
                    <h4>${lightTitle}</h4>
                    <p>${createDictionaryLinks(lightText)}</p>
                </div>
                <div class="meaning-section ${shadowClass}">
                    <h4>${shadowTitle}</h4>
                    <p>${createDictionaryLinks(shadowText)}</p>
                </div>
                <div class="meaning-section" style="margin-top:1rem; background:rgba(255,255,255,0.05);">
                    <h4>Reflective Questions</h4>
                    ${questionsHTML}
                </div>
                <div class="meaning-section" style="margin-top:1rem; font-size: 0.9em; opacity: 0.9;">
                    ${keywordsHTML}
                </div>
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
            const later = () => { clearTimeout(timeout); func(...args); };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function performShuffle(deck) {
        const methodRadio = document.querySelector('input[name="shuffle-method"]:checked');
        const shuffleInput = document.getElementById('shuffle-input');
        const method = methodRadio ? methodRadio.value : 'timestamp';
        let value = shuffleInput ? shuffleInput.value : '';
        let seed;
        if (method === 'text') {
            seed = value.trim() ? value.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) : new Date().getTime();
            if(!value.trim()) value = "N/A (Timestamp used)";
        } else if (method === 'number' && value.trim() && !isNaN(value)) {
            seed = parseInt(value, 10);
        } else {
            seed = new Date().getTime();
            value = "N/A (Timestamp used)";
        }
        const finalSeed = Math.floor(seed * Math.PI);
        const shuffleRandom = window.createPRNG(finalSeed);
        let shuffledDeck = [...deck];
        for (let i = shuffledDeck.length - 1; i > 0; i--) {
            const j = Math.floor(shuffleRandom() * (i + 1));
            [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
        }
        return { seed: finalSeed, shuffledDeck };
    }

    // -----------------------------------------------------------------
    // |                3. VIEW INITIALIZATION LOGIC                   |
    // -----------------------------------------------------------------

    function initHomeView() {
        const cardContainer = document.getElementById('card-of-the-day-container');
        const learnMoreContainer = document.getElementById('learn-more-container');
        const learnMoreBtn = document.getElementById('learn-more-btn');
        const meaningText = document.getElementById('card-of-the-day-meaning');

        if (!cardContainer || !learnMoreContainer || !learnMoreBtn || !meaningText) return;

        async function drawCardOfTheDay() {
            const deck = await loadDeck();
            if (deck.length === 0) return;

            const today = new Date();
            const dayIndex = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
            const cardIndex = (dayIndex + 5) % deck.length;
            const card = { ...deck[cardIndex], isReversed: false };

            const imgSrc = window.getCardImage(card.id, window.currentVisualDeck);

            cardContainer.innerHTML = `
                <div class="card-container">
                    <div class="tarot-card">
                        <div class="card-face card-back"></div>
                        <div class="card-face card-front">
                            <img src="${imgSrc}" alt="${card.name}" data-card-id="${card.id}">
                        </div>
                    </div>
                </div>`;

            const cardElement = cardContainer.querySelector('.card-container');
            cardElement.addEventListener('click', () => {
                if (cardElement.classList.contains('flipped')) return;
                cardElement.classList.add('flipped');
                const meaning = card.meanings.rws.keywords[0];
                meaningText.textContent = `Today's theme: ${meaning}.`;
                learnMoreContainer.classList.add('visible');
            }, { once: true });

            learnMoreBtn.addEventListener('click', () => openModal(card));
        }

        drawCardOfTheDay();
    }

    function initReadingRoomView(availableSpreads) {
        const settingsKey = 'openTarotSettings';
        let selectedSpreadKey = Object.keys(availableSpreads)[0] || null;

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
            canvasHint: document.querySelector('.canvas-hint'),
            systemSelect: document.getElementById('system-selection'),
            deckSelect: document.getElementById('deck-selection'),
            systemDesc: document.getElementById('system-desc')
        };

        window.openModal = openModal;
        const canvasState = { x: 0, y: 0, scale: 1 };
        let isPanning = false;
        let startPoint = { x: 0, y: 0 };
        let lastPanPosition = { x: 0, y: 0 };
        let isPinching = false;
        let initialPinchDistance = 0;
        let hintDismissTimer = null;
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

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
            if (!spreadsCollection || !spreadsCollection[selectedSpreadKey]) return;
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
            if (settings.spread && availableSpreads[settings.spread]) selectedSpreadKey = settings.spread;
            if (ui.reversedCardsCheckbox) ui.reversedCardsCheckbox.checked = settings.reversed ?? true;
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
                case 'text': seedExplanationHTML = `<p>Each character you type is converted to a numeric code...</p>`; break;
                case 'number': seedExplanationHTML = '<p>The number you enter is used directly as the base for the seed.</p>'; break;
                case 'timestamp': seedExplanationHTML = '<p>The current time is used as the base number.</p>'; break;
            }
            const fullExplanation = `
                ${seedExplanationHTML}
                <p>This base number is then multiplied by Pi to create the final unique seed.</p>
                <hr><h4>Actions</h4><p>Cut: Single precise cut. Wash: Randomize deck.</p>
            `;
            ui.shuffleExplanation.innerHTML = fullExplanation;
        }

        function dismissHintOnTap() {
            const hint = ui.canvasHint;
            if (hint && !hint.classList.contains('hidden')) {
                hint.classList.add('hidden');
                if (hintDismissTimer) clearTimeout(hintDismissTimer);
                ui.readingCanvas.removeEventListener('pointerdown', dismissHintOnTap, true);
            }
        }

        function updateSystemDescription(sys) {
            const descriptions = {
                rws: "The classic 1910 system focused on narrative scenes and duality.",
                thoth: "Crowley's esoteric system focusing on Kabbalah, astrology, and high energy.",
                marseille: "The ancient French tradition focusing on visual patterns and distinct pip cards.",
                anima: "A nature-based interpretation connecting tarot archetypes to animal instincts."
            };
            if (ui.systemDesc) ui.systemDesc.textContent = descriptions[sys];
        }

        // --- System & Deck Selectors ---
        if (ui.systemSelect) {
            ui.systemSelect.value = currentSystem;
            ui.systemSelect.addEventListener('change', (e) => {
                currentSystem = e.target.value;
                updateSystemDescription(currentSystem);
                localStorage.setItem('openTarotSystem', currentSystem);
            });
        }

        if (ui.deckSelect) {
            ui.deckSelect.value = window.currentVisualDeck;
            ui.deckSelect.addEventListener('change', (e) => {
                window.currentVisualDeck = e.target.value;
                if (window.currentVisualDeck === 'thoth' || window.currentVisualDeck === 'urban') {
                    if (currentSystem !== 'thoth') {
                        currentSystem = 'thoth';
                        ui.systemSelect.value = 'thoth';
                        updateSystemDescription('thoth');
                    }
                } else if (window.currentVisualDeck === 'marseille' || window.currentVisualDeck === 'italian') {
                    if (currentSystem !== 'marseille') {
                        currentSystem = 'marseille';
                        ui.systemSelect.value = 'marseille';
                        updateSystemDescription('marseille');
                    }
                }
                localStorage.setItem('openTarotDeck', window.currentVisualDeck);
                localStorage.setItem('openTarotSystem', currentSystem);
                updateCardImages();
            });
        }

        // --- Event Handlers ---
        function onPointerDown(e) {
            if (e.target.closest('.tarot-card')) return;
            e.preventDefault();
            if (e.touches) {
                if (e.touches.length === 1) { isPanning = true; isPinching = false; const point = e.touches[0]; startPoint = { x: point.clientX, y: point.clientY }; lastPanPosition = { x: canvasState.x, y: canvasState.y }; } 
                else if (e.touches.length === 2) { isPinching = true; isPanning = false; initialPinchDistance = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY); }
            } else { isPanning = true; const point = e; startPoint = { x: point.clientX, y: point.clientY }; lastPanPosition = { x: canvasState.x, y: canvasState.y }; }
        }
        function onPointerMove(e) {
            if (!isPanning && !isPinching) return;
            e.preventDefault();
            if (e.touches) {
                if (e.touches.length === 1 && isPanning) { const point = e.touches[0]; const dx = point.clientX - startPoint.x; const dy = point.clientY - startPoint.y; canvasState.x = lastPanPosition.x + dx; canvasState.y = lastPanPosition.y + dy; applyTransform(); }
                else if (e.touches.length === 2 && isPinching) { 
                    const newPinchDistance = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
                    const zoomFactor = newPinchDistance / initialPinchDistance;
                    const oldScale = canvasState.scale;
                    let newScale = oldScale * zoomFactor;
                    newScale = Math.max(0.1, Math.min(newScale, 10));
                    const midpointX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
                    const midpointY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
                    const canvasRect = ui.readingCanvas.getBoundingClientRect();
                    const mouseX = midpointX - canvasRect.left;
                    const mouseY = midpointY - canvasRect.top;
                    const worldX = (mouseX - canvasState.x) / oldScale;
                    const worldY = (mouseY - canvasState.y) / oldScale;
                    canvasState.x = mouseX - (worldX * newScale);
                    canvasState.y = mouseY - (worldY * newScale);
                    canvasState.scale = newScale;
                    applyTransform();
                    initialPinchDistance = newPinchDistance;
                }
            } else if (isPanning) { const point = e; const dx = point.clientX - startPoint.x; const dy = point.clientY - startPoint.y; canvasState.x = lastPanPosition.x + dx; canvasState.y = lastPanPosition.y + dy; applyTransform(); }
        }
        function onPointerUp() { isPanning = false; isPinching = false; }
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

        // Attach Events
        ui.readingCanvas.addEventListener("mousedown", onPointerDown);
        ui.readingCanvas.addEventListener("touchstart", onPointerDown, { passive: false });
        document.addEventListener("mouseup", onPointerUp);
        document.addEventListener("touchend", onPointerUp);
        document.addEventListener("mouseleave", onPointerUp);
        document.addEventListener("mousemove", onPointerMove);
        document.addEventListener("touchmove", onPointerMove, { passive: false });
        ui.readingCanvas.addEventListener("wheel", onWheel, { passive: false });
        if (isTouchDevice) ui.readingCanvas.addEventListener('pointerdown', dismissHintOnTap, true);
        
        // UI Elements Setup
        if (ui.mobileControlsTrigger) ui.mobileControlsTrigger.addEventListener('click', () => ui.controlPanel.classList.add('is-open'));
        if (ui.drawerCloseBtn) ui.drawerCloseBtn.addEventListener('click', () => ui.controlPanel.classList.remove('is-open'));

        Object.keys(availableSpreads).forEach(key => {
            const button = document.createElement('button');
            button.className = 'spread-btn';
            button.dataset.spreadKey = key;
            button.textContent = availableSpreads[key].name;
            ui.spreadSelection.appendChild(button);
        });

        const creatorLink = document.createElement('a');
        creatorLink.href = '#spread-creator';
        creatorLink.className = 'spread-btn';
        creatorLink.textContent = 'Create / Edit Spreads';
        ui.spreadSelection.appendChild(creatorLink);

        ui.spreadSelection.addEventListener('click', (e) => {
            const targetButton = e.target.closest('.spread-btn[data-spread-key]');
            if (targetButton) {
                e.preventDefault();
                selectedSpreadKey = targetButton.dataset.spreadKey;
                document.querySelectorAll('.spread-btn').forEach(btn => btn.classList.toggle('selected', btn.dataset.spreadKey === selectedSpreadKey));
                ui.spreadInfoText.textContent = availableSpreads[selectedSpreadKey].description;
                drawSpreadBlueprint(availableSpreads);
                autoFitSpread(availableSpreads);
                saveSettings();
            }
        });

        ui.dealBtn.addEventListener('click', () => {
            window.location.hash = `#reading-room?deal=true&spread=${selectedSpreadKey}`;
        });

        // Shuffle / Sliders / Actions
        ui.shuffleMethodsContainer.addEventListener('change', (e) => {
            if (e.target.name === 'shuffle-method') {
                const method = e.target.value;
                const isTimestamp = method === 'timestamp';
                ui.shuffleInput.disabled = isTimestamp;
                ui.generateBtn.style.display = method === 'number' ? 'inline-block' : 'none';
                ui.shuffleInput.placeholder = isTimestamp ? 'Timestamp will be used automatically.' : `Enter a ${method} here...`;
                if (isTimestamp) ui.shuffleInput.value = ''; else ui.shuffleInput.value = '';
                updateShuffleExplanation();
                saveSettings();
            }
        });
        ui.generateBtn.addEventListener('click', () => { ui.shuffleInput.value = Math.floor(Math.random() * 900000) + 100000; });
        ui.shuffleInput.addEventListener('input', updateShuffleExplanation);
        ui.sizeSlider.addEventListener('input', (e) => {
            const newPercentage = parseFloat(e.target.value);
            const currentScale = canvasState.scale;
            const baseScale = currentScale / (ui.sizeSlider.value / 100);
            canvasState.scale = baseScale * (newPercentage / 100);
            applyTransform();
            ui.sliderValue.textContent = `${Math.round(newPercentage)}%`;
        });
        ui.resetSizeBtn.addEventListener('click', () => { autoFitSpread(availableSpreads); });
        ui.readingActionBtn.addEventListener('click', () => { ui.readingCloth.querySelectorAll('.card-container:not(.flipped)').forEach(card => card.classList.add('flipped')); });
        ui.reversedCardsCheckbox.addEventListener('change', saveSettings);
        ui.cardBackSelection.addEventListener('change', (e) => {
            if (e.target.name === 'card-back') {
                const selectedTheme = e.target.value;
                const themePrefix = 'card-back-theme-';
                document.body.classList.forEach(className => { if (className.startsWith(themePrefix)) document.body.classList.remove(className); });
                if (selectedTheme !== 'default') document.body.classList.add(themePrefix + selectedTheme);
                saveSettings();
            }
        });
        ui.clothSelection.addEventListener('change', (e) => {
            if (e.target.name === 'cloth-pattern') {
                const selectedTheme = e.target.value;
                const themePrefix = 'cloth-theme-';
                ui.readingCanvas.classList.forEach(className => { if (className.startsWith(themePrefix)) ui.readingCanvas.classList.remove(className); });
                if (selectedTheme !== 'default') ui.readingCanvas.classList.add(themePrefix + selectedTheme);
                saveSettings();
            }
        });

        // Init Calls
        loadSettings();
        const savedDeck = localStorage.getItem('openTarotDeck');
        if (savedDeck) {
            window.currentVisualDeck = savedDeck;
            if (ui.deckSelect) ui.deckSelect.value = savedDeck;
        }
        document.querySelector(`.spread-btn[data-spread-key="${selectedSpreadKey}"]`)?.classList.add('selected');
        if (availableSpreads[selectedSpreadKey]) ui.spreadInfoText.textContent = availableSpreads[selectedSpreadKey].description;
        drawSpreadBlueprint(availableSpreads);
        updateShuffleExplanation();
        autoFitSpread(availableSpreads);
        const initialBack = document.querySelector('input[name="card-back"]:checked');
        if (initialBack && initialBack.value !== 'default') document.body.classList.add('card-back-theme-' + initialBack.value);
        const initialCloth = document.querySelector('input[name="cloth-pattern"]:checked');
        if (initialCloth && initialCloth.value !== 'default') ui.readingCanvas.classList.add('cloth-theme-' + initialCloth.value);
        
        // Check for Deal Param
        const dealUrlParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
        if (dealUrlParams.get('deal') === 'true') {
             const spreadToDealKey = dealUrlParams.get('spread') || Object.keys(availableSpreads)[0];
             selectedSpreadKey = spreadToDealKey;
             history.replaceState(null, '', '#reading-room');
             setTimeout(async () => {
                 const deck = await loadDeck();
                 const { shuffledDeck } = performShuffle(deck);
                 const spread = availableSpreads[selectedSpreadKey];
                 if (!spread) return;
                 const shuffleController = new ShuffleController(shuffledDeck, spread, () => {
                     autoFitSpread(availableSpreads);
                     ui.readingCanvas.classList.remove('blueprint-mode');
                     ui.revealAllContainer.classList.remove('hidden');
                 });
                 ui.readingCanvas.classList.remove('blueprint-mode');
                 if (ui.canvasPlaceholder) ui.canvasPlaceholder.style.display = 'none';
                 if (ui.controlPanel && ui.controlPanel.classList.contains('is-open')) ui.controlPanel.classList.remove('is-open');
                 shuffleController.start();
             }, 50);
        }
    }

    function initGrimoireView(searchTerm = '') {
        const grimoireGrid = document.getElementById('grimoire-grid');
        const searchInput = document.getElementById('grimoire-search');
        const deckSelect = document.getElementById('grimoire-deck-select'); // NEW
        const filterButtons = document.querySelectorAll('.grimoire-filter-btn');
        const resultsCount = document.getElementById('grimoire-results-count');

        if (!grimoireGrid || !searchInput || !resultsCount || !deckSelect) return;

        let currentFilter = 'all';
        let allCards = [];

        // Set the dropdown to match the global state initially
        deckSelect.value = window.currentVisualDeck;

        async function renderCards() {
            if (allCards.length === 0) allCards = await loadDeck();
            if (allCards.length === 0) return;

            const term = searchInput.value.toLowerCase().trim();
            
            // NEW: Get the deck specifically from the Grimoire dropdown
            // This allows browsing decks without changing the global Reading Room setting
            const activeGrimoireDeck = deckSelect.value;

            const filteredCards = allCards.filter(card => {
                const rwsKeys = card.meanings.rws.keywords.join(' ').toLowerCase();
                const thothKeys = card.meanings.thoth.keywords.join(' ').toLowerCase();
                const animaKeys = card.meanings.anima.keywords.join(' ').toLowerCase();
                const combinedText = `${card.name} ${card.suit} ${rwsKeys} ${thothKeys} ${animaKeys}`.toLowerCase();
                const matchesSearch = term === '' || combinedText.includes(term);
                const matchesFilter = currentFilter === 'all' || 
                                      (currentFilter === 'major' && card.arcana === 'Major Arcana') || 
                                      (card.suit.toLowerCase() === currentFilter);
                return matchesSearch && matchesFilter;
            });

            grimoireGrid.innerHTML = '';
            resultsCount.textContent = `Showing ${filteredCards.length} of ${allCards.length} cards.`;

            if (filteredCards.length === 0) {
                grimoireGrid.innerHTML = '<p class="no-results">No cards match your criteria.</p>';
                return;
            }

            const fragment = document.createDocumentFragment();
            filteredCards.forEach(card => {
                const cardEl = document.createElement('div');
                cardEl.className = 'grimoire-card-container';
                
                // NEW: Use the activeGrimoireDeck and enforce 'small' size for performance
                const imgSrc = window.getCardImage(card.id, activeGrimoireDeck, 'small');
                
                cardEl.innerHTML = `
                    <img src="${imgSrc}" alt="${card.name}" loading="lazy">
                    <span class="grimoire-card-name">${card.name}</span>`;
                
                // When clicked, open modal. Note: openModal uses the GLOBAL deck setting. 
                // If you want the modal to also match the grimoire selection, we'd need to pass the deck to openModal.
                // For now, it will open the card details. 
                // To make the modal image match the grimoire selection, we can temporarily update the global variable
                // or update openModal to accept an override. 
                // Let's just update the global variable for consistency in this session.
                cardEl.addEventListener('click', () => {
                     window.currentVisualDeck = activeGrimoireDeck; // Sync global state so modal matches
                     openModal({ ...card, isReversed: false });
                });
                
                fragment.appendChild(cardEl);
            });
            grimoireGrid.appendChild(fragment);
        }

        // Event Listeners
        searchInput.addEventListener('input', debounce(renderCards, 250));
        
        // NEW: Re-render when deck changes
        deckSelect.addEventListener('change', () => {
            renderCards();
        });

        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterButtons.forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');
                currentFilter = e.currentTarget.dataset.filter;
                renderCards();
            });
        });

        if (searchTerm) searchInput.value = searchTerm;
        renderCards();
    }

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
        if (previousPath && routes[previousPath] && routes[previousPath].cleanup) routes[previousPath].cleanup();
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

    const closeModalBtn = document.getElementById('close-modal-btn');
    if (closeModalBtn) closeModalBtn.addEventListener('click', () => { document.getElementById('card-modal')?.classList.add('hidden'); });

    window.addEventListener('hashchange', router);
    router();

    const canvas = document.getElementById('starfield-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let stars = [], shootingStars = [], constellations = [];
        function generateStars() {
            stars = [];
            const starCount = Math.floor((canvas.width * canvas.height) / 4000);
            for (let i = 0; i < starCount; i++) stars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, radius: Math.random() * 1.5, alpha: Math.random(), velocity: (Math.random() - 0.5) / 4 });
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
            let indices = [startIdx], lastIdx = startIdx;
            for (let i = 0; i < numStars - 1; i++) {
                let closest = -1, minDist = 250;
                for (let j = 0; j < stars.length; j++) {
                    if (indices.includes(j)) continue;
                    const dist = Math.hypot(stars[lastIdx].x - stars[j].x, stars[lastIdx].y - stars[j].y);
                    if (dist < minDist) { minDist = dist; closest = j; }
                }
                if (closest !== -1) { indices.push(closest); lastIdx = closest; } else break;
            }
            if (indices.length > 2) constellations.push({ indices, alpha: 0, maxAlpha: Math.random() * 0.2 + 0.3, life: 600, state: 'fading-in' });
        }
        function resetStarfield() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; generateStars(); shootingStars = []; constellations = []; }
        function animateStars() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach(star => {
                star.y += star.velocity;
                if (star.y < 0) star.y = canvas.height; if (star.y > canvas.height) star.y = 0;
                ctx.fillStyle = `rgba(224, 224, 224, ${star.alpha})`;
                ctx.beginPath(); ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2); ctx.fill();
            });
            if (Math.random() < 0.0025 && shootingStars.length < 3) createShootingStar();
            shootingStars = shootingStars.filter(ss => ss.alpha > 0);
            shootingStars.forEach(ss => {
                ss.x += ss.speed * Math.cos(ss.angle); ss.y += ss.speed * Math.sin(ss.angle); ss.alpha -= 1 / ss.life;
                ctx.strokeStyle = `rgba(255, 221, 153, ${ss.alpha})`; ctx.lineWidth = 1.5;
                ctx.beginPath(); ctx.moveTo(ss.x, ss.y); ctx.lineTo(ss.x - ss.len * Math.cos(ss.angle), ss.y - ss.len * Math.sin(ss.angle)); ctx.stroke();
            });
            if (Math.random() < 0.002 && constellations.length < 3) createConstellation();
            constellations = constellations.filter(c => c.life > 0);
            constellations.forEach(c => {
                c.life--;
                if (c.state === 'fading-in') { c.alpha += c.maxAlpha / 180; if (c.alpha >= c.maxAlpha) { c.alpha = c.maxAlpha; c.state = 'visible'; } }
                else if (c.life < 180) { c.state = 'fading-out'; c.alpha -= c.maxAlpha / 180; }
                if (c.alpha > 0) {
                    ctx.strokeStyle = `rgba(100, 150, 255, ${c.alpha})`; ctx.lineWidth = 0.5;
                    ctx.beginPath(); const startPoint = stars[c.indices[0]]; ctx.moveTo(startPoint.x, startPoint.y);
                    for (let i = 1; i < c.indices.length; i++) { const point = stars[c.indices[i]]; ctx.lineTo(point.x, point.y); }
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