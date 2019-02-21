xdescribe("Collision detection", function() {
    it("should return true if points collide", function() {
        expect(detectCollision(0, 0, 0, 0)).toEqual(true);
        expect(detectCollision(100, 100, 100, 100)).toEqual(true);
        expect(detectCollision(99, 100, 100, 100)).toEqual(false);
        expect(detectCollision(100, 99, 100, 100)).toEqual(false);
        expect(detectCollision(100, 100, 99, 100)).toEqual(false);
        expect(detectCollision(100, 100, 100, 99)).toEqual(false);
    });
});

xdescribe("virtual frame", function() {
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

xdescribe("checks if there will be a collision", function() {
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

xdescribe("Snake Creation", function() {
    it("should be an array", function() {
        expect(createSnake(0, 0)).toEqual(jasmine.any(Array));
    });

    it("should be an array of arrays", function() {
        const sn = createSnake(0, 0);
        expect(sn[0]).toEqual(jasmine.any(Array));
    });

    it("should contain an array with the given parameters as first element", function() {
        expect(createSnake(0, 0)[0]).toEqual([0, 0]);
        expect(createSnake(1, 1)[0]).toEqual([1, 1]);
    });
});

describe("vector", function() {
    let v;

    beforeEach(function() {
        v = initializeDirectionVector();
    });

    it("should be a two element array", function() {
        expect(v.length).toEqual(2);
    });

    it("should have two numbers as its elements", function() {
        expect(v).toEqual([jasmine.any(Number), jasmine.any(Number)]);
    });

    it("should change only one axis value at a time", function() {

    });

    it("should have one of its axis equalto zero", function() {

    });

    it("should not change to the opposite direction", function() {

    });

});



//TODO -test wether either side of the canvas is envenly divisible by square side