var currentDate = new Date().getTime();
var eid1Date = new Date("july 10, 2022").getTime();
var eid2Date = new Date("july 11, 2022").getTime();
var eid3Date = new Date("july 12, 2022").getTime();
var diff1 =  eid1Date - currentDate;
var diff2 =  eid2Date - currentDate;
var diff3 =  eid3Date - currentDate;
var firstEid = Math.ceil(diff1/(1000*60*60*24));
var SecEid = Math.ceil(diff2/(1000*60*60*24));
var thirdEid = Math.ceil(diff3/(1000*60*60*24));
var firstDayHoursleft = Math.ceil(diff1/(1000*60*60));
var secHoursleft = Math.ceil(diff2/(1000*60*60));
var triedHoursLeft = Math.ceil(diff3/(1000*60*60));

// console.log(diff1)
console.log(firstEid,eid1Date)

var eid1 = document.getElementById("eid1st");

eid1st.innerHTML = "<h4> Days Left :" + firstEid+" Days" +"</h4>"+"<br>"+"Mintutes left : " + firstDayHoursleft +"Hours" ;

var eid2 = document.getElementById("eid2nd");

eid2.innerHTML = "<h4>  Days Left :" + SecEid+" Days"  +"</h4>"+"<br>"+"Mintutes left : " +secHoursleft;

var eid3 = document.getElementById("eid3rd");

eid3.innerHTML = "<h4>  Days Left :" + thirdEid+" Days"  +"</h4>"+"<br>"+"Mintutes left : " +triedHoursLeft+"<br>"+"End at :";


