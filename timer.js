var interval;
var startCounting = false;

var seconds = 0;
var minutes = 0;
var hours = 0;

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
        document.getElementById("timerP").innerHTML = 'Timer: ' + hours + ':' + minutes + ':' + seconds;
    } else {
        return;
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