const gameBoard = require('../gameBoard');

describe('gameBoard', () => {

    test('should return true', function() {
        expect(true).toEqual(true);
    });

    test('should create an array of length 100', function() {
        const gameB = gameBoard();
        expect(Object.keys(gameB.board).length).toEqual(100);
    });

    test('should change 1 board cell to the ship', function() {
        const gameB = gameBoard();
        gameB.placeShip('Ship0','0, 0');
        expect(gameB.board).toEqual(expect.objectContaining({'0, 0':'Ship0'}));
    });

    //these tests don't work - not sure why
    test('should change 2 board cells to equal the ship', function() {
        const gameB = gameBoard();
        gameB.placeShip('Ship4', '2, 1', '2, 2');
        expect(gameB.board).toEqual(expect.objectContaining({'2, 1':'Ship4', '2, 2': 'Ship4'}));
    });

    test('returns false if an attack misses', function() {
        const gameB = gameBoard();
        expect(gameB.receiveAttack('0, 0')).toEqual(false);
    });

    test('returns true if an attack hits', function() {
        const gameB = gameBoard();
        gameB.placeShip('Ship0','0, 0');
        expect(gameB.receiveAttack('0, 0')).toEqual(true);
    });

    test('displays a missed hit', function() {
        const gameB = gameBoard();
        gameB.receiveAttack('0, 0');
        expect(gameB.board).toEqual(expect.objectContaining({'0, 0':'M'}))
    });

    test('decrements health of the ship', function() {
        const gameB = gameBoard();
        gameB.placeShip('Ship0','0, 0');
        gameB.receiveAttack('0, 0');
        expect(gameB.shipsObject['Ship0'].getHealth()).toBe(0);
    })

    test('says if all ships are sunk or not', function() {
        const gameB = gameBoard();
        gameB.placeShip('Ship0', '0, 0');
        gameB.receiveAttack('0, 0');
        expect(gameB.allSunk()).toEqual(expect.stringContaining('Not all ships are sunk'));
    })

})