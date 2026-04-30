for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let box = document.createElement("div");
        let boxHeight = (750 / 16).toFixed(2);
        let boxWidth = (1000 / 16).toFixed(2);
        box.style.height = `${boxHeight}px`;
        box.style.width = `${boxWidth}px`;
        box.classList.add("box");
        document.getElementById("container").appendChild(box);
    }
}

function changeColor(div) {
    div.style.backgroundColor = "lightblue";
}