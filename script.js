const container = document.getElementById("container")
const colors = ["red", "blue", "green", "yellow", "purple"]

const Squares = 500

for(let i = 0; i < Squares; i++) {
    const squere = document.createElement("div")
    squere.classList.add("squere")

    squere.addEventListener("mouseover", () => setColor(squere))

    squere.addEventListener("mouseout", () => removeColor(squere))

    container.appendChild(squere)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `00 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.background = "#1d1d1d"
  element.style.boxShadow = "0 0 2px #000"
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}