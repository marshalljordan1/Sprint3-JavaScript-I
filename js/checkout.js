
// Exercise 6

function validate(event) {
	var error = 0;
	
	// Get the input fields
	var fName = document.getElementById("fName");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fAddress = document.getElementById("fAddress");
	var fPhone = document.getElementById("fPhone");
	var fEmail = document.getElementById("fEmail");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorAddress = document.getElementById("errorAddress");
	var errorPhone = document.getElementById("errorPhone");
	var errorEmail = document.getElementById("errorEmail");
	
	// Validate fields entered by the user: name, phone, password, and email

	function checkLetters(str) {
		return /^[a-z]+$/i.test(str);

	}

	function checkNumbers(str) {
		return /^[0-9]+$/.test(str);
	}

	function checkLettersAndNumbers(str) {
		return /^[0-9a-z]+$/i.test(str);
	}

	function checkEmailFormat(str) {
		return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(str);
	}

	if(fName.value == "" || fName.value.length < 3 || !checkLetters(fName.value)) {
		error++;
		fName.classList.remove("is-valid");
		fName.classList.add("is-invalid");
	} else {
		fName.classList.remove("is-invalid");
		fName.classList.add("is-valid");
	}

	if (fLastN.value == "" || fLastN.value.length < 3 || !checkLetters(fLastN.value)) {
		error++;
		fLastN.classList.remove("is-valid");
		fLastN.classList.add("is-invalid");
	} else {
		fLastN.classList.remove("is-invalid");
		fLastN.classList.add("is-valid");
	}

	if (fPassword.value == "" || fPassword.value.length < 3 || !checkLettersAndNumbers(fPassword.value)) {
		error++;
		fPassword.classList.remove("is-valid");
		fPassword.classList.add("is-invalid");
	} else {
		fPassword.classList.remove("is-invalid");
		fPassword.classList.add("is-valid");
	}

	if (fAddress.value == "" || fAddress.value.length < 3) {
		error++;
		fAddress.classList.remove("is-valid");
		fAddress.classList.add("is-invalid");
	} else {
		fAddress.classList.remove("is-invalid");
		fAddress.classList.add("is-valid");
	}

	if (fPhone.value == "" || fPhone.value.length < 3 || !checkNumbers(fPhone.value)) {
		error++;
		fPhone.classList.remove("is-valid");
		fPhone.classList.add("is-invalid");
	} else {
		fPhone.classList.remove("is-invalid");
		fPhone.classList.add("is-valid");
	}

	if (fEmail.value == "" || fEmail.value.length < 3 || !checkEmailFormat(fEmail.value)) {
		error++;
		fEmail.classList.remove("is-valid");
		fEmail.classList.add("is-invalid");
	} else {
		fEmail.classList.remove("is-invalid");
		fEmail.classList.add("is-valid");
	}
 
	if(error>0){
		event.preventDefault()
		alert("Error");
	} else {
		alert("OK");
	}
	
}



