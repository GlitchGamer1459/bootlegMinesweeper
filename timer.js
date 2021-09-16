var interval;
var startCounting = false;

var seconds = 0;
var minutes = 0;
var hours = 0;

var secondString;
var minuteString;
var hourString;

//when called, starts the timer
function startTimer() {
    startCounting = true;
    interval = setInterval(runTimer, 1000);
}

//block of code called by interval
function runTimer() {
    if (startCounting == true) {
        seconds = seconds + 1;
        if (seconds > 59) {
            minutes = minutes + 1;
            seconds = 0;
        }
        if (minutes > 59) {
            hours = hours + 1;
            minutes = 0;
        }
        secondString = String(seconds);
        minuteString = String(minutes);
        hourString = String(hours);
        if (seconds < 10) {
            secondString = '0' + String(seconds);
        }
        if (minutes < 10) {
            minuteString = '0' + String(minutes);
        }
        if (hours < 10) {
            hourString = '0' + String(hours);
        }
        document.getElementById('timerP').innerHTML = 'Timer: ' + hourString + ':' + minuteString + ':' + secondString
    }
}

//when called, stops timer
function stopTimer() {
    clearInterval(interval);
}

//when called, resets timer to 00:00:00
function resetTimer() {
    seconds = 0;
    minutes = 0;
    hours = 0;
}