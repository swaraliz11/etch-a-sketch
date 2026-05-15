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