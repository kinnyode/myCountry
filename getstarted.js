function validateform(){  

    var name=document.myform.name.value;
    var email= document.myform.email.value;  
    var password=document.myform.password.value;
   var password2=document.myform.password2.value;
     
     if (name==""){  
        document.getElementById("results").innerHTML = ("Please enter your full name & username.")  ;
      return false;  
       }
  
       else if (email==""){
        document.getElementById("results").innerHTML = ("Please enter a valid email.")  ;
      return false;
  }





          else if (password ==""){
            document.getElementById("results").innerHTML = ("Please enter a password.")  ;
          return false;
      }

       if(password.length<6){  
        document.getElementById("results").innerHTML = ("Password must be greater than six characters.")  ; 
      return false;  
      }  


      
       if (password2==""){
        document.getElementById("results").innerHTML = (" Confirm your password.")  ; 
        return false; 
      }

      else if (password != password2){
        document.getElementById("results").innerHTML = ("Passwords do not match ejoor.")  ; 
        return false; 
      }

      else if(password.length>= 6){
        alert ("Sign Up to myCountry successful. You are now being redirected based on your location.");
        window.location = "africa.html"; // Redirecting to other page.
        return false;
      }

     
    }  
