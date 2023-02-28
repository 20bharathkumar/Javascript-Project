// document.addEventListener('load', dispTime);
setInterval(dispTime, 1000)
function dispTime(){
    let data = new Date();
    let dayNum = data.getDay()

    const days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    let day = days[dayNum];
    document.getElementById("day").innerHTML = day;
    let hour = data.getHours()
    document.getElementById("hr").innerHTML = hour;
    let ampm = hour >= 12 ? "PM" : "AM";
    document.getElementById("ampm").innerHTML = ampm;
   
    let min = data.getMinutes()
    min = min < 10 ? "0" + min : min;
    document.getElementById("min").innerHTML = min;
    let year = data.getFullYear()
    document.getElementById("yr").innerHTML = year;
    let sec = data.getSeconds()
    sec = sec < 10 ? "0" + sec : sec;
    document.getElementById("sec").innerHTML = sec;

}

dispTime()
