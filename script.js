const remake = document.querySelector('.remake');
const inputRows = document.querySelector('input');
const reset = document.querySelector('.reset');
let numOfBlocks = inputRows.value; 

reset.addEventListener('click', function() {
    deleteAll();
    inputRows.value = 0;
    makeRows(inputRows.value);
});

remake.addEventListener('click', function() {
    deleteAll();
    makeRows(inputRows.value);
});

function makeRows(numOfBlocks) {
    for (i = 0; i < numOfBlocks; i++) {
        const container = document.createElement('div');
        container.classList.add("container");
        document.body.appendChild(container);
    for (j = 0; j < numOfBlocks; j++) {
        const block = document.createElement(`div`);
        block.classList.add("block");
        block.textContent = "";
        block.addEventListener("mouseenter", function() {
            block.classList.add('active')
        })
        container.appendChild(block);
    }
}
};

function deleteAll() {
    const containers = document.querySelectorAll('.container');
    containers.forEach(Element => Element.remove());
};



/* function already applied to reset button
function reset() {
    const containers = document.querySelectorAll('.container');
    containers.forEach(Element => Element.remove());
    console.log(containers);
}*/
