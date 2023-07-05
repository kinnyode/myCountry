function validateform(){  
    var name=document.myform.username.value;  
    var password=document.myform.password.value;  
     
     if (name==""){  
        document.getElementById("results").innerHTML = ("Please enter your full name & username.")  ;
      return false;  
       }

          else if (password==""){
            document.getElementById("results").innerHTML = ("Please enter a password.")  ;
          return false;
      }

    else if(password.length<6){  
        document.getElementById("results").innerHTML = ("Password should be greater than six characters.")  ; 
      return false;  
      }  


      else if(password.length>= 6){
        alert ("Sign Up successful. You are now being redirected based on your location.");
        window.location = "africa.html"; // Redirecting to other page.
        return false;
      }
    }  
