var rTileCoord = 0;
var rTileValue = 0;
var prevTileValue;

var r1s1;
var r1s2;
var r1s3;
var r1s4;
var filledTile;
var carry = [];
var index;
var carryLength;
var carryLengthMod;
var counter;

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
    moveTilesL(0, 1, 2, 3, 4, 5);
    //row 2
    moveTilesL(4, 5, 6, 7, 8, 9);
    //row 3
    moveTilesL(8, 9, 10, 11, 12, 13);
    //row 4
    moveTilesL(12, 13, 14, 15, 16, 17);
    randomTile();
}

//runs the right Arrow code
function right() {
    //row 1
    moveTilesR(0, 1, 2, 3, 4, 5);
    //row 2
    moveTilesR(4, 5, 6, 7, 8, 9);
    //row 3
    moveTilesR(8, 9, 10, 11, 12, 13);
    //row 4
    moveTilesR(12, 13, 14, 15, 16, 17);
    randomTile();
}

//runs the up Arrow code
function up() {
    //column 1
    moveTilesU(1, 5, 9, 13);
    //column 2
    moveTilesU(2, 6, 10, 14);
    //column 3
    moveTilesU(3, 7, 11, 15);
    //column 4
    moveTilesU(4, 8, 12, 16);
    randomTile()
}

//runs the down Arrow code
function down() {
    //column 1
    moveTilesD(1, 5, 9, 13);
    //column 2
    moveTilesD(2, 6, 10, 14);
    //column 3
    moveTilesD(3, 7, 11, 15);
    //column 4
    moveTilesD(4, 8, 12, 16);
    randomTile()
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

//moves all parametered tiles to the left
function moveTilesL(a, b, c, d, e, f) {
    r1s1 = Number(document.getElementById(b).innerHTML);
    r1s2 = Number(document.getElementById(c).innerHTML);
    r1s3 = Number(document.getElementById(d).innerHTML);
    r1s4 = Number(document.getElementById(e).innerHTML);
    carry.push(r1s1, r1s2, r1s3, r1s4);
    for (var i = b; i < f; i++) {
        document.getElementById(i).innerHTML = '';
    }
    for (var i = a; i < e; i++) {
        index = carry.indexOf(0);
        if (carry[index] == 0) {
            carry.splice(index, 1);
        }
    }
    counter = 0;
    carryLength = carry.length
    carryLengthMod = b + carry.length;
    for (var i = b; i < carryLengthMod; i++) {
        document.getElementById(i).innerHTML = carry[counter];
        counter = counter + 1;
    }
    carry = [];
}

//moves all parametered tiles to the right
function moveTilesR(a, b, c, d, e, f) {
    r1s1 = Number(document.getElementById(b).innerHTML);
    r1s2 = Number(document.getElementById(c).innerHTML);
    r1s3 = Number(document.getElementById(d).innerHTML);
    r1s4 = Number(document.getElementById(e).innerHTML);
    carry.push(r1s1, r1s2, r1s3, r1s4);
    for (var i = b; i < f; i++) {
        document.getElementById(i).innerHTML = '';
    }
    for (var i = a; i < e; i++) {
        index = carry.indexOf(0);
        if (carry[index] == 0) {
            carry.splice(index, 1);
        }
    }
    if (carry.length == 4) {
        
    } else if (carry.length == 3) {
        carry.unshift('');
    } else if (carry.length == 2) {
        carry.unshift('');
        carry.unshift('');
    } else if (carry.length == 1) {
        carry.unshift('');
        carry.unshift('');
        carry.unshift('');
    }
    counter = 0;
    carryLength = carry.length
    carryLengthMod = b + carry.length;
    for (var i = b; i < carryLengthMod; i++) {
        document.getElementById(i).innerHTML = carry[counter];
        counter = counter + 1;
    }
    carry = [];
}

//moves all parametered tiles up
function moveTilesU(a, b, c, d) {
    //1 5 9 13
    r1s1 = Number(document.getElementById(a).innerHTML);
    r1s2 = Number(document.getElementById(b).innerHTML);
    r1s3 = Number(document.getElementById(c).innerHTML);
    r1s4 = Number(document.getElementById(d).innerHTML);
    carry.push(r1s1, r1s2, r1s3, r1s4);
    document.getElementById(a).innerHTML = '';
    document.getElementById(b).innerHTML = '';
    document.getElementById(c).innerHTML = '';
    document.getElementById(d).innerHTML = '';
    for (var i = 0; i < 4; i++) {
        index = carry.indexOf(0);
        if (carry[index] == 0) {
            carry.splice(index, 1);
        }
    }
    if (carry.length == 1) {
        document.getElementById(a).innerHTML = carry[0];
    } else if (carry.length == 2) {
        document.getElementById(a).innerHTML = carry[0];
        document.getElementById(b).innerHTML = carry[1];
    } else if (carry.length == 3) {
        document.getElementById(a).innerHTML = carry[0];
        document.getElementById(b).innerHTML = carry[1];
        document.getElementById(c).innerHTML = carry[2];
    } else if (carry.length == 4) {
        document.getElementById(a).innerHTML = carry[0];
        document.getElementById(b).innerHTML = carry[1];
        document.getElementById(c).innerHTML = carry[2];
        document.getElementById(d).innerHTML = carry[3];
    }
    carry = [];
}

//moves all parametered tiles down
function moveTilesD(a, b, c, d) {
    r1s1 = Number(document.getElementById(a).innerHTML);
    r1s2 = Number(document.getElementById(b).innerHTML);
    r1s3 = Number(document.getElementById(c).innerHTML);
    r1s4 = Number(document.getElementById(d).innerHTML);
    carry.push(r1s1, r1s2, r1s3, r1s4);
    document.getElementById(a).innerHTML = '';
    document.getElementById(b).innerHTML = '';
    document.getElementById(c).innerHTML = '';
    document.getElementById(d).innerHTML = '';
    for (var i = 0; i < 4; i++) {
        index = carry.indexOf(0);
        if (carry[index] == 0) {
            carry.splice(index, 1);
        }
    }
    if (carry.length == 1) {
        document.getElementById(d).innerHTML = carry[0];
    } else if (carry.length == 2) {
        document.getElementById(d).innerHTML = carry[0];
        document.getElementById(c).innerHTML = carry[1];
    } else if (carry.length == 3) {
        document.getElementById(d).innerHTML = carry[0];
        document.getElementById(c).innerHTML = carry[1];
        document.getElementById(b).innerHTML = carry[2];
    } else if (carry.length == 4) {
        document.getElementById(d).innerHTML = carry[0];
        document.getElementById(c).innerHTML = carry[1];
        document.getElementById(b).innerHTML = carry[2];
        document.getElementById(a).innerHTML = carry[3];
    }
    carry = [];
}