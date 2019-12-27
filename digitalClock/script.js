setInterval(()=>{

    var cur = new Date();
    var hour = cur.getHours();
    var min = cur.getMinutes();
    var sec = cur.getSeconds();
    var per = "AM";

    if(hour >= 12) per ="PM";

    if(hour > 12 ) hour-=12;
    
    if(hour < 10) hour = "0" + hour;

    if(min < 10) min = "0" + min;

    if(sec < 10 ) sec = "0" + sec;

    var time = hour + ":" + min + ":" + sec + " " + per;

    var  Clock = document.getElementById('Clock');
        Clock.innerText = time ;
    

},1000);