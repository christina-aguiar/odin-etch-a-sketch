const remake = document.querySelector('.remake');
const inputColumns = document.querySelector('.numOfColumns');
const inputRows = document.querySelector('.numOfRows');
const container = document.querySelector('.container')
let numOfColumns = inputColumns.value;
let numOfRows = inputRows.value;


remake.addEventListener('click', function () {
    deleteAll();
    makeRows(inputColumns.value, inputRows.value);
});

function makeRows(numOfColumns, numOfRows) {
    if (numOfColumns < 101 ) {
    for (i = 0; i < numOfColumns; i++) {
        const column = document.createElement('div');
        column.classList.add("column");
        column.classList.add('block');
        container.appendChild(column);
        for (j = 0; j < numOfRows; j++) {
            const row = document.createElement(`div`);
            row.classList.add("block");
            row.textContent = "";
            row.addEventListener("mouseenter", function () {
                row.classList.add('active')
            })
            column.appendChild(row);
        }
    }
    }
    else {
        alert('to avoid performance issues, choose a number below 100')
    }
};

function deleteAll() {
    const columns = document.querySelectorAll('.column');
    columns.forEach(Element => Element.remove());
};



/* function already applied to reset button
function reset() {
    const containers = document.querySelectorAll('.container');
    containers.forEach(Element => Element.remove());
    console.log(containers);
}*/
