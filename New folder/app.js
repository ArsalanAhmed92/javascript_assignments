// for (var i = 0; i < 100000; i++) {
//     if (i === 10) {
//         break
//     }
//     console.log(i)
// }
// console.log(i);




var search = prompt("Enter your food name");
var a = false;

var food = ["pizza", "biryani", "qourma", "karhai", "daal", "sabzi", "burger"];
var meetha = [" icecream" + " ,doodh dulari" + " ,kheer" + " ,rabri" + " ,gulab jaman" + " ,cold drink"+" ,naan "+" ,chapati "+" ,raita"+" ,salad"+" ,taftaan"];

for (var i = 0; i < food.length,meetha.length ; i++) {
    if (search === food[i]) {
        document.write("<h1>" + (i + 1) + ")" + food[i] + " is Available " + "</h1>"+"We Also Have "+"<br />"+meetha);
        a = true;
        break;
    }
}

 if (a === false){
    document.write("<h1>" + search + " is not available" + "</h1>");
}