const container = document.querySelector('#container');
const containerStyle = getComputedStyle(container);
const containerWidth = parseInt(containerStyle.width);

function createCard(container, numberCardsRow) {
        let cards = document.createElement('div');
        cards.textContent = 'I am a card';
        cards.style.borderColor = 'red';
        cards.style.borderStyle = 'solid';
        cards.style.flexBasis = containerWidth/numberCardsRow + 'px';
        cards.style.height = containerWidth/numberCardsRow + 'px';
        container.appendChild(cards);
}

for (let i = 0; i < 16; i++) {
    createCard(container, 4);
}



