var now = new Date();
var firstDay = new Date('2023-11-21');
var toNow = now.getTime();
var toFirst = firstDay.getTime();
var passedTime = toNow - toFirst;
var passedDay = Math.round(passedTime/(1000 * 60 * 60 * 24));

function calcDate(days){
    var future = toFirst + days *(1000*60*60*24);
    var someday = new Date(future);
    var year = someday.getFullYear();
    var month = someday.getMonth();
    var date = someday.getDate();

    document.querySelector('#date'+days).innerText = year + "년" + month + '일' + date + '일';
}

document.querySelector("#accent").innerText = passedDay + '일';
calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);