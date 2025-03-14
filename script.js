//your JS code here. If required.


function submitForm(event){
	let username=document.getElementById("username").value;
	let password=document.getElementById("password").value;
	let isChecked=document.getElementById("checkbox").checked;
	event.preventDefault();

	if(isChecked){
		localStorage.setItem("data",{username,password});
	}
	alert(`Logged in as ${username}`)
	
}