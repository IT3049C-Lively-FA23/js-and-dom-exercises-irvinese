// 🤖: create 2 constants with references to the password input and the reveal button from the DOM


// 🤖: Create an Event Listener on the password reveal button
// 🤖: The event listener should toggle the password field attribute between `password` and `text` to change the visibility of the password field content.


// Provided for you - prevent form submit

const form = document.querySelector("form");
form.addEventListener(`submit`,function(e){
	const password = document.getElementById(`password`);
	const reveal = document.getElementById(`togglePassword`);

	reveal.addEventListener(`click`, togglePasswordVisibility);

	function togglePasswordVisibility() {
		const type = password.getAttribute(`type`) === `password` ? `text` : `password`;
		password.setAttribute(`type`, type)
	}
	e.preventDefault();
});


class passwordReveal{
	togglePasswordVisibility(password){
		const type = password.getAttribute(`type`) === `password` ? `text` : `password`;
		password.setAttribute(`type`, type)

		const passwordRevealer = new passwordReveal();
		const passwordInput = document.getElementById(`password`)
		passwordRevealer.togglePasswordVisibility(passwordInput);
	};
}