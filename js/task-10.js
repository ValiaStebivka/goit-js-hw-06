function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("#controls input");
const boxes = document.querySelector("#boxes");
let inputValue = 0;
inputNumber.addEventListener("input", event => {
	inputValue = Number(event.target.value);
	return inputValue;
});

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
function createBoxes(amount) {
	for (let i = 1; i <= amount; i += 1) {
		boxes.insertAdjacentHTML(`beforeend`, `<div class = "box"></div>`);
		const boxArr = [...document.querySelectorAll(".box")];

		for (let i = 0; i < boxArr.length; i += 1) {
			let size = 30;
			const box = boxArr[i];
			box.style.width = `${size + 10 * i}px`;
			box.style.height = `${size + 10 * i}px`;
			box.style.backgroundColor = `${getRandomHexColor()}`;
		}
	}
}
createBtn.addEventListener("click", () => {
	createBoxes(inputValue);
});
function destroyBoxes() {
	boxes.innerHTML = "";
}
destroyBtn.addEventListener("click", destroyBoxes);