const menu = document.querySelector('#mobile-menu'); //querySelector used to return element that matches CSS query
const menuLinks = document.querySelector('.navbar__menu');

//Animation for when hambuger icon is clicked to animate navbar
menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

//Javascript Validation
// const used so that variable cannot be reassigned
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

//event listener has been added allowing functions to be called when a specific event happens
form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs(); //custom function
});

//checking of the inputs
function checkInputs() {
	// trim function used to remove the whitespaces from the string
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement; // for .form-control
	const small = formControl.querySelector('small'); //this adds an error message inside the small tag
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success'; //green tick shows up 
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
} //taken from stackoverflow for email rejects

//const used so that it is fixed and cannot be re-assigned
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

//addEventListener used to attach an event handler to an element without overwriting event handlers
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})