const enteredName = document.querySelector("#name-input")
const spanValue = document.querySelector("#name-output")


enteredName.addEventListener(`input`, () => {
    if (enteredName.value !== ``) {
        spanValue.innerHTML = enteredName.value.trim()
    }
    else {
        spanValue.innerHTML = `Anonymous` 
    }
})