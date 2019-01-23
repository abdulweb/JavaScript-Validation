function formValidation(){

	// Make quick references to our fields
	var firstname =  document.getElementById('firstname');
	var addr =  document.getElementById('addr');
	var zip =  document.getElementById('zip');
	var state =  document.getElementById('state');
	var username =  document.getElementById('username');
	var email =  document.getElementById('email');

	//  to check empty form fields.

    if(firstname.value.length == 0){
		// document.getElementById('head').innerText = "* All fields are mandatory *"; //this segment displays the validation rule for all fields
		// firstname.focus();
		// return false;
		document.getElementById('firstname').style.borderColor = "red";
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
