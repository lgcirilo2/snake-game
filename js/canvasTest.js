/** Canvas testing sandbox */

const snakeCanvas = document.getElementById('snake');

// keypress event is not fired for all keys (e.g. alt, ctrl, shift, esc, arrow keys) 
document.addEventListener('keydown', (value) => console.log(value));

const ctx = snakeCanvas.getContext('2d');
ctx.fillStyle = 'black';
ctx.rect(10, 15, 200, 200);
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.rect(10, 225, snakeCanvas.width - 20, 150);
ctx.fillStyle = 'green';
ctx.fill();

setTimeout(() => {
    ctx.clearRect(10, 15, 200, 200);
    ctx.clearRect(10, 225, snakeCanvas.width - 20, 150);
}, 500);
