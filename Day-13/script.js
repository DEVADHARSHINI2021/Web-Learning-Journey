const clock = document.getElementById("clock");
const alarmInput = document.getElementById("alarmTime");
const setAlarmBtn = document.getElementById("setAlarm");
const clearAlarmBtn = document.getElementById("clearAlarm");
const alarmStatus = document.getElementById("alarmStatus");

let alarmTime = null;
let alarmTriggered = false;

function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = "AM";

    if(hours >= 12){
        ampm = "PM";
    }

    let displayHour = hours % 12;

    if(displayHour === 0){
        displayHour = 12;
    }

    displayHour = String(displayHour).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");

    clock.textContent =
        `${displayHour}:${minutes}:${seconds} ${ampm}`;

    let current24Hour =
        String(hours).padStart(2,"0") + ":" +
        String(now.getMinutes()).padStart(2,"0");

    if(
        alarmTime &&
        current24Hour === alarmTime &&
        !alarmTriggered
    ){

        alarmTriggered = true;

        alert("⏰ Alarm Time!");

    }

}

setInterval(updateClock,1000);

updateClock();

setAlarmBtn.addEventListener("click",function(){

    if(alarmInput.value===""){
        alert("Please choose a time.");
        return;
    }

    alarmTime = alarmInput.value;
    alarmTriggered = false;

    alarmStatus.textContent =
        "Alarm set for " + alarmTime;

});

clearAlarmBtn.addEventListener("click",function(){

    alarmTime = null;

    alarmTriggered = false;

    alarmStatus.textContent =
        "No alarm set.";

});