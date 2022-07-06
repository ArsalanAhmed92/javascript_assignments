// var username = prompt("Enter your user name");

// if(username === ""){
//     alert("Bhai kuch likho")
// }
// else if(username === " "){
//     alert("Bhai kuch likho")
// }
// else{
//     alert("Hello, " + username )
// }

// var html = prompt("Do you know html? yes/no");
// var css = prompt("Do you know css? yes/no");
// var javaScript = prompt("Do you know javaScript? yes/no");

// console.log(html,css,javaScript,exp,age,city)

// if((html === "yes" || css === "yes") && javaScript === "yes"){
//     var exp = +prompt("Enter your exp?");
//     if(exp >= 2){
//         var age = +prompt("Enter your age?");
//        if(age >= 18){
//         var city = prompt("Enter your city name?");
//            if(city === "karachi"){
//                alert("You are hired")
//            }else{
//                alert("Karachi me ao")
//            }
//        }else{
//            alert("Bare ho hokar ao")
//        }
//    }else{
//        alert("Tajurba karke ao")
//    }
// }else {
//     alert("Bhai phele HTML,CSS and JavaScript sikh kar ao")
// }



var city1 = "Karachi";
var city2 = "Lahore"
var city3 = "Islamabad"


// var cities = ["Karachi","Lahore","Islambad","Peshawar",23232,true,undefined,NaN];

// console.log(cities[4])


var cities = [];

cities[0] = "Karachi";
cities[1] = "Lahore";
cities[2] = "Islamabad";

cities.pop()
cities.pop()
cities.pop()

cities.push("Karachi","Lahore","Islamabad","Peshawar")

cities.shift()

console.log(cities)
