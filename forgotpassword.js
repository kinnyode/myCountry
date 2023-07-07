function validate(){  
    var password1=document.myform.password1.value;
   var password2=document.myform.password2.value;
     
     if (password1==""){  
        document.getElementById("results").innerHTML = ("Please enter a new password.")  ;
      return false;  
       }
  
       
    else  if (password1.length<6 ){
        document.getElementById("results").innerHTML = ("Passwords must be greater than six characters.")  ;
      return false;
  }

     
  if (password2==""){  
    document.getElementById("results").innerHTML = ("Please confirm your password.")  ;
  return false;  
   }

          if (password2.length<6){
            document.getElementById("results").innerHTML = ("Passwords must be greater than six characters.") ;
          return false;
      }

      if (password1 != password2){
        document.getElementById("results").innerHTML = ("Passwords do not match ejoor.")  ; 
        return false; 
      }

      else if(password1 ==password2){
        document.getElementById("results").innerHTML = ("")  ; 
        window.location = "redirect.html"; // Redirecting to other page.
        return false;
      }

     
    }  

