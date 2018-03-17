// this is a comment. Any line starting with double forward slash is a comment line
// Reusable functions to be used are  showError, showPirateName, validate, reset


// ShowError - displays error on the screen if First Name or Last Name is not entered
// ShowPirateName - shows Pirate Name on the screen
// validate - it checks if mandatory fields are entered or not. Returns false is any of the mandatory field is not entered otherwise true
// reset - this is the function that resets the screen to initial state: clears error and pirate name from screen



function makePirateName() {
	reset();
	if(validate()) {
		showPirateName();
	} else {
		showError();
	}
}