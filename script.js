const cellElements = document.querySelector('[data-cell]');

let isCircleTurn;

const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd);
};

const swapTurns = () => {

}

const handleClick = (e) => {
    //Colocar a marca (X ou Circle)
    const cell = e.target
    const classToAdd = isCircleTurn ? "circle" : "x";

    placeMarl(cell,classToAdd)

    //Verificar por vitória

    //Verificar por empate

    //Mudar o símbolo
    sw
};

for (const cell of cellElements) {
    cell.addEventListener('click', handleClick, {once: true});
}