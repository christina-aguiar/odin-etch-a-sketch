const container = document.querySelector('.container');
let numOfGrids;
function gridMaker(numOfGrids) {
    for (i = 0; i < numOfGrids; i++) {
        const grid = document.createElement(`div`);
        grid.classList.add("grid");
        grid.textContent = "";
        container.appendChild(grid);
    }
}
