describe("Collision detection", function() {
    it("should return true if points collide", function() {
        expect(detectCollision(0, 0, 0, 0)).toEqual(true);
        expect(detectCollision(100, 100, 100, 100)).toEqual(true);
        expect(detectCollision(99, 100, 100, 100)).toEqual(false);
        expect(detectCollision(100, 99, 100, 100)).toEqual(false);
        expect(detectCollision(100, 100, 99, 100)).toEqual(false);
        expect(detectCollision(100, 100, 100, 99)).toEqual(false);
    });
});

describe("virtual frame", function() {
    it("should be an array", function() {
        expect(createVirtualFrame(2, 2)).toEqual(jasmine.any(Array));
    });

    it("should represent a frame encompassing the canvas", function() {
        expect(createVirtualFrame(2, 2, 1)).toEqual([[-1, -1], [-1, 0], [-1, 1], [-1, 2], 
                                                  [0, -1], [0, 2], [1, -1], [1, 2],
                                                  [2, -1], [2, 0], [2, 1], [2, 2]]
                                                );
        expect(createVirtualFrame(3, 3, 1)).toEqual([[-1, -1,], [-1, 0], [-1, 1], [-1, 2], 
                                                  [-1, 3], [0, -1], [0, 3], [1, -1],
                                                  [1, 3], [2, -1], [2, 3], [3, -1],
                                                   [3, 0], [3, 1], [3, 2], [3, 3]]);
    });
});

describe("checks if there will be a collision", function() {
    it("should return a boolean value", function () {
        expect(willItCollide([1,2], [[0,0], [0,1]])).toEqual(jasmine.any(Boolean));
    });

    it("should return true when point collides", function () {
        expect(willItCollide([1, 2], [[0, 0], [0, 1], [1,2]])).toEqual(true);
    });

    it("should return false when point does not collide", function () {
        expect(willItCollide([1, 2], [[0, 0], [0, 1]])).toEqual(false);
    });
});

describe("Snake", function() {
    let snake;

    beforeAll(function() {
        snake = createSnake(0, 0); 
    });

    it("should be an array", function() {
        expect(snake).toEqual(jasmine.any(Array));
    });

    it("should be an array of arrays", function() {
        const sn = createSnake(0, 0);
        expect(sn[0]).toEqual(jasmine.any(Array));
    });

    it("should contain an array with the given parameters as first element", function() {
        expect(createSnake(0, 0)[0]).toEqual([0, 0]);
        expect(createSnake(1, 1)[0]).toEqual([1, 1]);
    });

    it("should grow by one block at a time", () => {
        let snake = createSnake(100,100);
        snake = growSnake(snake, [110,100]);
        expect(snake).toEqual([[110,100], [100,100]]);

        snake = growSnake(snake, [120, 100]);
        expect(snake).toEqual([[120, 100], [110,100], [100,100]]);

    });
});

describe("snake movement", () => {
    let snk;
    let vect;

    beforeEach(function() {
        snk = [[120, 100], [110,100], [100,100]];
        vect = [];
    });


    it("should be able to move", () => {
        vect = [10, 0];
        expect(typeof move === 'function').toBe(true);
    });

    it("should return an array", () => {
        vect = [10,0];
        expect(move(snk, vect)).toEqual(jasmine.any(Array));
    });

    it("should be able to move to the right", () => {
        vect = [10,0];
        expect(move(snk, vect)).toEqual([[130, 100], [120,100], [110,100]]);
    });

    it("should be able to move to the left", () => {
        snk = [ [120,100], [120,90], [120, 80] ];
        vect = [-10,0];
        expect(move(snk, vect)).toEqual([[110, 100], [120,100], [120, 90]]);
    });
});

describe("vector", function() {
    let vect;

    beforeEach(function() {
        vect = initializeDirectionVector();
    });

    it("should be a two element array", function() {
        expect(vect.length).toEqual(2);
    });

    it("should have two numbers as its elements", function() {
        expect(vect).toEqual([jasmine.any(Number), jasmine.any(Number)]);
    });

    it("should be initialized with [0,0]", () => {
        expect(vect).toEqual([0,0]);
    });

    it("should never have one of its values different from 10 or -10 or 0", function() {
        expect(updateVector([0, 0], 37)).toEqual([-10, 0]);
        expect(updateVector([0, 0], 38)).toEqual([0, -10]);
        expect(updateVector([0, 0], 39)).toEqual([10, 0]);
        expect(updateVector([0, 0], 40)).toEqual([0, 10]);
    });

    it("should not update to same direction", () => {
        expect(updateVector([10, 0], 39)).toEqual([10, 0]);
        expect(updateVector([-10, 0], 37)).toEqual([-10, 0]);
        expect(updateVector([0, 10], 38)).toEqual([0, 10]);
        expect(updateVector([0, -10], 40)).toEqual([0, -10]);
    });

    it("should not update to opposite direction", function() {
        expect(updateVector([10, 0], 37)).toEqual([10, 0]);
        expect(updateVector([-10, 0], 39)).toEqual([-10, 0]);
        expect(updateVector([0, 10], 40)).toEqual([0, 10]);
        expect(updateVector([0, -10], 38)).toEqual([0, -10]);
    });

    it("should set an axis to zero if direction changes to the other axis", () => {
        expect(updateVector([10, 0], 38)).toEqual([0, -10]);
        expect(updateVector([10, 0], 40)).toEqual([0, 10]);
        expect(updateVector([-10, 0], 38)).toEqual([0, -10]);
        expect(updateVector([-10, 0], 40)).toEqual([0, 10]);
        expect(updateVector([0, 10], 37)).toEqual([-10, 0]);
        expect(updateVector([0, 10], 39)).toEqual([10, 0]);
        expect(updateVector([0, -10], 37)).toEqual([-10, 0]);
        expect(updateVector([0, -10], 39)).toEqual([10, 0]);
    });
});



//TODO -test wether either side of the canvas is envenly divisible by square side