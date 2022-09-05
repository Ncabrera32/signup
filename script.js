function checkPassword(){
	let password = document.getElementById
	("password").value;
	let confirm_pw = document.getElementById
	("confirm_pw").value;
	console.log(password, confirm_pw);
	let message = document.getElementById
	("message");

	if(password.length !=0){
		if(password == confirm_pw){
			message.textContent = "Passwords Match";
			message.style.backgroundColor = "#3ae374";
		}
		else{
			message.textContent = "Passwords Don't Match";
			message.style.backgroundColor = "#ff4d4d";
		}
	}
	else{
		alert("Password can't be empty!");
		message.textContent = "";
	}
}