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
var canKey = true;

var snake = { x: 5, y: 10 };
var tail = [];
//template: { x: 0, y: 0, d: 0}

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
function getKey(event) {
    if (canKey == true) {
        switch (event.keyCode) {
            case 37:
                if (LRUD != 1) {
                    LRUD = 0;
                }
                break;
            case 38:
                if (LRUD != 3) {
                    LRUD = 2;
                }
                break;
            case 39:
                if (LRUD != 0) {
                    LRUD = 1;
                }
                break;
            case 40:
                if (LRUD != 2) {
                    LRUD = 3;
                }
                break;
        }
        canKey = false;
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

/*
//runs the historic grid and current grid adjustments for tail extensions
function hist() {
    for (var i = 0; i < boardSize; i++) {
        for (var o = 0; o < boardSize; o++) {
            if (gridHist[i][o] == 2) {
                coordGrid[i][o] = 3;
            }
        }
    }
}

//runs the tail adjustments for every frame    FIXME: direction of travel is not saved between the moves,
function histCont() {                        //so it drags it as a block behind the snake, rather than a tail
    for (var i = 0; i < boardSize; i++) {
        for (var o = 0; o < boardSize; o++) {
            if (gridHist[i][o] == 3) {
                switch (LRUD) {
                    case 0:
                        coordGrid[i][o - 1] = 3;
                        coordGrid[i][o] = 0;
                        break;
                    case 1:
                        coordGrid[i][o + 1] = 3;
                        coordGrid[i][o] = 0;
                        break;
                    case 2:
                        coordGrid[i - 1][o] = 3;
                        coordGrid[i][o] = 0;
                        break;
                    case 3:
                        coordGrid[i + 1][o] = 3;
                        coordGrid[i][o] = 0;
                        break;
                }
            }
        }
    }
}
*/

//runs the cycle
function cycle() {
    //runs the movements
    switch (LRUD) {
        case 0:
            coordGrid[snake.y][snake.x] = 0;
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
    canKey = true;
}

//when called adds to score
function score() {
    scoreCount = scoreCount + 1;
    console.log("Score: " + scoreCount);
}

//moves the apple to a random location
function apple(random, x1, y1) {
    if (random === false) {
        coordGrid[x1][y1] = 1;
    } else {
        RfrAPE();
    }
}

//recursive function to randomize apple placement in environment
function RfrAPE() {
    var x2 = Math.floor(Math.random() * boardSize);
    var y2 = Math.floor(Math.random() * boardSize);
    if (coordGrid[x2][y2] == 0) {
        coordGrid[x2][y2] = 1;
    } else {
        RfrAPE();
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