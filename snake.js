var boardSize = 21;
var counter = 0;

var table;
var tRow;
var tTile;
var tText;

const coordGrid = [];

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

const snake = { x: 5, y: 10 };
const tail = [
    { x: 4, y: 10 },
    { x: 3, y: 10 }
];
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
        reset();
    }
}

//when called, starts the game
function start() {
    buildBoard();
    apple(false, 10, 16);
    update();
    startCycle();
}

//when called, resets the board
function reset() {
    clearInterval(interval);
    table = document.getElementById("Stable");
    table.remove();
    snake.x = 5;
    snake.y = 10;
    while (tail.length > 2) {
        tail.pop();
    }
    tail[0] = { x: 4, y: 10 };
    tail[1] = { x: 3, y: 10 };
    while (coordGrid.length > 0) {
        coordGrid.pop();
    }
    startGame = false;
    winState = 0;
    LRUD = undefined;
    scoreCount = 0;
    canKey = true;
    counter = 0;
    document.getElementById("notify").innerHTMl = "This text will notify you of events in game.";
    document.getElementById("score").innerHTML = "Score: ";
}

//gets the Unicode key and triggers directional changes
function getKey(event) {
    if (canKey == true) {
        switch (event.keyCode) {
            case 65:
                if (LRUD != 1) {
                    LRUD = 0;
                }
                break;
            case 87:
                if (LRUD != 3) {
                    LRUD = 2;
                }
                break;
            case 68:
                if (LRUD != 0) {
                    LRUD = 1;
                }
                break;
            case 83:
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

//when called adds to score
function score(internalLRUD) {
    scoreCount = scoreCount + 1;
    document.getElementById("score").innerHTML = "Score: " + scoreCount;
    switch (internalLRUD) {
        case 0:
            tail.push({ x: snake.x + 1, y: snake.y });
            break;
        case 1:
            tail.push({ x: snake.x - 1, y: snake.y });
            break;
        case 2:
            tail.push({ x: snake.x, y: snake.y + 1 });
            break;
        case 3:
            tail.push({ x: snake.x, y: snake.y - 1 });
            break;
    }
    update();
}

//adjusts the tail array to follow the snake object
function moveTail() {
    for (var i = 0; i < tail.length; i++) {
        coordGrid[tail[i].y][tail[i].x] = 0;
    }
    tail.pop();
    tail.unshift({ x: snake.x, y: snake.y });
    for (var i = 0; i < tail.length; i++) {
        coordGrid[tail[i].y][tail[i].x] = 3;
    }
}

//runs the cycle
function cycle() {
    //runs the movements
    switch (LRUD) {
        case 0:
            coordGrid[snake.y][snake.x] = 0;
            moveTail();
            snake.x--;
            if (snake.x < 0) {
                snake.x++;
                document.getElementById("notify").innerHTML = "You lose.";
                clearInterval(interval);
            } else if (coordGrid[snake.y][snake.x] == 0) {
                coordGrid[snake.y][snake.x] = 2;
            } else if (coordGrid[snake.y][snake.x] == 1) {
                score(LRUD);
                coordGrid[snake.y][snake.x] = 2;
                apple(true);
            } else {
                document.getElementById("notify").innerHTML = "You lose.";
                clearInterval(interval);
            }
            break;
        case 1:
            coordGrid[snake.y][snake.x] = 0;
            moveTail();
            snake.x++;
            if (snake.x > (boardSize - 1)) {
                snake.x--;
                document.getElementById("notify").innerHTML = "You lose.";
                clearInterval(interval);
            } else if (coordGrid[snake.y][snake.x] == 0) {
                coordGrid[snake.y][snake.x] = 2;
            } else if (coordGrid[snake.y][snake.x] == 1) {
                score(LRUD);
                coordGrid[snake.y][snake.x] = 2;
                apple(true);
            } else {
                document.getElementById("notify").innerHTML = "You lose.";
                clearInterval(interval);
            }
            break;
        case 2:
            coordGrid[snake.y][snake.x] = 0;
            moveTail();
            snake.y--;
            if (snake.y < 0) {
                snake.y++;
                document.getElementById("notify").innerHTML = "You lose.";
                clearInterval(interval);
            } else if (coordGrid[snake.y][snake.x] == 0) {
                coordGrid[snake.y][snake.x] = 2;
            } else if (coordGrid[snake.y][snake.x] == 1) {
                score(LRUD);
                coordGrid[snake.y][snake.x] = 2;
                apple(true);
            } else {
                document.getElementById("notify").innerHTML = "You lose.";
                clearInterval(interval);
            }
            break;
        case 3:
            coordGrid[snake.y][snake.x] = 0;
            moveTail();
            snake.y++;
            if (snake.y > (boardSize - 1)) {
                snake.y--;
                document.getElementById("notify").innerHTML = "You lose.";
                clearInterval(interval);
            } else if (coordGrid[snake.y][snake.x] == 0) {
                coordGrid[snake.y][snake.x] = 2;
            } else if (coordGrid[snake.y][snake.x] == 1) {
                score(LRUD);
                coordGrid[snake.y][snake.x] = 2;
                apple(true);
            } else {
                document.getElementById("notify").innerHTML = "You lose.";
                clearInterval(interval);
            }
            break;
    }
    update();
    canKey = true;
}

//moves the apple to a random location
function apple(random, x1, y1) {
    let running = true;
    if (random === false) {
        coordGrid[x1][y1] = 1;
    } else {
        let x2 = Math.floor(Math.random() * boardSize);
        let y2 = Math.floor(Math.random() * boardSize);
        while (running) {
            if (coordGrid[x2][y2] == 0) {
                coordGrid[x2][y2] = 1;
                running = false;
            } else {
                x2 = Math.floor(Math.random() * boardSize);
                y2 = Math.floor(Math.random() * boardSize);
            }
        }
    }
}

//updates the DOM board to match the coordGrid
function update() {
    counter = 0;
    coordGrid[snake.y][snake.x] = 2;
    for (var i = 0; i < tail.length; i++) {
        coordGrid[tail[i].y][tail[i].x] = 3;
    }
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
