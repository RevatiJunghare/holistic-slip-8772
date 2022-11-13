function signUp (){
    mainrpg.style.display="none"
    box.style.display="block"
    if("userfirstname.length>5"){ 
 
      alert("  congratulation Account Created successful")
      window.location.href="./index.html";
    }
  }
 
 function cls_fun (){
    mainrpg.style.display="none"
    mainrpg.style.transform="translateX(710px)";   
    mainrpg.style.transition="2s";  
 }
 
 function seterr(id, error){
     element = document.getElementById(id)
     element.getElementsByClassName("form_err")[0].innerHTML=error;
 }
 
 function validateform(){
     var returnval =true;
     var name = document.form["myForm"]["First_Name"].value;
     if(name.length<8){
         seterr("name","length is too sort")
     }
     return returnval;
 }