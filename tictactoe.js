var start;
var firstPlayerIs;
var cycle = 0;
var win = 'null';
var clickCount = 0;

//when called, opens the board to interaction
function startGame() {
    start = true;
    firstPlayerIs = document.getElementById('firstPlayer').value;
    if (firstPlayerIs == 'X' || firstPlayerIs == 'x') {
        cycle = 0;
    } else if (firstPlayerIs == 'O' || firstPlayerIs == 'o') {
        cycle = 1;
    } else {
        cycle = 0;
        console.log('invalid input, set to default X');
    }
}

//calls when a tile is clicked
function onClick(tileID) {
    if (win == 'null' && start == true) {
        if (cycle == 0
            && document.getElementById(tileID).innerHTML != 'X'
            && document.getElementById(tileID).innerHTML != 'O') {
            document.getElementById(tileID).innerHTML = 'X';
            cycle = 1;
            clickCount = clickCount + 1;
            winState();
        } else if (cycle == 1
            && document.getElementById(tileID).innerHTML != 'X'
            && document.getElementById(tileID).innerHTML != 'O') {
            document.getElementById(tileID).innerHTML = 'O';
            cycle = 0;
            clickCount = clickCount + 1;
            winState();
        }
    }
}

//when called, checks tiles for a row of 3
function winState() {
    //check top row for x
    if (document.getElementById('tile1').innerHTML == 'X'
        && document.getElementById('tile2').innerHTML == 'X'
        && document.getElementById('tile3').innerHTML == 'X') {
        win = 'X';
    }
    //check middle row for x
    if (document.getElementById('tile4').innerHTML == 'X'
        && document.getElementById('tile5').innerHTML == 'X'
        && document.getElementById('tile6').innerHTML == 'X') {
        win = 'X';
    }
    //check bottom row for x
    if (document.getElementById('tile7').innerHTML == 'X'
        && document.getElementById('tile8').innerHTML == 'X'
        && document.getElementById('tile9').innerHTML == 'X') {
        win = 'X';
    }
    //check left column for x
    if (document.getElementById('tile1').innerHTML == 'X'
        && document.getElementById('tile4').innerHTML == 'X'
        && document.getElementById('tile7').innerHTML == 'X') {
        win = 'X';
    }
    //check middle column for x
    if (document.getElementById('tile2').innerHTML == 'X'
        && document.getElementById('tile5').innerHTML == 'X'
        && document.getElementById('tile8').innerHTML == 'X') {
        win = 'X';
    }
    //check right column for x
    if (document.getElementById('tile3').innerHTML == 'X'
        && document.getElementById('tile6').innerHTML == 'X'
        && document.getElementById('tile9').innerHTML == 'X') {
        win = 'X';
    }
    //check left down diagonal for x
    if (document.getElementById('tile1').innerHTML == 'X'
        && document.getElementById('tile5').innerHTML == 'X'
        && document.getElementById('tile9').innerHTML == 'X') {
        win = 'X';
    }
    //check right down diagonal for x
    if (document.getElementById('tile3').innerHTML == 'X'
        && document.getElementById('tile5').innerHTML == 'X'
        && document.getElementById('tile7').innerHTML == 'X') {
        win = 'X';
    }
    //check top row for o
    if (document.getElementById('tile1').innerHTML == 'O'
        && document.getElementById('tile2').innerHTML == 'O'
        && document.getElementById('tile3').innerHTML == 'O') {
        win = 'O';
    }
    //check middle row for o
    if (document.getElementById('tile4').innerHTML == 'O'
        && document.getElementById('tile5').innerHTML == 'O'
        && document.getElementById('tile6').innerHTML == 'O') {
        win = 'O';
    }
    //check bottom row for o
    if (document.getElementById('tile7').innerHTML == 'O'
        && document.getElementById('tile8').innerHTML == 'O'
        && document.getElementById('tile9').innerHTML == 'O') {
        win = 'O';
    }
    //check left column for o
    if (document.getElementById('tile1').innerHTML == 'O'
        && document.getElementById('tile4').innerHTML == 'O'
        && document.getElementById('tile7').innerHTML == 'O') {
        win = 'O';
    }
    //check middle column for o
    if (document.getElementById('tile2').innerHTML == 'O'
        && document.getElementById('tile5').innerHTML == 'O'
        && document.getElementById('tile8').innerHTML == 'O') {
        win = 'O';
    }
    //check right column for o
    if (document.getElementById('tile3').innerHTML == 'O'
        && document.getElementById('tile6').innerHTML == 'O'
        && document.getElementById('tile9').innerHTML == 'O') {
        win = 'O';
    }
    //check left down diagonal for o
    if (document.getElementById('tile1').innerHTML == 'O'
        && document.getElementById('tile5').innerHTML == 'O'
        && document.getElementById('tile9').innerHTML == 'O') {
        win = 'O';
    }
    //check right down diagonal for o
    if (document.getElementById('tile3').innerHTML == 'O'
        && document.getElementById('tile5').innerHTML == 'O'
        && document.getElementById('tile7').innerHTML == 'O') {
        win = 'O';
    }
    if (win != 'null') {
        document.getElementById('notify').innerHTML = 'Player ' + win + ' wins!';
        start = false;
    }
    catsGame();
}

//checks for a full board with no win
function catsGame() {
    if (win == 'null' && clickCount == 9) {
        start = false;
        document.getElementById('notify').innerHTML = 'It\'s a Cat\'s game!'
    }
}

//when called, reset the game variables
function reset() {
    start = false;
    firstPlayerIs = '';
    cycle = 0;
    win = 'null';
    clickCount = 0;
    document.getElementById('tile1').innerHTML = ' ';
    document.getElementById('tile2').innerHTML = ' ';
    document.getElementById('tile3').innerHTML = ' ';
    document.getElementById('tile4').innerHTML = ' ';
    document.getElementById('tile5').innerHTML = ' ';
    document.getElementById('tile6').innerHTML = ' ';
    document.getElementById('tile7').innerHTML = ' ';
    document.getElementById('tile8').innerHTML = ' ';
    document.getElementById('tile9').innerHTML = ' ';
    document.getElementById('notify').innerHTML = 'This will notify you of events in the game.';
}