const canvas = document.getElementById("canvasBoard");
const ctx = canvas.getContext("2d");

//calls once on loading of the webpage
function start() {
    drawBoard();

    const piece1 = new Piece(50, 50);
    piece1.updateSprite();
}

//draws an equidistant set of cubes on the canvas
function drawBoardLine(inpX, inpY) {
    let posX = inpX;
    let posY = inpY;

    for (let i = 0; i < 16; i++) {
        if (i < 4) {
            ctx.fillRect(posX, posY, 50, 50);
            posX += 100;
        }
    }
}

//draws the board on the canvas using drawBoardLine
function drawBoard() {
    let startX = 0;
    let startY = 0;

    for (let i = 0; i < 8; i++) {
        drawBoardLine(startX, startY);
        startY += 50;

        if (startX == 0) {
            startX = 50;
        } else {
            startX = 0;
        }
    }
}

//displays the mouse position relative to the canvas
function displayMousePos(event) {
    let pointerX = event.offsetX;
    let pointerY = event.offsetY;

    console.log("Coordinates: ( "+ pointerX + ", " + pointerY + " )");
}