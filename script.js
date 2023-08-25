const cellElements = document.querySelector('[data-cell]');

let isCircleTurn;

const handleClick = (e) => {
    //Colocar a marca (X ou Circle)
    const cell = e.target
    const classToAdd = isCircleTurn ? "circle" : "x";

    cell.classList.add(classToAdd);

    

    //Verificar por vitória

    //Verificar por empate

    //Mudar o símbolo
};

for (const cell of cellElements) {
    cell.addEventListener('click', handleClick, {once: true});
}