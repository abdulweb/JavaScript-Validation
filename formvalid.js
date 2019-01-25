function formValidation(){

	// Make quick references to our fields
	var fname =  document.getElementById('fname');
	var email =  document.getElementById('email');
	var password =  document.getElementById('password');
	var con_password =  document.getElementById('con_password');
	var username =  document.getElementById('username');
	var number = document.getElementById('number');

	//  to check if all empty form fields and set border red.

    if(fname.value.length == 0 && email.value.length == 0 && con_password.value.length == 0 &&  password.value.length == 0 
    	&& con_password.value.length == 0 && number.value.length == 0){
		// document.getElementById('head').innerText = "* All fields are mandatory *"; //this segment displays the validation rule for all fields
		// firstname.focus();
		
		document.getElementById('fname').style.borderColor = "red";
		document.getElementById('email').style.borderColor = "red";
		document.getElementById('username').style.borderColor = "red";
		document.getElementById('password').style.borderColor = "red";
		document.getElementById('con_password').style.borderColor = "red";
		document.getElementById('number').style.borderColor="red";
		return false;
	}
	// check if name is empty
	if (fname.value.length ==0) 
	{
		document.getElementById('nameError').innerText ='Name is required';
		document.getElementById('fname').style.borderColor = "red";
		return false;
	}

	if (email.value.length ==0) 
	{
		document.getElementById('emailError').innerText ='email is required';
		document.getElementById('email').style.borderColor = "red";
		return false;
	}
	if (username.value.length ==0) 
	{
		document.getElementById('usernameError').innerText ='username is required';
		document.getElementById('username').style.borderColor = "red";
		return false;
	}
	if (password.value.length ==0) 
	{
		document.getElementById('passwordError').innerText ='password is required';
		document.getElementById('password').style.borderColor = "red";
		return false;
	}
	
	
	


	// Check each input in the order that it appears in the form!
	 if(inputAlphabet(firstname, "* For your name please use alphabets only *")){
		
		if(lengthDefine(username, 6, 8)){
		
		    if(emailValidation(email, "* Please enter a valid email address *")){
		
		        if(trueSelection(state, "* Please Choose any one option")){
					
	                if(textAlphanumeric(addr, "* For Address please use numbers and letters *")){
			            
						if(textNumeric(zip, "* Please enter a valid zip code *")){
				
						  return true;
						}
					}
				}
			}
		}
	}
	
	
	return false;
	
}
