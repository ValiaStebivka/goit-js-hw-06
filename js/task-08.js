const loginForm = document.querySelector(".login-form");

const eventHandler = (event) => {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert("Please enter email and password!");
        } 
        const userData = {email: email.value, password: password.value}
        console.log(userData)
        event.currentTarget.reset();
};

loginForm.addEventListener("submit", eventHandler);
