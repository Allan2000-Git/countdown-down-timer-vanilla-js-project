const numOfDays = document.getElementById("days");
const numOfHours = document.getElementById("hours");
const numOfMinutes = document.getElementById("minutes");
const numOfSeconds = document.getElementById("seconds");

const target = "10 Nov 2023";

function countDownTimer(){
    const targetDate = new Date(target);
    const currentDate = new Date();

    //divide by 1000, because its in milliseconds
    const totalSecondRemaining = (targetDate - currentDate)/1000;
    
    const days = Math.floor(totalSecondRemaining/3600/24);
    const hours = Math.floor(totalSecondRemaining/3600)%24;
    const minutes = Math.floor(totalSecondRemaining/60)%60;
    const seconds = Math.floor(totalSecondRemaining)%60;

    // console.log(numOfDays);
    numOfDays.textContent = days;
    numOfHours.textContent = hours;
    numOfMinutes.textContent = minutes;
    numOfSeconds.textContent = seconds;
}

countDownTimer();

setInterval(countDownTimer,1000);