
let block;
let container;

function makeRows(numOfBlocks) {
    for (i = 0; i < numOfBlocks; i++) {
        const container = document.createElement('div');
        container.classList.add("container");
        document.body.appendChild(container);
    for (j = 0; j < numOfBlocks; j++) {
        const block = document.createElement(`div`);
        block.classList.add("block");
        block.textContent = "";
        container.appendChild(block);
    }
}
}