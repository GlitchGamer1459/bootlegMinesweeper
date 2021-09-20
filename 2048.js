var rTileCoord = 0;
var rTileValue = 0;
var prevTileValue;

//adds event listener to window object
function load() {
    window.addEventListener('keydown', getKey, false);
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
    } else {
        return;
    }
}

//runs the left Arrow code
function left() {
    randomTile()
    console.log('left');
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