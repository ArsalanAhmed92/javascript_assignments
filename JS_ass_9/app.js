// chApter 30 - 34 MATH METHODS
// question no. 1


var result=document.getElementById('result')
var now = new Date()
result.innerHTML=now

// question no. 2

var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
alert(month[now.getMonth()])

// question no. 3
var dayName = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var currentDay=dayName[now.getDay()].toString()
alert(`today is ${currentDay.slice(0,3)}`)

// question no. 4
if(dayName[now.getDay()].toString()==="Saturday" || dayName[now.getDay()].toString()==="Sunday"){
    alert('Today is Fun Day')
}else{
    alert('itS Working Day')
}
// question no. 5
if(now.getDate()==15 || now.getDate()< 14){
    alert('First Fifteen Days of the month”')
}else{
    alert('Last Fifteen Days of the month”')
}
alert(now.getTime()/60)

const hour = now.getHours()
if(hour <=12 ){
    alert('its Am')
}else{
    alert("its PM")
}