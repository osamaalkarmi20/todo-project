'use strict';
let fullName = prompt("Please enter your name", "");
let text;
if (fullName == null || fullName == "") {
  text = "User cancelled the prompt.";
} else {
  
console.log(fullName);
}
let gender = prompt("what is you gender ", "");

if (gender == "male" || gender == "female") {
    console.log(gender);
}
 else {
    text = "User cancelled the prompt.";
  
}
var age = prompt('Please enter your age');
 if(age <= 0){
     alert("Your age cant be " +age);
     prompt('Please renter your age');

}else{
   console.log(age);
 }
 if (confirm("confirm if he wants to skip the welcoming message")) {
    text = "You pressed OK!";
  } else {
               if(gender==="male"){
                   alert("welcome mr."+" "+ fullName);} else { 

                    if(gender==="female"){
                        alert("welcome ms."+  " "+fullName);
                   }else{
                   
                        alert("welcome  "+ " "+fullName);
                   }
                }
}