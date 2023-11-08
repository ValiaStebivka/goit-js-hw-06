const sizeControl = document.querySelector("#font-size-control");
const currentSize = document.querySelector("#text");
currentSize.style.fontSize = `${sizeControl.value}px`


sizeControl.addEventListener("input", (event) => {
    const inputValue = event.currentTarget.value
    currentSize.style.fontSize = `${inputValue}px`
})