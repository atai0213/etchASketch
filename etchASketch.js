const container = document.querySelector('#container');
let numOfSquares = 256;
let setting = 16;

function gridInitialize() {
    const square = document.createElement('div');
    square.setAttribute('style', 'hohei');
    let squareMeasures = `${960 / setting}px`;
    square.style.height = squareMeasures;
    square.style.width = squareMeasures;
    square.style.flex = '1 0 auto';
    square.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'green';
    });
    container.appendChild(square);
}

for (i = 0; i < 256; i++) {
    gridInitialize();
}

function reset() {
    setting = prompt('Enter the number of squares you want for the new grid:');
    if (setting != null && setting <= 100) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        numOfSquares = setting * setting;
        for (let i = 0; i < numOfSquares; i++) {
            gridInitialize();
        }
    }
}

const button = document.querySelector('button');
button.addEventListener('click', reset);
