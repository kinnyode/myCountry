var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Login" && password == "mycountry"){
alert ("Login successful. You are now being redirected based on your location.");
window.location = "africa.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
document.getElementById("results").innerHTML = ("Wrong Password!   You have "+attempt+" attempt(s) left.")  ;
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}


