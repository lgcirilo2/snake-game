/** Canvas testing sandbox */

const snakeCanvas = document.getElementById('snake');
const squareSide = 10;
let squarePosition = [0, 0];
const ctx = snakeCanvas.getContext('2d');
const vf = createVirtualFrame(snakeCanvas.width, snakeCanvas.height, squareSide);




// keypress event is not fired for all keys (e.g. alt, ctrl, shift, esc, arrow keys) 
document.addEventListener('keydown', (value) => move(value.keyCode));



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

function detectCollision(pointAx, pointAy, pointBx, pointBy) {
    return (pointAx === pointBx && pointAy === pointBy);
};

function createVirtualFrame(canvasWidth, canvasHeight, squareSide) {
    virtualFrame = [];
    for (let i = 0 - squareSide; i <= canvasWidth; i+=squareSide) {
        for (let j = 0 - squareSide; j <= canvasHeight; j += squareSide) {
            if (i < 0 || i >= canvasWidth || j < 0 || j >= canvasHeight) {
                virtualFrame.push([i, j]);
            }
        }
    }
    return virtualFrame;
};

function willItCollide(point, pointArray) {
    for (let p of pointArray) {
        if (detectCollision(point[0], point[1], p[0], p[1])) {
            return true;

        }
    }
    return false;
}

function move(direction) {
    // move left (subtract 10 from x-axis)
    if (direction === 37) {
        console.log(squarePosition);
        console.log('will it colide? ' + willItCollide([squarePosition[0] - 10, squarePosition[1]], vf));
        if (!willItCollide([squarePosition[0] - 10, squarePosition[1]], vf)) {
            eraseCanvas();
            ctx.beginPath();
            squarePosition[0] = squarePosition[0] - 10;
            ctx.fillStyle = 'green';
            ctx.rect(squarePosition[0], squarePosition[1], squareSide, squareSide);
            ctx.fill();
        }
        
    }
    // move up (subtract 10 from y-axis)
    if (direction === 38) {
        console.log(squarePosition);
        console.log('will it colide? ' + willItCollide([squarePosition[0], squarePosition[1] - 10], vf));
        // console.log(willItCollide([squarePosition[0], squarePosition[1] - 10], virtualFrame));
        if (!willItCollide([squarePosition[0], squarePosition[1] - 10], vf)) {
            eraseCanvas();
            ctx.beginPath();
            squarePosition[1] = squarePosition[1] - 10;
            ctx.fillStyle = 'green';
            ctx.rect(squarePosition[0], squarePosition[1], squareSide, squareSide);
            ctx.fill();
        }
        
    }
    // move right (add 10 to x-axis)
    if (direction === 39) {
        console.log(squarePosition);
        console.log('will it colide? ' + willItCollide([squarePosition[0] + 10, squarePosition[1]], vf));
        if (!willItCollide([squarePosition[0] + 10, squarePosition[1]], vf)) {
            eraseCanvas();
            ctx.beginPath();
            squarePosition[0] = squarePosition[0] + 10;
            ctx.fillStyle = 'green';
            ctx.rect(squarePosition[0], squarePosition[1], squareSide, squareSide);
            ctx.fill();
        }
    }
    // move down (add 10 to y-axis)
    if (direction === 40) {
        console.log(squarePosition);
        console.log('will it colide? ' + willItCollide([squarePosition[0], squarePosition[1] + 10], vf));
        if (!willItCollide([squarePosition[0], squarePosition[1] + 10], vf)) {
            eraseCanvas();
            ctx.beginPath();
            squarePosition[1] = squarePosition[1] + 10;
            ctx.fillStyle = 'green';
            ctx.rect(squarePosition[0], squarePosition[1], squareSide, squareSide);
            ctx.fill();
            
        }
    }
};

function createSnake(x, y) {
    let snake = new Array(new Array(x ,y));
    return snake;
};

function initializeDirectionVector() {return [0,0]};



