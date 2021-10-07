const BOARDSIZE = 8;

const grid = [];

var counter = 0;
var table;
var tRow;
var tTile;
var tText;

var active = false;

const whiteT = [
    { type: "pawn", position: 49, id: 1 }
];

//calls when page loads
function load() {
    buildBoard();
    update();
}

//creates the container for the pieces
function buildBoard() {
    //creates the storage grid
    for (var i = 0; i < BOARDSIZE; i++) {
        grid.push([ 0, 0, 0, 0, 0, 0, 0, 0,]);
    }
    //creates visible board
    table = document.createElement("table");
    table.setAttribute("class", "Cboard");
    table.setAttribute("id", "Ctable");
    document.getElementById("boardHolder").appendChild(table);

    for (var i = 1; i < (BOARDSIZE + 1); i++) {
        tRow = document.createElement("tr");
        tRow.setAttribute("id", "tr" + i);
        document.getElementById("Ctable").appendChild(tRow);
    }

    for (var i = 1; i < (BOARDSIZE + 1); i++) {
        for (var o = 0; o < BOARDSIZE; o++) {
            counter++;
            tTile = document.createElement("td");
            tTile.setAttribute("id", counter);
            tTile.addEventListener("click", function () {
                onClick(this.id);
            });
            tText = document.createTextNode("");
            tTile.appendChild(tText);
            document.getElementById("tr" + i).appendChild(tTile);
        }
    }
}

//calls when clicked
function onClick(cellID) {
    if (!active) {
        active = true;
        console.log(cellID);
        for (var i = 0; i < whiteT.length; i++) {
            if (whiteT[i].position == cellID) {
                
            }
        }
    } else if (active) {
        active = false;
    }
    update();
}

//when called changes positions of board to match 
function update() {
    for (var i = 0; i < whiteT.length; i++) {
        document.getElementById(whiteT[i].position).style.backgroundColor = "white";
        document.getElementById(whiteT[i].position).innerHTML = whiteT[i].type;
    }
}