


var setTime=new Date("25July,2030 19:5:6").getTime();







var x=setInterval(function(){

var TodayTime=new Date().getTime();
var distance=setTime-TodayTime;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var d=document.getElementById("day");


    var h=document.getElementById("hours");

    var s=document.getElementById("minutes");


document.getElementById('day').innerHTML=days+" Days";

document.getElementById('hours').innerHTML=hours+ " Hours ";


document.getElementById('minutes').innerHTML=minutes+ " Minutes ";
document.getElementById('seconds').innerHTML= +seconds + " Seconds";

if(distance<0){



    clearInterval(x);


    document.getElementById("Time").innerHTML="Expired";

}


},1000);



//------------------changing bg logic--------------//


