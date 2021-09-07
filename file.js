//placeholder variables
var a = 0;
var b;
var c;
var d;
var e;
var f;
var g;
var h;
var j;
var gridBuilt = false;
var w;
var x;
var y = 0;
var z;
var t;

//var for board size
var boardSize;

//var for number of mines
var mineNumber;

//array for cell objects
var board = [

];

//prompts the user for needed values
function onLoad() {
    boardSize = prompt("enter board size as whole # between 10 & 20");
    mineNumber = prompt("enter number of mines as whole # between 10 & 99")
}

//builds the visible board in index.html
function buildGrid() {
    if (gridBuilt === false) {
        var w = document.createElement("TABLE");
        w.setAttribute("id", "myTable");
        document.body.appendChild(w);

        for (var i = 0; i < boardSize; i++) {
            x = document.createElement("TR");
            x.setAttribute("id", "myTr" + i);
            document.getElementById("myTable").appendChild(x);

        }

        for (var i = 0; i < boardSize; i++) {
            for (var o = 0; o < boardSize; o++) {
                y = y + 1;
                z = document.createElement("TD");
                z.setAttribute("id", "myTd" + y);
                z.addEventListener("click", function () {
                    myFunction(document.getElementById("myTd" + y));
                });
                t = document.createTextNode("cell" + y);
                z.appendChild(t);
                document.getElementById("myTr" + o).appendChild(z);
            }
        }
    }
    gridBuilt = true;
}

//generates a 2d array of cell objects
function generateValues() {
    //create subarrays
    for (var i = 0; i < boardSize; i++) {
        board.push([]);
    }

    //generate cellX objects
    for (var iteration = 0; iteration < boardSize; iteration++) {
        for (var o = 0; o < boardSize; o++) {
            a = a + 1;
            eval('var cell' + a + ' = {tileValue:0, tileState:0, tileID:' + a + '}');
            board[iteration][o] = eval('cell' + a);
        }
    }

    //place mines with edge occlusion
    for (var i = 0; i < mineNumber; i++) {
        h = Math.floor((Math.random() * (boardSize - 2)) + 1);
        j = Math.floor((Math.random() * (boardSize - 2)) + 1);
        b = board[h][j];
        if (eval('cell' + b.tileID + '.tileValue != 9')) {
            eval('cell' + b.tileID + '.tileValue = 9;');
        }
    }

    //set adjacent tile values
    for (var i = 0; i < boardSize; i++) {
        for (var o = 0; o < boardSize; o++) {
            c = board[i][o];
            if (c.tileValue === 9) {
                console.log("found");
                d = i;
                e = o;
                d = d - 1;
                f = board[d][e];
                if (eval('cell' + f.tileID + '.tileValue') != 9) {
                    eval('cell' + f.tileID + '.tileValue += 1');
                }
                e = e - 1;
                f = board[d][e];
                if (eval('cell' + f.tileID + '.tileValue') != 9) {
                    eval('cell' + f.tileID + '.tileValue += 1');
                }
                d = d + 1;
                f = board[d][e];
                if (eval('cell' + f.tileID + '.tileValue') != 9) {
                    eval('cell' + f.tileID + '.tileValue += 1');
                }
                d = d + 1;
                f = board[d][e];
                if (eval('cell' + f.tileID + '.tileValue') != 9) {
                    eval('cell' + f.tileID + '.tileValue += 1');
                }
                e = e + 1;
                f = board[d][e];
                if (eval('cell' + f.tileID + '.tileValue') != 9) {
                    eval('cell' + f.tileID + '.tileValue += 1');
                }
                e = e + 1;
                f = board[d][e];
                if (eval('cell' + f.tileID + '.tileValue') != 9) {
                    eval('cell' + f.tileID + '.tileValue += 1');
                }
                d = d - 1;
                f = board[d][e];
                if (eval('cell' + f.tileID + '.tileValue') != 9) {
                    eval('cell' + f.tileID + '.tileValue += 1');
                }
                d = d - 1;
                f = board[d][e];
                if (eval('cell' + f.tileID + '.tileValue') != 9) {
                    eval('cell' + f.tileID + '.tileValue += 1');
                }
            }
        }
    }

    //log board
    for (var column in board) {
        console.log(board[column]);
    }

    //log mine positions
    for (var i = 0; i < boardSize; i++) {
        for (var o = 0; o < boardSize; o++) {
            g = board[i][o];
            if (g.tileValue === 9) {
                console.log(g.tileID);
            }
        }
    }
}

function myFunction(gridId) {
    console.log(gridId);
}