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
// move square one unit to  the right after five seconds
// setTimeout(() => {
//     ctx.fillStyle = 'black';
//     ctx.rect(0, 0, snakeCanvas.width, snakeCanvas.height);
//     ctx.fill();
//     ctx.closePath();
//     ctx.beginPath();
//     ctx.fillStyle = 'green';
//     ctx.rect(10, 0, 10, 10);
//     ctx.fill();
// },2000);

function eraseCanvas () {
    ctx.fillStyle = 'black';
    ctx.rect(0, 0, snakeCanvas.width, snakeCanvas.height);
    ctx.fill();
    ctx.closePath();
}

function move(direction) {
    if (direction === 39) {
        
        ctx.beginPath();
        ctx.fillStyle = 'green';
        ctx.rect(10, 0, 10, 10);
        ctx.fill();
    }

    
};





// setTimeout(() => {
//     ctx.clearRect(10, 15, 200, 200);
//     ctx.clearRect(10, 225, snakeCanvas.width - 20, 150);
// }, 500);
