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
    console.log('left');
}

//runs the right Arrow code
function right() {
    console.log('right');
}

//runs the up Arrow code
function up() {
    console.log('up');
}

//runs the down Arrow code
function down() {
    console.log('down');
}