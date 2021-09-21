var rTileCoord = 0;
var rTileValue = 0;
var prevTileValue;

//adds event listener to window object and sets up board
function load() {
    window.addEventListener('keydown', getKey, false);
    randomTile();
    randomTile();
}

//runs the function related to the key pressed
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

//runs the left Arrow code
function left() {
    //row 1
    for (var i = 1; i < 5; i++) {
        currentCell = document.getElementById(i).innerHTML;
        if (currentCell != '') {
            if (document.getElementById(1).innerHTML == '') {
                document.getElementById(1).innerHTML = currentCell;
                document.getElementById(i).innerHTML = '';
            } else if (document.getElementById(2).innerHTML == '') {
                document.getElementById(2).innerHTML = currentCell;
                document.getElementById(i).innerHTML = '';
            } else if (document.getElementById(3).innerHTML == '') {
                document.getElementById(3).innerHTML = currentCell;
                document.getElementById(i).innerHTML = '';
            } else if (document.getElementById(4).innerHTML == '') {
                document.getElementById(4).innerHTML = currentCell;
                document.getElementById(i).innerHTML = '';
            }
        }
    }
    if (document.getElementById(1).innerHTML == document.getElementById(2).innerHTML && document.getElementById(1).innerHTML != '') {
        document.getElementById(1).innerHTML = document.getElementById(1).innerHTML * 2;
        document.getElementById(2).innerHTML = '';
    }
    if (document.getElementById(2).innerHTML == document.getElementById(3).innerHTML && document.getElementById(2).innerHTML != '') {
        document.getElementById(2).innerHTML = document.getElementById(2).innerHTML * 2;
        document.getElementById(3).innerHTML = '';
    }
    if (document.getElementById(3).innerHTML == document.getElementById(4).innerHTML && document.getElementById(3).innerHTML != '') {
        document.getElementById(3).innerHTML = document.getElementById(3).innerHTML * 2;
        document.getElementById(4).innerHTML = '';
    }
    //row 2
    for (var i = 5; i < 9; i++) {
        currentCell = document.getElementById(i).innerHTML;
        if (currentCell != '') {
            if (document.getElementById(5).innerHTML == '') {
                document.getElementById(5).innerHTML = currentCell;
                document.getElementById(i).innerHTML = '';
            } else if (document.getElementById(6).innerHTML == '') {
                document.getElementById(6).innerHTML = currentCell;
                document.getElementById(i).innerHTML = '';
            } else if (document.getElementById(7).innerHTML == '') {
                document.getElementById(7).innerHTML = currentCell;
                document.getElementById(i).innerHTML = '';
            } else if (document.getElementById(8).innerHTML == '') {
                document.getElementById(8).innerHTML = currentCell;
                document.getElementById(i).innerHTML = '';
            }
        }
    }
    if (document.getElementById(5).innerHTML == document.getElementById(6).innerHTML && document.getElementById(5).innerHTML != '') {
        document.getElementById(5).innerHTML = document.getElementById(5).innerHTML * 2;
        document.getElementById(6).innerHTML = '';
    }
    if (document.getElementById(6).innerHTML == document.getElementById(7).innerHTML && document.getElementById(2).innerHTML != '') {
        document.getElementById(6).innerHTML = document.getElementById(6).innerHTML * 2;
        document.getElementById(7).innerHTML = '';
    }
    if (document.getElementById(7).innerHTML == document.getElementById(8).innerHTML && document.getElementById(3).innerHTML != '') {
        document.getElementById(7).innerHTML = document.getElementById(7).innerHTML * 2;
        document.getElementById(8).innerHTML = '';
    }
    //row 3
    for (var i = 9; i < 13; i++) {
        currentCell = document.getElementById(i).innerHTML;
        if (currentCell != '') {
            if (document.getElementById(9).innerHTML == '') {
                document.getElementById(9).innerHTML = currentCell;
                document.getElementById(i).innerHTML = '';
            } else if (document.getElementById(10).innerHTML == '') {
                document.getElementById(10).innerHTML = currentCell;
                document.getElementById(i).innerHTML = '';
            } else if (document.getElementById(11).innerHTML == '') {
                document.getElementById(11).innerHTML = currentCell;
                document.getElementById(i).innerHTML = '';
            } else if (document.getElementById(12).innerHTML == '') {
                document.getElementById(12).innerHTML = currentCell;
                document.getElementById(i).innerHTML = '';
            }
        }
    }
    if (document.getElementById(9).innerHTML == document.getElementById(10).innerHTML && document.getElementById(5).innerHTML != '') {
        document.getElementById(9).innerHTML = document.getElementById(9).innerHTML * 2;
        document.getElementById(10).innerHTML = '';
    }
    if (document.getElementById(10).innerHTML == document.getElementById(11).innerHTML && document.getElementById(2).innerHTML != '') {
        document.getElementById(10).innerHTML = document.getElementById(10).innerHTML * 2;
        document.getElementById(11).innerHTML = '';
    }
    if (document.getElementById(11).innerHTML == document.getElementById(12).innerHTML && document.getElementById(3).innerHTML != '') {
        document.getElementById(11).innerHTML = document.getElementById(11).innerHTML * 2;
        document.getElementById(12).innerHTML = '';
    }
    //row 4
    for (var i = 13; i < 17; i++) {
        currentCell = document.getElementById(i).innerHTML;
        if (currentCell != '') {
            if (document.getElementById(13).innerHTML == '') {
                document.getElementById(13).innerHTML = currentCell;
                document.getElementById(i).innerHTML = '';
            } else if (document.getElementById(14).innerHTML == '') {
                document.getElementById(14).innerHTML = currentCell;
                document.getElementById(i).innerHTML = '';
            } else if (document.getElementById(15).innerHTML == '') {
                document.getElementById(15).innerHTML = currentCell;
                document.getElementById(i).innerHTML = '';
            } else if (document.getElementById(16).innerHTML == '') {
                document.getElementById(16).innerHTML = currentCell;
                document.getElementById(i).innerHTML = '';
            }
        }
    }
    if (document.getElementById(13).innerHTML == document.getElementById(14).innerHTML && document.getElementById(5).innerHTML != '') {
        document.getElementById(13).innerHTML = document.getElementById(13).innerHTML * 2;
        document.getElementById(14).innerHTML = '';
    }
    if (document.getElementById(14).innerHTML == document.getElementById(15).innerHTML && document.getElementById(2).innerHTML != '') {
        document.getElementById(14).innerHTML = document.getElementById(14).innerHTML * 2;
        document.getElementById(15).innerHTML = '';
    }
    if (document.getElementById(15).innerHTML == document.getElementById(16).innerHTML && document.getElementById(3).innerHTML != '') {
        document.getElementById(15).innerHTML = document.getElementById(15).innerHTML * 2;
        document.getElementById(16).innerHTML = '';
    }
    //randomTile();
}

//runs the right Arrow code
function right() {
    randomTile()
    console.log('right');
}

//runs the up Arrow code
function up() {
    randomTile()
    console.log('up');
}

//runs the down Arrow code
function down() {
    randomTile()
    console.log('down');
}

//generates a random tile when called
function randomTile() {
    rTileCoord = Math.floor(Math.random() * 16) + 1;
    rTileValue = Math.floor(Math.random() * 4) + 1;
    prevTileValue = document.getElementById(rTileCoord).innerHTML;
    if (prevTileValue != '') {
        randomTile();
    }
    if (rTileValue <= 3) {
        document.getElementById(rTileCoord).innerHTML = 2;
    } else if (rTileValue == 4) {
        document.getElementById(rTileCoord).innerHTML = 4;
    }
}