var gridSize = 20;
var gridBuilt = false;
var w;
var x;
var y = 0;
var z;
var t;

function buildGrid() {
    if (gridBuilt === false) {
        var w = document.createElement("TABLE");
        w.setAttribute("id", "myTable");
        document.body.appendChild(w);

        for (var i = 0; i < gridSize; i++) {
            x = document.createElement("TR");
            x.setAttribute("id", "myTr" + i);
            document.getElementById("myTable").appendChild(x);

        }

        for (var i = 0; i < gridSize; i++) {
            for (var o = 0; o < gridSize; o++) {
                y = y + 1;
                z = document.createElement("TD");
                t = document.createTextNode("cell" + y);
                z.appendChild(t);
                document.getElementById("myTr" + o).appendChild(z);
            }
        }
    }
    gridBuilt = true;
}