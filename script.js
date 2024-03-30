const container = document.querySelector('#container');
const containerStyle = getComputedStyle(container);
const containerWidth = parseInt(containerStyle.width);
const resetButton = document.querySelector('#resetbutton');

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }

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
    if (event.target.style.backgroundColor === '') {
        red = getRandomIntInclusive(0, 255);
        green = getRandomIntInclusive(0, 255);
        blue = getRandomIntInclusive(0, 255);
        event.target.style.backgroundColor = 'rgba(' + red + ' ,'+ green +','+ blue + ', 0.1)';
    } else {
        let value = event.target.style.backgroundColor;
        let parts = value.match(/[\d.]+/g);
        let length = parts.length;
        switch (length) {
            case 3:
                break;
            case 4:
                parts[3] = parseFloat(parts[3]) + 0.1;
                event.target.style.backgroundColor = `rgba(${ parts.join(',') })`;
                break;
            default:
                break;
        }       
    }

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
    if (newGridSize > 100) {
        newGridSize = 100;
    }
    removeCardListeners(container)

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    createGrid(container, newGridSize);
    addCardListeners(container);   

}

let numberCardsRow = 16;
createGrid(container, numberCardsRow);

addCardListeners(container);    




resetButton.addEventListener('click', function() {
    resetGrid(container);
});