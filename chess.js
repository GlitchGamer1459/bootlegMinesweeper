var canvas = document.getElementById("canvasBoard");
var ctx = canvas.getContext("2d");

//odd rows
ctx.fillRect(0, 0, 50, 50);
ctx.fillRect(100, 0, 50, 50);
ctx.fillRect(200, 0, 50, 50);
ctx.fillRect(300, 0, 50, 50);

ctx.fillRect(0, 100, 50, 50);
ctx.fillRect(100, 100, 50, 50);
ctx.fillRect(200, 100, 50, 50);
ctx.fillRect(300, 100, 50, 50);

ctx.fillRect(0, 200, 50, 50);
ctx.fillRect(100, 200, 50, 50);
ctx.fillRect(200, 200, 50, 50);
ctx.fillRect(300, 200, 50, 50);

ctx.fillRect(0, 300, 50, 50);
ctx.fillRect(100, 300, 50, 50);
ctx.fillRect(200, 300, 50, 50);
ctx.fillRect(300, 300, 50, 50);

//even rows
ctx.fillRect(50, 50, 50, 50);
ctx.fillRect(150, 50, 50, 50);
ctx.fillRect(250, 50, 50, 50);
ctx.fillRect(350, 50, 50, 50);

ctx.fillRect(50, 150, 50, 50);
ctx.fillRect(150, 150, 50, 50);
ctx.fillRect(250, 150, 50, 50);
ctx.fillRect(350, 150, 50, 50);

ctx.fillRect(50, 250, 50, 50);
ctx.fillRect(150, 250, 50, 50);
ctx.fillRect(250, 250, 50, 50);
ctx.fillRect(350, 250, 50, 50);

ctx.fillRect(50, 350, 50, 50);
ctx.fillRect(150, 350, 50, 50);
ctx.fillRect(250, 350, 50, 50);
ctx.fillRect(350, 350, 50, 50);