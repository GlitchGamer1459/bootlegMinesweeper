var boardSize = 21;
var counter = 0;

var table;
var tRow;
var tTile;
var tText;

var coordGrid = [];

//calls on the loading of the page
function load() {
    buildBoard();
}

//builds the board the snake plays on
function buildBoard() {
    //creates the tiles in DOM
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
    console.log(coordGrid);
}