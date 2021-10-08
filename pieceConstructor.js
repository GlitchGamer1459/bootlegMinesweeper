function Piece(typeInput, posInput, idInput) {
    this.type = String(typeInput);
    this.position = posInput;
    this.id = idInput;

    //direction = 0 from top going clockwise
    this.move = function (direction) {
        switch (direction) {
            case 0:
                position -= 8;
                break;
            case 1:
                position -= 7;
                break;
            case 2:
                position += 1;
                break;
            case 3:
                position += 9;
                break;
            case 4:
                position += 8;
                break;
            case 5:
                position += 7;
                break;
            case 6:
                position -= 1;
                break;
            case 7:
                position -= 9;
                break;
        }
    }
}