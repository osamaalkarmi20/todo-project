'use strict';

let arr=new Array;
/*calling functions to make sure to take answers for the required questions as name and age and gender*/
nameCheck();
genderCheck();
ageCheck();
let text;
/*name question with a recursion function:         *************************************/
function nameCheck(){
  let fullName = prompt("Please enter your name", "");

if (fullName == null || fullName == "") {
nameCheck();
} else {
 arr.push(fullName);
}}
/*gender question with a recursion function:         *************************************/
function genderCheck(){
let gender = prompt("what is you gender (DONT USE CAPITAL LETTERS)", "");

if (gender == "male" || gender == "female") {
  arr.push(gender);
}
 else {genderCheck();
 
}}
/*age question with a recursion function:         *************************************/
function ageCheck(){
let age = prompt('Please enter your age');
 if(age <= 0 || age== null || age == "" || typeof(age)=="number" ){
     alert("Your age cant be 0" );
     ageCheck();

}else{
  arr.push(age);
 }}
/*welcome massege confirming:         *************************************/



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
/*question 1 yes/no:                      *************************************/
let a1 = prompt('(Please answer using Yes or No ) Are you a programmer');
 if(a1=="Yes" ){
  arr.push(a1);
    
}else if(a1=="No"){
  arr.push(a1);
 }else
 {
   arr.push("invalid");}
/*question 2 yes/no:                      *************************************/
   let a2 = prompt('(Please answer using Yes or No ) Did you take any courses?');
   if(a2=="Yes" ){
    arr.push(a2);
      
  }else if(a2=="No"){
    arr.push(a2);
   }else
   {
     arr.push("invalid");}
/*question 3 yes/no:                      *************************************/
     let a3 = prompt('(Please answer using Yes or No ) Did you take any courses?');
     if(a3=="Yes" ){
      arr.push(a3);
        
    }else if(a3=="No"){
      arr.push(a3);
     }else
     {
       arr.push("invalid");}
/* treversing the array of answers:                      *************************************/

for(let i=0;i<arr.length;i++)

{
  console.log(arr[i]);
}
   console.log(arr);



