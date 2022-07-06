// var totalCost = ((2 * 4) * 4) + 2;

// console.log(totalCost)


// var firstName = "Ghous";

// var lastName = "Ahmed";

// alert("Ghous" + " " + "Ahmed")


// var str = "Ghous" // String
// var num = 123 // Number
// var bool = true // Boolean
// var nul = null;

// var msg = "Enter your name";
// var userName = prompt(msg,"Ghous");

// console.log("Hello, " + userName)

// var age = +prompt("Enter your age");

// console.log(age + 2)

// var num1 = +prompt("Enter num 1");
// var num2 = +prompt("Enter num 2");
// var result = num1 + num2;

// console.log(result)

// if("") {
    
// }
// if("") {
//     alert("Hello")
// }
// if("") {
//     alert("Hello")
// }

var num1 = +prompt("Enter num 1");
var num2 = +prompt("Enter num 2");
var opt = prompt("Enter your opt (+ - / *)");
var result;

if(opt === "+"){
    result = num1 + num2
}

if(opt === "-"){
    result = num1 - num2
}

if(opt === "*"){
    result = num1 * num2
}

if(opt === "/"){
    result = num1 / num2
}

console.log(result)
