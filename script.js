const container = document.querySelector('#container');
const containerStyle = getComputedStyle(container);
const containerWidth = parseInt(containerStyle.width);

function createCard(container, numberCardsRow) {
        let cards = document.createElement('div');
        let borderWidth = 1;
        let cardSize = containerWidth/numberCardsRow - 2*borderWidth;
        cards.style.borderColor = 'black';
        cards.style.borderStyle = 'solid';
        cards.style.borderWidth = borderWidth + 'px';
        cards.style.flexBasis = cardSize + 'px';
        cards.style.height = cardSize + 'px';
        container.appendChild(cards);
}

let numberCardsRow = 16;
for (let i = 0; i < numberCardsRow*numberCardsRow; i++) {
    createCard(container, numberCardsRow);
}

let children = container.childNodes;
children.forEach(element => {
    element.addEventListener('mouseover', function() {
        element.style.backgroundColor = 'black';
    });
});

