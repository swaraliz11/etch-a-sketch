function generateGrid(squares) {
    for (let i = 0; i < squares; i++) {
        for (let j = 0; j < squares; j++) {
            let box = document.createElement("div");
            let boxHeight = (750 / squares).toFixed(2);
            let boxWidth = (1000 / squares).toFixed(2);
            box.style.height = `${boxHeight}px`;
            box.style.width = `${boxWidth}px`;
            box.classList.add("box");
            document.getElementById("container").appendChild(box);
        }
    }
}

function changeColor(div) {
    div.style.backgroundColor = "#440D0F";
}

function hoverEffect() {
    let boxes = document.getElementsByClassName("box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseover', () => changeColor(boxes[i]));
    }
}

generateGrid(16);
hoverEffect();

function createNewGrid(squares) {
    let oldContainer = document.getElementById("container");
    oldContainer.remove();
    let newContainer = document.createElement("div");
    newContainer.id = "container";
    document.getElementById("body").appendChild(newContainer);
    generateGrid(squares);
    hoverEffect();
}

document.getElementById("btn").addEventListener('click', () => {
    let squares = prompt("Number of squares per side: ");
    createNewGrid(squares);
})