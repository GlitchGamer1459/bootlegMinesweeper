class Piece {

    constructor(inX, inY) {
        this.x = 0;
        this.y = 0;

        if (inX == inX) {
            this.x = inX;
        }

        if (inY == inY) {
            this.y = inY;
        }
    }

    getPos() {

    }

    updateSprite() {
        let img = new Image();

        img.src = "pawn.png";
        img.onload = function () {
            init();
        }

        function init() {
            ctx.drawImage(img, Piece.x + 9, Piece.y + 9);
            console.log();
        }
    }

    
}