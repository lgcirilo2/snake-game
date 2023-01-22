/** Canvas testing sandbox */

const snakeCanvas = document.getElementById('snake');
const squareSide = 10;
let squarePosition = [0, 0];
let snake = createSnake(100, 100);
const ctx = snakeCanvas.getContext('2d');
const vf = createVirtualFrame(snakeCanvas.width, snakeCanvas.height, squareSide);




// keypress event is not fired for all keys (e.g. alt, ctrl, shift, esc, arrow keys) 
document.addEventListener('keydown', (value) => updateVector(currentVector, value.keyCode));



// color canvas background
ctx.fillStyle = 'green';
ctx.rect(0, 0, snakeCanvas.width, snakeCanvas.height);
ctx.fill();

// draw a green square at the top left hand corner of the canvas
ctx.closePath();
ctx.beginPath();
ctx.rect(squarePosition[0], squarePosition[1], squareSide, squareSide);
ctx.fillStyle = 'white';
ctx.fill();

function eraseCanvas () {
    ctx.fillStyle = 'green';
    ctx.rect(0, 0, snakeCanvas.width, snakeCanvas.height);
    ctx.fill();
    ctx.closePath();
}

function detectCollision(pointAx, pointAy, pointBx, pointBy) {
    return (pointAx === pointBx && pointAy === pointBy);
}

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
}

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
    return new Array([x ,y]);
}

function growSnake(snake, newSnakeBlock) {
    let newSnake = snake;
    newSnake.unshift(newSnakeBlock);
    return newSnake;
}
function initializeDirectionVector() {return [0,0]}

function updateVector(currentVector, direction) {
    let newVector = currentVector;

    // move left (subtract 10 from x-axis)
    if (direction === 37) {
        if (newVector[0] === 0) {
            newVector[0] = newVector[0] - 10;
            newVector[1] = 0;
        }
    }
    // move up (subtract 10 from y-axis)
    if (direction === 38) {
        if (newVector[1] === 0) {
            newVector[1] = newVector[1] - 10;
            newVector[0] = 0;
        }
    }
    // move right (add 10 to x-axis)
    if (direction === 39) {
        if (newVector[0] === 0) {
            newVector[0] = newVector[0] + 10;
            newVector[1] = 0;
        }
    }
    // move down (add 10 to y-axis)
    if (direction === 40) {
        if (newVector[1] === 0) {
            newVector[1] = newVector[1] + 10;
            newVector[0] = 0;
        }
    }

    return newVector;
}

function move(snake, vector) {
    
    let newSnake = snake;
    const newBlock = [snake[0][0] + vector[0], snake[0][1] + vector[1]];

    newSnake.unshift(newBlock);
    console.log(typeof newSnake);
    newSnake.pop();

    return newSnake;
}

let snk = [[120, 100], [110,100], [100,100]];
let vect = [10,0];
let result = move(snk, vect);