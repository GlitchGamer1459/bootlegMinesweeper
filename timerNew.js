//object constructor for Timer object
function Timer(timerTag, timerText) {
    this.interval;

    var seconds = 0;
    var minutes = 0;
    var hours = 0;

    var secondSt;
    var minuteSt;
    var hourSt;

    //declares the interval to run the timer
    this.start = function () {
        this.interval = setInterval(this.run, 1000);
        if (timerText === undefined) {
            timerText = "";
        }
    }

    //when called, increments timer by 1s and formats it
    this.run = function () {
        seconds = seconds + 1;
        if (seconds == 59) {
            minutes = minutes + 1;
            seconds = 0;
        }
        if (minutes == 59) {
            hours = hours + 1;
            minutes = 0;
        }
        secondSt = String(seconds);
        minuteSt = String(minutes);
        hourSt = String(hours);
        if (seconds < 10) {
            secondSt = "0" + String(seconds);
        }
        if (minutes < 10) {
            minuteSt = "0" + String(minutes);
        }
        if (hours < 10) {
            hourSt = "0" + String(hours);
        }
        document.getElementById(timerTag).innerHTML = timerText + hourSt + ":" + minuteSt + ":" + secondSt;
    }

    //when called, stops the timer and may reset timer
    this.stop = function (reset) {
        clearInterval(this.interval);
        if (reset == true) {
            this.reset();
        }
    }

    //when called, resets timer
    this.reset = function () {
        seconds = 0;
        minutes = 0;
        hours = 0;
        secondSt = undefined;
        minuteSt = undefined;
        hourSt = undefined;
        document.getElementById(timerTag).innerHTML = timerText + "00:00:00";
    }
}