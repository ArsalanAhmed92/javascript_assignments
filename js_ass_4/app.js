
// chapter number 9to11
// question no 1



//  var city = prompt("enter your city name");
//   if (city === "karachi") {
//       document.write("wellcome to city of lights")
//   }
//   else if (city === "lahore") {
//       document.write("welcome to city of pehelwan")
//   }
//   else {
//  document.write("wellcome to pakistan")
//   }



// chapter number 9to11
// question no 2


// var gender = prompt("enter your gender male/female")

//  if( gender === "male"){
//  alert("welcome sir;")

// }
// else{
//      alert("welcome miss;")
// }


// chapter number 9to11
// question no 3


// var traffic_colour = prompt("Enter traffic colour turns : red/yellow/green")

// if(traffic_colour==="red"){
//     alert("Must Stop")
// }
// else if(traffic_colour==="yellow"){
//     alert("Ready To Move")
// }
// else{
//     alert("Move Now")
// }


// chapter number 9to11
// question no 4


// var fule = +prompt("enter current fule in liters i.e 1,2,3")

// if( fule===1){
//     alert("you have to refill now you can reach only 5 km")
// }
// else if(fule===2){
//     alert("you can reach 10 km in remaining fule")
// }
// else{
//     alert("drive easy abhi petröl boht hai ")
// }




// chapter number 9to11
// question no 5 a



//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }



// chapter number 9to11
// question no 5b.

// var b = 82;
// if (b++ === "83"){
// alert("given condition for variable b is true");
// }


// chapter number 9to11
// question no 5c.


// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }




// chapter number 9to11
// question no 5d.


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }



// chapter number 9to11
// question no 5e.

// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }



// chapter number 9to11
// question no 5f.


//  if("car" < "cat"){
//     alert("car is smaller than cat");
//     }


// chapter number 9to11
// question no 6.


// var totalMarks = 300;
// var sub1 = prompt("Enter Your First Subject Marks")
// var sub2 = prompt("Enter Your Second Subject Marks")
// var sub3 = prompt("Enter Your Third Subject Marks")
// var sub1Marks = Number(sub1)
// var sub2Marks = Number(sub2)
// var sub3Marks = Number(sub3)
// var markObtained = sub1Marks+sub2Marks+sub3Marks
// var percentage = markObtained/totalMarks*100

// if (percentage >= 80){
//     grade = "A-one";
//     remarks = "Excellent";
// }

// else if (percentage >= 70){
//     grade = "A";
//     remarks = "Good";
// }

// else if (percentage >= 60){
//     grade = "B";
//     remarks = "You Need to improve";
// }
// else if (percentage <= 60){
//     grade = "Fail";
//     remarks = "Sorry";
// }

// document.write(
//     "<h1>Marks sheet</h1>"+
//     "<br/>Total Marks :"+totalMarks+
//     "<br/>Marks Obtained :"+markObtained+
//     "<br/>Percentage :"+percentage+"%"+
//     "<br/>Grade :"+grade+
//     "<br/>Remarks :"+remarks

// )






// chapter number 9to11
// question no 7.

// var gnum = +prompt("Guess any number between 1 to 10")
// if( gnum === "5"){
//     alert("BINGO!! you Guess the correct answer ..! WöW!!")
// }
// else if( gnum === "4"){
//     alert("Close enough to the correct answer")
// }
// else if( gnum === "6"){
//          alert("“Close enough to the correct answer”.")
//  }
//  else{
//      alert("Sööry TryAgain!!")
//  }

// chapter number 9to11
// question no 8.

// var num = +prompt("enter a number")
// if (num%3 === 0 ){
//     alert("this number can divided by 3 ")

// }
// else if (num/3 !== 0 ){
//     alert("this number can not be divided by 3 ")

// }

// chapter number 9to11
// question no 9.

//  var num = +prompt("enter a number")
//  if (num%3 === 0 ){
//      alert("This Number Is ODD  ")
//  }
//  else if (num%2 === 0 ){
//      alert("This Number Is EVEN ")
//  }


// chapter number 9to11
// question no 10.


// var t = +prompt("enter tempruture i.e 10,20,30,40")

// if( t>40){ 
//     alert("It Is Too Höt Outside")
// }

// else if( t>30){ 
//     alert("The Weather Today Is Normal")
// }

// else if( t>20){ 
//     alert("Today's Weather Is CÖÖL")
// }
// if( t>10){ 
//     alert("OMG!! It's Töö Cöld outside ")
// }

// chapter number 9to11
// question no 11.

// var num1 = +prompt("enter number");
// var opt = prompt("enter your operator");
// var num2 = +prompt("enter number");
// var result = "condition is not working";


// if (opt==="+"){
//     result=num1 + num2 ;
// }

// else if (opt==="-"){
//     result=num1 - num2;
// }
// else if (opt==="/"){
  
//     result=num1 / num2;
// }
// else if (opt==="*"){
//     result=num1 * num2;
// }
// else if( opt==="%"){
//    result=num1 % num2;  
// }
// document.write(result);
// console.log(result);


// CHAPTER 12_13
// QUESTION No. 1

// var userInput = prompt("Enter a Character ex: a-z,A-Z,0-9")

// var ascii = userInput.charCodeAt(0)
// if (ascii >= 65 && ascii <= 90){
//     alert("you input a Capital letter")
// } else if (ascii >= 97 && ascii <=122){
//     alert("you input a Small letter")
// }else if (ascii >= 48 && ascii <=57){
//     alert("you input a number")
// }
//  else{
//     alert ("you have done something wrong")
// }


// CHAPTER 12_13
// QUESTION No. 2

// function integer(a,b) {


//     var a = +prompt("Enater a number")
//     var b = +prompt("Enater a number")

//     if (a > 0 && b > 0 && a > b) {
//       document.write("The larger number is " + a );
//     } else if (a > 0 && b > 0 && a < b) {
//       document.write("The larger number is " + b);
//     } else if (a === b && a > 0 && b > 0) {
//       document.write("Both numbers are equal!")
//     } else {
//         document.write("Please add an integer!");
  
//     }
//   }
  
//   integer(-1,-1);


// CHAPTER 12_13
// QUESTION No. 3


// var num = +prompt("Enter any Number","I'll Tell you the Entered number is +,- or zero ");
// if (num>0){
//     document.write("Your Entered Number is Positive")
//    }
//   else if (num<0){
//     document.write("Your Entered Number is Negative")
//    }
//    else if(num===0){
//        document.write("Your Entered Number is Zero")
//    }






// CHAPTER 12_13
// QUESTION No. 4

// var vöwel = prompt("enter only 1 elphabet i'll tell you its vowel or not i.e");


// if(vöwel==="a"||vöwel==="e"||vöwel==="i"||vöwel==="o"||vöwel==="u"){
//     alert ("it is a vowel")
    
// }
// else{
//     alert("it is not a vowel")
// }




// CHAPTER 12_13
// QUESTION No. 5

// var a = prompt("Enter Your Password")
// var pass = "password123"
// if(pass === a){
//     alert("correct password!");
// }
// else if(pass !== a){
//     alert("INcorrect password! Please Enter Corrcet password.");
// }
// else if(pass === ""){
//     alert("! Please Enter your password.");
// }
// else{
//     alert("incorrect password!")
// }



// CHAPTER 12_13
// QUESTION No. 6

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
//     alert(greeting)
// }
// else {
//     greeting = "Good evening";
//     alert(greeting)
// }




// CHAPTER 12_13
// QUESTION No. 7

var time = +prompt("Enter What time is it i.e 7pm as 1900 9pm as 2100");
if( time >= 0000 && time<1200){
    alert("Good Morning..")
}
else if( time >= 1200 && time<1700){
    alert("Good Afternoon..")
}
else if( time >= 1700 && time<2100){
    alert("Good Evening..")
}
else if( time >= 2100 && time<2359){
    alert("Good Night..")
}
else{
    alert("some thing wrong please enter correct time in 2400 format")
}




//CHAPTER NO.14-16
//QUESTION NO.1

// var literalArray = [];
//CHAPTER NO.14-16
//QUESTION NO.2
// var objectArray = [];
//CHAPTER NO.14-16
//QUESTION NO.3
// var stringArray = ["karachi", "lahore", "islamabad"];
//CHAPTER NO.14-16
//QUESTION NO.5
// var numberArray = [1,2,3,4,5];
//CHAPTER NO.14-16
//QUESTION NO.6
// var booleanArray = [true,false];
//CHAPTER NO.14-16
//QUESTION NO.7
// var mixedArray = ["a",123,"true","karachi"];

//CHAPTER NO.14-16
//QUESTION NO.8
// var educationArray = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]
// document.write("<h1>Qualification</h1>")
// for (var i = 0; i <=7; i++){
//     document.write(i+1+")"+educationArray[i]+"<br/>")
// }

//CHAPTER NO.14-16
//QUESTION NO.9
// var studentName = ["Micheal","John", "Tony"]
// var score = [320,230,480];
// var percentage = [];
// for(var i = 0; i <=2; i++){
//     percentage[i] =  score[i] / 500 * 100

// }

// for (var a = 0; a<=2; a++){
// document.write("score of "+studentName[a]+" is "+score[a]+"Precentage "+percentage[a]+"% <br/>")
// }



// var color = ["Red","Yellow","Green"]
// document.write(color+"<br/>");
// var beginning = prompt("Enter which color you want to add at the beginning of array")
// color.unshift(beginning)
// document.write(color+"<br/>");
// var ending = prompt("Enter which color you want to add at the ending of array")
// color.push(ending)
// document.write(color+"<br/>");
// color.shift()
// document.write(color+"<br/>");
// color.pop()
// document.write(color+"<br/>");
// var update =+prompt("At which index do you want to add color?")
// var newColor =+prompt(" which color do you want to add on that index?")
// color.splice(update,0,newColor)
// document.write(color+"<br/>");
// var dlete =+prompt("At which index do you want to delete color?")
// var colorDelete =+prompt(" which color do you want to delete on that index?")
// color.splice(dlete, colorDelete);
// document.write(color+"<br/>");

// question No. 10


// var score = [320,230,480,120]
// document.write("Score of students :" +score+"<br/>");
// score.sort()
// document.write(" Ordered Score of students :" +score);

// question No. 11


// var cities = ["karachi","lahore","quetta","peshawar"];
// document.write("cities list: <br/>"+cities+"<br/>")
// var selectedCities = cities.slice(2,4)
// document.write("selected cities list: <br/>"+selectedCities)


//CHAPTER NO.14-16
//QUESTION 12.


// var arr = ["This","is","my","cat"]
// document.write("array/; <br/>"+arr+"<br/>")
// var join = arr.join(" ")
// document.write("string: <br/>"+join) 


//CHAPTER NO.14-16
// QUESTION 13.

// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// var device = ["keyboard",",mouse","printer","monitor"]
// document.write("devices : <br/>"+device+"<br/>")
// var firstDevice = device.shift()
// document.write("out : <br/>"+firstDevice+"<br/>")
// var secondDevice = device.shift()
// document.write("out : <br/>"+secondDevice+"<br/>")
// var thirdDevice = device.shift()
// document.write("out : <br/>"+thirdDevice+"<br/>")
// var fourthDevice = device.shift()
// document.write("out : <br/>"+fourthDevice+"<br/>")

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)


// var device = ["keyboard",",mouse","printer","monitor"]
// document.write("devices : <br/>"+device+"<br/>")
// var firstDevice = device.pop()
// document.write("out : <br/>"+firstDevice+"<br/>")
// var secondDevice = device.pop()
// document.write("out : <br/>"+secondDevice+"<br/>")
// var thirdDevice = device.pop()
// document.write("out : <br/>"+thirdDevice+"<br/>")
// var fourthDevice = device.pop()
// document.write("out : <br/>"+fourthDevice+"<br/>")

// 15.
// Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:

// var phone = ["apple","samsung","motorla","nokia","sony & haier"]
// document.write(
//     "<select>"+
//     "<option>"+phone[0]+"</option>"+
//     "<option>"+phone[1]+"</option>"+
//     "<option>"+phone[2]+"</option>"+
//     "<option>"+phone[3]+"</option>"+
//     "<option>"+phone[4]+"</option>"+
//     "</select>"
// )


