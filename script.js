const container = document.querySelector('.container');

function changeColor(evt) {
    evt.target.className = 'fill';
}

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        cell.addEventListener('mouseover', changeColor);
        container.appendChild(cell);
    };
};


makeRows(16, 16);