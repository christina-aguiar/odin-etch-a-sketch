const remake = document.querySelector('.remake');
const inputRows = document.querySelector('input');
const reset = document.querySelector('.reset');
const container = document.querySelector('.container')
let numOfBlocks = inputRows.value;

reset.addEventListener('click', function () {
    deleteAll();
    inputRows.value = 0;
    makeRows(inputRows.value);
});

remake.addEventListener('click', function () {
    deleteAll();
    makeRows(inputRows.value);
});

function makeRows(numOfBlocks) {
    for (i = 0; i < numOfBlocks; i++) {
        const row = document.createElement('div');
        row.classList.add("row");
        container.appendChild(row);
        for (j = 0; j < numOfBlocks; j++) {
            const block = document.createElement(`div`);
            block.classList.add("block");
            block.textContent = "";
            block.addEventListener("mouseenter", function () {
                block.classList.add('active')
            })
            row.appendChild(block);
        }
    }
};

function deleteAll() {
    const rows = document.querySelectorAll('.row');
    rows.forEach(Element => Element.remove());
};



/* function already applied to reset button
function reset() {
    const containers = document.querySelectorAll('.container');
    containers.forEach(Element => Element.remove());
    console.log(containers);
}*/
