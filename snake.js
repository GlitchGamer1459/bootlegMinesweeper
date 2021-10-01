var boardSize = 21;
var counter = 0;

var table;
var tRow;
var tTile;
var tText;

var coordGrid = [];

var startButton;
var resetButton;
var startText;
var resetText;

var startGame = false;
var winState = 0;

var interval;
var LRUD;
var scoreCount = 0;

var snake = { x: 5, y: 10 };
var sHist1 = { x: 5, y: 10 };
var sHist2 = { x: 5, y: 10 };

//calls on the loading of the page
function load() {
    window.addEventListener('keydown', getKey, false);
    startButton = document.createElement('button');
    startButton.setAttribute('id', 'start');
    startText = document.createTextNode('Start Button');
    startButton.appendChild(startText);
    startButton.addEventListener('click', function () {
        buttonSwap();
    });
    resetButton = document.createElement('button');
    resetButton.setAttribute('id', 'reset');
    resetText = document.createTextNode('Reset Button');
    resetButton.appendChild(resetText);
    resetButton.addEventListener('click', function () {
        buttonSwap();
    });
    document.getElementById('buttons').appendChild(startButton);
}

//flips which button is active
function buttonSwap() {
    if (startGame == false) {
        startGame = true;
        var remove = document.getElementById('buttons');
        remove.removeChild(remove.childNodes[1]);
        document.getElementById('buttons').appendChild(resetButton);
        start();
    } else if (startGame == true) {
        startGame = false;
        var remove = document.getElementById('buttons');
        remove.removeChild(remove.childNodes[1]);
        document.getElementById('buttons').appendChild(startButton);
    }
}

//when called, starts the game
function start() {
    buildBoard();
    apple(false, 10, 16);
    update();
    startCycle();
}

//gets the Unicode key and triggers directional changes
function getKey(keyValue) {
    if (keyValue.keyCode == 37) {
        LRUD = 0;
    } else if (keyValue.keyCode == 38) {
        LRUD = 2;
    } else if (keyValue.keyCode == 39) {
        LRUD = 1;
    } else if (keyValue.keyCode == 40) {
        LRUD = 3;
    }
}

//builds the board the snake plays on
function buildBoard() {
    //creates the tiles in DOM
    if (startGame == true) {
        table = document.createElement('table');
        table.setAttribute('class', 'Sboard');
        table.setAttribute('id', 'Stable');
        document.getElementById('boardHolder').appendChild(table);

        for (var i = 1; i < (boardSize + 1); i++) {
            tRow = document.createElement('tr');
            tRow.setAttribute('id', 'tr' + i);
            document.getElementById('Stable').appendChild(tRow);
        }

        for (var i = 1; i < (boardSize + 1); i++) {
            for (var o = 0; o < boardSize; o++) {
                counter++;
                tTile = document.createElement('td');
                tTile.setAttribute('id', counter);
                tText = document.createTextNode('');
                tTile.appendChild(tText);
                document.getElementById('tr' + i).appendChild(tTile);
            }
        }
        //creates the coordinate array
        for (var i = 0; i < boardSize; i++) {
            coordGrid.push([]);
        }
        for (var i = 0; i < boardSize; i++) {
            for (var o = 0; o < boardSize; o++) {
                coordGrid[i][o] = 0;
            }
        }
    }
}

//when called, starts a cycle and takes L-R-U-D inputs
function startCycle() {
    interval = setInterval(cycle, 200);
}

//runs the cycle
function cycle() {
    switch (LRUD) {
        case 0:
            coordGrid[snake.y][snake.x] = 0;
            coordGrid[sHist1.y][sHist1.x] = 0;
            coordGrid[sHist2.y][sHist2.x] = 0;
            sHist2.x = sHist1.x;
            sHist2.y = sHist1.y;
            sHist1.x = snake.x;
            sHist1.y = snake.y;
            coordGrid[sHist1.y][sHist1.x] = 3;
            coordGrid[sHist2.y][sHist2.x] = 3;
            snake.x--;
            if (snake.x < 0) {
                snake.x++;
                console.log("You lose");
                clearInterval(interval);
            } else if (coordGrid[snake.y][snake.x] == 0) {
                coordGrid[snake.y][snake.x] = 2;
            } else if (coordGrid[snake.y][snake.x] == 1) {
                score();
                coordGrid[snake.y][snake.x] = 2;
                apple(true);
            } else {
                console.log("You lose");
                clearInterval(interval);
            }
            break;
        case 1:
            coordGrid[snake.y][snake.x] = 0;
            coordGrid[sHist1.y][sHist1.x] = 0;
            coordGrid[sHist2.y][sHist2.x] = 0;
            sHist2.x = sHist1.x;
            sHist2.y = sHist1.y;
            sHist1.x = snake.x;
            sHist1.y = snake.y;
            coordGrid[sHist1.y][sHist1.x] = 3;
            coordGrid[sHist2.y][sHist2.x] = 3;
            snake.x++;
            if (snake.x > (boardSize - 1)) {
                snake.x--;
                console.log("You lose");
                clearInterval(interval);
            } else if (coordGrid[snake.y][snake.x] == 0) {
                coordGrid[snake.y][snake.x] = 2;
            } else if (coordGrid[snake.y][snake.x] == 1) {
                score();
                coordGrid[snake.y][snake.x] = 2;
                apple(true);
            } else {
                console.log("You lose");
                clearInterval(interval);
            }
            break;
        case 2:
            coordGrid[snake.y][snake.x] = 0;
            coordGrid[sHist1.y][sHist1.x] = 0;
            coordGrid[sHist2.y][sHist2.x] = 0;
            sHist2.x = sHist1.x;
            sHist2.y = sHist1.y;
            sHist1.x = snake.x;
            sHist1.y = snake.y;
            coordGrid[sHist1.y][sHist1.x] = 3;
            coordGrid[sHist2.y][sHist2.x] = 3;
            snake.y--;
            if (snake.y < 0) {
                snake.y++;
                console.log("You lose");
                clearInterval(interval);
            } else if (coordGrid[snake.y][snake.x] == 0) {
                coordGrid[snake.y][snake.x] = 2;
            } else if (coordGrid[snake.y][snake.x] == 1) {
                score();
                coordGrid[snake.y][snake.x] = 2;
                apple(true);
            } else {
                console.log("You lose");
                clearInterval(interval);
            }
            break;
        case 3:
            coordGrid[snake.y][snake.x] = 0;
            coordGrid[sHist1.y][sHist1.x] = 0;
            coordGrid[sHist2.y][sHist2.x] = 0;
            sHist2.x = sHist1.x;
            sHist2.y = sHist1.y;
            sHist1.x = snake.x;
            sHist1.y = snake.y;
            coordGrid[sHist1.y][sHist1.x] = 3;
            coordGrid[sHist2.y][sHist2.x] = 3;
            snake.y++;
            if (snake.y > (boardSize - 1)) {
                snake.y--;
                console.log("You lose");
                clearInterval(interval);
            } else if (coordGrid[snake.y][snake.x] == 0) {
                coordGrid[snake.y][snake.x] = 2;
            } else if (coordGrid[snake.y][snake.x] == 1) {
                score();
                coordGrid[snake.y][snake.x] = 2;
                apple(true);
            } else {
                console.log("You lose");
                clearInterval(interval);
            }
            break;
    }
    update();
}

//when called adds to score
function score() {
    scoreCount = scoreCount + 1;
    console.log("Score: " + scoreCount);
}

//moves the apple to a random location
function apple(random, x1, y1) {
    for (var i = 0; i < boardSize; i++) {
        for (var o = 0; o < boardSize; o++) {
            if (coordGrid[i][o] == 1) {
                coordGrid[i][o] = 0;
            }
        }
    }
    if (random === false) {
        coordGrid[x1][y1] = 1;
    } else {
        dick();
    }
}

//yeet
function dick() {
    var x2 = Math.floor(Math.random() * boardSize);
    var y2 = Math.floor(Math.random() * boardSize);
    if (coordGrid[x2][y2] == 0) {
        coordGrid[x2][y2] = 1;
    } else {
        dick();
    }
}

//updates the DOM board to match the coordGrid
function update() {
    counter = 0;
    coordGrid[snake.y][snake.x] = 2;
    for (var i = 0; i < boardSize; i++) {
        for (var o = 0; o < boardSize; o++) {
            counter++;
            if (coordGrid[i][o] == 0) {
                document.getElementById(counter).style.backgroundColor = 'lightgrey';
            } else if (coordGrid[i][o] == 1) {
                document.getElementById(counter).style.backgroundColor = 'red';
            } else if (coordGrid[i][o] == 2) {
                document.getElementById(counter).style.backgroundColor = 'lime';
            } else if (coordGrid[i][o] == 3) {
                document.getElementById(counter).style.backgroundColor = 'green';
            }
        }
    }
}