// 🤖: create 2 constants with references to the password input and the reveal button from the DOM


// 🤖: Create an Event Listener on the password reveal button
// 🤖: The event listener should toggle the password field attribute between `password` and `text` to change the visibility of the password field content.


// Provided for you - prevent form submit

const form = document.querySelector("form");
const password = document.getElementById(`password`);
const reveal = document.getElementById(`togglePassword`);

function togglePasswordVisibility() {
    const type = password.getAttribute(`type`) === `password` ? `text` : `password`;
    password.setAttribute(`type`, type);
}

reveal.addEventListener(`click`, togglePasswordVisibility);

form.addEventListener(`submit`, function (e) {
    e.preventDefault();
});

