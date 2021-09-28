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

var snake = { x: 5, y: 10 };

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
    snakeGen();
    update();
}

//gets the Unicode key and triggers direction functions
function getKey(keyValue) {
    if (keyValue.keyCode == 37) {
        left();
    } else if (keyValue.keyCode == 38) {
        up();
    } else if (keyValue.keyCode == 39) {
        right();
    } else if (keyValue.keyCode == 40) {
        down();
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
    interval = setInterval(cycle, 750);
}

//runs the cycle
function cycle() {
    switch (LRUD) {
        case 0:
            snake.x--;
            coordGrid[snake.y][snake.x] = 2;
            break;
        case 1:
            snake.x++;
            coordGrid[snake.y][snake.x] = 2;
            break;
        case 2:
            snake.y--;
            coordGrid[snake.y][snake.x] = 2;
            break;
        case 3:
            snake.y++;
            coordGrid[snake.y][snake.x] = 2;
            break;
    }
}

//changes operating direction to left
function left() {
    LRUD = 0;
}

//changes operating direction to right
function right() {
    LRUD = 1;
}

//changes operating direction to up
function up() {
    LRUD = 2;
}

//changes operating direction to down
function down() {
    LRUD = 3;
}

//moves the apple to a random location
function apple(random, x1, y1) {
    if (random === false) {
        coordGrid[x1][y1] = 1;
    } else {
        var x2 = Math.floor(Math.random() * boardSize);
        var y2 = Math.floor(Math.random() * boardSize);
        coordGrid[x2][y2] = 1;
    }
}

//places the snake head on the grid;
function snakeGen() {
    coordGrid[snake.y][snake.x] = 2;
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

            }
        }
    }
}