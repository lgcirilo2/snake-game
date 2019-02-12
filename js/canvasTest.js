/** Canvas testing sandbox */

const snakeCanvas = document.getElementById('snake');

// keypress event is not fired for all keys (e.g. alt, ctrl, shift, esc, arrow keys) 
document.addEventListener('keydown', (value) => move(value.keyCode));

const squareSide = 10;
let squarePosition = [0,0];
const ctx = snakeCanvas.getContext('2d');

// color canvas background
ctx.fillStyle = 'black';
ctx.rect(0, 0, snakeCanvas.width, snakeCanvas.height);
ctx.fill();

// draw a green square at the top left hand corner of the canvas
ctx.closePath();
ctx.beginPath();
ctx.rect(squarePosition[0], squarePosition[1], squareSide, squareSide);
ctx.fillStyle = 'green';
ctx.fill();

function eraseCanvas () {
    ctx.fillStyle = 'black';
    ctx.rect(0, 0, snakeCanvas.width, snakeCanvas.height);
    ctx.fill();
    ctx.closePath();
}

function move(direction) {
    // move left (subtract 10 from x-axis)
    if (direction === 37) {
        eraseCanvas();
        ctx.beginPath();
        squarePosition[0] = squarePosition[0] - 10;
        ctx.fillStyle = 'green';
        ctx.rect(squarePosition[0], squarePosition[1], squareSide, squareSide);
        ctx.fill();
    }
    // move up (subtract 10 from y-axis)
    if (direction === 38) {
        eraseCanvas();
        ctx.beginPath();
        squarePosition[1] = squarePosition[1] - 10;
        ctx.fillStyle = 'green';
        ctx.rect(squarePosition[0], squarePosition[1], squareSide, squareSide);
        ctx.fill();
    }
    // move right (add 10 to x-axis)
    if (direction === 39) {
        eraseCanvas();
        ctx.beginPath();
        squarePosition[0] = squarePosition[0] + 10;
        ctx.fillStyle = 'green';
        ctx.rect(squarePosition[0], squarePosition[1], squareSide, squareSide);
        ctx.fill();
    }
    // move down (add 10 to y-axis)
    if (direction === 40) {
        eraseCanvas();
        ctx.beginPath();
        squarePosition[1] = squarePosition[1] + 10;
        ctx.fillStyle = 'green';
        ctx.rect(squarePosition[0], squarePosition[1], squareSide, squareSide);
        ctx.fill();
    }
};
