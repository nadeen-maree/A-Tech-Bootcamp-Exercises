
for (let i = 1; i < 10; i++){
    const box = document.createElement("div")
    box.innerHTML = `I'm Box${i}`
    box.setAttribute("id", `box${i}`)
    document.getElementById("container").appendChild(box)
    console.log(box)

    box.onmouseenter = function () {
        box.style.backgroundColor = getRandomColor()
        if (allBoxesSameColor()) {
            const message = document.createElement("p");
            message.textContent = "Nice job!";
            container.appendChild(message);
        }
    };

}

const allBoxesSameColor = function () {
    const boxes = container.querySelectorAll("div");
    const firstColor = boxes[0].style.backgroundColor;
    return Array.from(boxes).every(box => box.style.backgroundColor === firstColor);
};

const getRandomColor = function() {
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
    
    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
  }