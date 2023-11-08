function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const colorBody = document.querySelector("body");
const btnChangeColor = document.querySelector(".change-color");
const currentColor = document.querySelector(".color");
const bgColor = "#FFFFFF"
colorBody.style.backgroundColor = bgColor;
currentColor.textContent = bgColor;



const changeColor = (event) => {
    const randomColor = getRandomHexColor();
    colorBody.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor;
};

btnChangeColor.addEventListener("click", changeColor);