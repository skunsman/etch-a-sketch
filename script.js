const container = document.querySelector('.container');
const resetButton = document.querySelector('#reset');
const changeGridButton = document.querySelector('#change-grid');

resetButton.addEventListener('click', resetGrid);
changeGridButton.addEventListener('click', changeGridSize);


function resetGrid(evt) {
    const cells = container.querySelectorAll('div.fill');
    cells.forEach(cell => {
        cell.classList.remove('fill');
    });

    makeRows(16, 16);
}


function changeGridSize(evt) {
    let gridSize = 101;

    while (gridSize > 100) {
        gridSize = Number(prompt('Select a size 1-100', 16));
        if (gridSize === 0)
            return;
        if (!gridSize || gridSize <= 0)
            gridSize = 101;
    }

    console.log(gridSize);
    makeRows(gridSize, gridSize);
}


function changeColor(evt) {
    evt.target.classList.add('fill');
}


function makeRows(rows, cols) {
    container.innerHTML = '';

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        cell.addEventListener('mouseover', changeColor);
        container.appendChild(cell);
    };
};


makeRows(16, 16);