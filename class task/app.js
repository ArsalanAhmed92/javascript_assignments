// var myName = "my name is arsalan khan , my name is arsalan ahmed".split(" ")
//  console.log(myName)
// dice task 
// var num = Math.random() * 6;
    
// var result = Math.ceil(num);

// console.log(result);


// head tails flip the coin game
                      
// var plyer1 = prompt("Enter Heads userName");
// var player2 = prompt("Enter tails userName");
// var toss = Math.random() * 1;

// var round = Math.round(toss);
// if (round === 1){
//     alert("Head " + plyer1 + " Win the toss");
// }
// else if (round === 0){
//     alert("Tails " + player2 + " Win the toss");
// }

// password  genrator

// var textArray = ["a", "A", "b", "c", "C", "d", "D", "E", 'e', "F", 'f', "g",
//     "G", 'H', 'h', 'i', 'I', 'J', 'j', "K", "k", "L", "l", "M",
//     "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s",
//     "T", "t", "U", 'u', "V", 'v', "W", 'w', "x", "X", 'y', "Y", "Z", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// var pass = document.getElementById('pass');
// var list = [];

// function RandomWords() {
//     for (i = 0; i <= 8; i++) {
//         var randomNumber = Math.floor(Math.random() * textArray.length);

//         var word = textArray[randomNumber];

//         list.push(word)

//     }

//     PasswordGenerated = list.splice(",").join("")};


// sir wala method ass7 question 15

// var pass = prompt("Enter your password");
// var a = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
// ];
// var b = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];
// var c = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// var isNumber = false;
// var isAlpha = false;
// var isInvalid = false;

// if (c.indexOf(pass[0]) !== -1) {
//     alert("Number is not allowed on index 0")
// }
// else if(pass.length < 6){
//     alert("Password should be at leasat 6")
// }
//  else {
//   for(var i = 0; i < pass.length; i++){
//       if(a.indexOf(pass[i]) !== -1){
//         isAlpha = true
//       }else if(b.indexOf(pass[i]) !== -1){
//         isAlpha = true
//       }else if(c.indexOf(pass[i]) !== -1){
//         isNumber = true
//       }else{
//         isInvalid = true
//       }
//   }
//   if(isAlpha && isNumber && !isInvalid){
//     alert("Correct password")
//   }else{
//     alert("Password is Wrong / Special charactors are not allowed")
//   }
// }

// by me methode

// var pass = prompt("Enter your password");
// var a = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
// ];
// var b = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];
// var c = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


// if(pass.charCodeAt() >= 97 && str.charCodeAt() <= 122 && pass.charcodeat() >= 65 && str.charCodeAt() <= 90 ){
//   alert("correct password..")
//       if (c.indexOf(pass[0]) !== -1) {
//      alert("Number is not allowed on index 0")
//  } else if(pass.length < 6){
//      alert("Password should be at leasat 6")
//  }
// }