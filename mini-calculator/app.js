 var num1 = +prompt("enter number");
 var opt = prompt("enter your operator");
 var num2 = +prompt("enter number");
 var result = "condition is not working";


 if (opt==="+"){
     result=num1 + num2 ;
 }

 else if (opt==="-"){
     result=num1 - num2;
 }
 else if (opt==="/"){
   
     result=num1 / num2;
 }
 else if (opt==="*"){
     result=num1 * num2;
 }
 else if( opt==="%"){
    result=num1 % num2;  
 }
 document.write(result);
 console.log(result);



// var num1 = +prompt("enter number 1");
// var opt = prompt("enter your operator");
// var num2 = +prompt("enter number 2");
// var result = "";
// document.write(result);
