
setInterval(setTime, 1000);

const setHours = document.getElementById('hours');
const setMinutes = document.getElementById("minutes");
const setSeconds = document.getElementById("seconds");
const setAmPm = document.getElementById('ampm');




function setTime(){
const currentDate = new Date();
const currentHour = currentDate.getHours();
const  currentMinutes = currentDate.getMinutes();
const currentSeconds = currentDate.getSeconds();

if(currentHour >= 12){
  setAmPm.innerHTML = "PM"
}
else {
    setAmPm.innerHTML = "AM";
}
if(currentMinutes < 10){
    setMinutes.innerHTML = "0" + currentMinutes;
}
else {
    setMinutes.innerHTML = currentMinutes;
}
if(currentSeconds < 10){
    setSeconds.innerHTML = "0" + currentSeconds;
}

else {
    setSeconds.innerHTML = currentSeconds;

}
setHours.innerHTML = currentHour % 12;

}
setTime();


