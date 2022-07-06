// ass_7
// chapter 20 - 25
// question no 1


// user1 = prompt("Enter your first name ..");
// user2 = prompt("Enter your last name ..");
// var fullName = user1+" "+user2;
// document.write("Welcome"+" "+user1+" "+user2+"!" );


// ass_7
// chapter 20 - 25
// question no 2

// var a = prompt("Enter your favorite mobile phone model name!");
// document.write("My Favorite mobile phone is : "+ a+"."+"<br>"+"length of string is "+ a.length+"." );


// ass_7
// chapter 20 - 25
// question no 3.

// var me = "Pakistani";
// document.write("String :"+ me  +"<br>"+"Index of 'n' :"+ me.length);

// ass_7
// chapter 20 - 25
// question no 4.

//  var text = "Hello World";
//  document.write("String :"+ text  +"<br>"+"Last Index of 'l' :"+ text.lastIndexOf.length);

// ass_7
// chapter 20 - 25
// question no 5.

// var me = "Pakistani";
// console.log(me.indexOf("i"))
// document.write("String :"+ me  +"<br>"+"Character at Index 3 :"+ me.indexOf("i"));

// ass_7
// chapter 20 - 25
// question no 6.

// string concat() method.


// ass_7
// chapter 20 - 25
// question no 7.

// var city = "Hyderabad";
// document.write("City :"+ city +"<br>"+"After replacment :"+city.replace("Hyder","Islam"));


// ass_7
// chapter 20 - 25
// question no 8.

// var message = "“Ali and Sami are best friends. They play cricket and football together.”";
// document.write("<i>"+message.replace(/and/g,"&")+"</i>");
var message = "Ali and Sami are best friends. They play cricket and football together.";

// ass_7
// chapter 20 - 25
// question no 9.

// var num = 472;
// var numString = "472";

// document.write("Value =" + numString +"<br>"+"Type = String"+"<br>"+"Value =" + num +"<br>"+"Type = Number");

// ass_7
// chapter 20 - 25
// question no 10.

// var user = prompt("Enter Any Value in small letters").toLocaleUpperCase();
// document.write("Your Input was "+ user +" in Capital letters.");

// ass_7
// chapter 20 - 25
// question no 11.

// var user = "javascript"
// document.write("User Input :"+ user + "<br>" + " Tittle Case : "+ user.toUpperCase("j"));


// ass_7
// chapter 20 - 25
// question no 12.

// var num = 35.36 ;
// document.write("Number : "+num+"<br>"+"Result : 3536");

// ass_7
// chapter 20 - 25
// question no 13.

var userName=prompt("Enter your Input: ");
checkValidName(userName);
function checkValidName(un)
{
    var message;
    var split=[];
    var arr=[];
    for(var i=0;i<un.length;i++)
    {
        split[i]=un.split("&nbsp;");
        arr[i]=un.charCodeAt(i);
        if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
        {
                message="Correct User Name";
        }
        while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
        {
            alert("please enter a valid userName");                                                                                                                   
            userName=prompt("Enter your Input: ");
            split[i]=un.split("&nbsp;");
            arr[i]=un.charCodeAt(i);
            if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
            {
                message="correct in";
                break;
            }
        }

    }
    alert(message);
}

// ass_7
// chapter 20 - 25
// question no 14.

// var a = ["cake","apple pie","cookie","chips","patties"]

// var user = prompt("Welcome to ABC Bkery what do you want to order sir/ma'am")

// var b = a.indexOf(user)

// if(b<0){
//     alert("we are sorry"+  user + "is not available in our bakery")
// }
// else{
//     alert(user +"is available at index "+ b +" in our bakery") 
// }


// ass_7
// chapter 20 - 25
// question no 15.







// ass_7
// chapter 20 - 25
// question no 16.

// var university = "University of Karachi";

// var splitiedvalues = university.split('')
// for(i=0; i<splitiedvalues.length; i++){

//     document.write(splitiedvalues[[i]] + "<br>")};


// ass_7
// chapter 20 - 25
// question no 17.


// var character = "Pakistan";

// var LastChar = (character.length)-1;

// document.write(character[LastChar]);






// ass_7
// chapter 20 - 25
// question no 18.

// var n = "The quick brown fox jumps over the lazy dog.";

// var lowest = n.toLowerCase()
// var splitedvalue = lowest.split(" ");
// var coutString = 'the';

// var  count = 0;
// for (var i = 0; i < splitedvalue.length; i++)
// {
// if (coutString==(splitedvalue[i]))
//     count++;
// }

// document.write("Text : " + n + "<br>")
// document.write("There are " + count + "occurrence(s) of the word 'the' ");

