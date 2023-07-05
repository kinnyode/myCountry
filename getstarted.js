function validateform(){  
    var name=document.myform.username.value;  
    var password=document.myform.password.value;  

function validate(){
    if ( username == "Login" && password == "mycountry"){
    alert ("Login successful. You are now being redirected based on your location.");
    window.location = "africa.html"; // Redirecting to other page.
    return false;
    }
          else if(password==null || name==""){
          alert("Please enter a password.");
          return false;
      }

    else if(password.length<6){  
      alert("Password should contain at least 6 characters.");  
      return false;  
      }  
    }  
    