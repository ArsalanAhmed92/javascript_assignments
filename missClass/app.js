// var date = new Date();
// var strinDate = date.toString();

// console.log(date.toDateString());

// console.log(date.toLocaleTimeString())

// console.log(date)

// var days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// console.log(days[date.getDay()]);

// console.log(date.getMonth())

// console.log(date.getMonth());

// console.log(date.getDate());

// alert()

// Birthday Calculator

var userDate = prompt("Enter your birthday")
var birthday = new Date(userDate).getTime();
var today = new Date().getTime();

var diff = today - birthday;

console.log("You are " + Math.round(diff / (1000 * 60 * 60 * 24 * 365)) + " years old")