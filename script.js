function validateForm() {
	var first_name = document.forms["myForm"]["first-name"].value;
	var last_name = document.forms["myForm"]["last-name"].value;
	var email = document.forms["myForm"]["email"].value;
	var phone = document.forms["myForm"]["phone"].value;

	if (first_name == "") {
		alert("Name must be filled out");
		return false;
	}
	if (last_name == "") {
		alert("Name must be filled out");
		return false;
	}
	if (email == "") {
		alert("Name must be filled out");
		return false;
	}
	if (phone == "") {
		alert("Email must be filled out");
		return false;
}
return true;
}
