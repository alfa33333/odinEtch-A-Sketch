const container = document.querySelector('#container');
const containerStyle = getComputedStyle(container);
const containerWidth = parseInt(containerStyle.width);
const resetButton = document.querySelector('#resetbutton');

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

function setColour (event) {
    event.target.style.backgroundColor = 'black';
}

function createGrid(container, numberCardsRow) {
    for (let i = 0; i < numberCardsRow*numberCardsRow; i++) {
        createCard(container, numberCardsRow);
    }
}

function addCardListeners(container){
    let children = container.childNodes;
    children.forEach(element => {
    element.addEventListener('mouseover', setColour);
    });
}

function removeCardListeners(container){
    let children = container.childNodes;
    children.forEach(element => {
    element.removeEventListener('mouseover', setColour);
    });
}

function resetGrid(container) {
    let newGridSize = prompt('Enter new grid size: ', 16);
    removeCardListeners(container)

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

}

let numberCardsRow = 16;
createGrid(container, numberCardsRow);

addCardListeners(container);    




resetButton.addEventListener('click', function() {
    resetGrid(container);
});