const inputField = document.querySelector("#validation-input");

const inputFieldLength = inputField.dataset.length;

inputField.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length == inputFieldLength) {
        inputField.classList.add("valid");
        inputField.classList.remove("invalid");
    } else {
        inputField.classList.add("invalid");
        inputField.classList.remove("valid");
    }
});