const ships = require('../ships');

describe('ships', () => {

    // test to check the test are set up properly
    test('should return true', function() {
        expect(true).toEqual(true);
    });

    test('should return length passed in', function() {
        const Ship = ships(2);
        expect(Ship.getLength()).toEqual(2);
    });

    test('health should be same as length at start', () => {
        const Ship = ships(2);
        expect(Ship.getHealth()).toEqual(2);
    });

    test('should decrement health by 1 when hit', function() {
        const Ship = ships(2);
        Ship.hit();
        expect(Ship.getHealth()).toEqual(1);
    });

    test('isSunk should return false health is not 0', function() {
        const Ship = ships(2);
        Ship.hit();
        expect(Ship.isSunk()).toEqual(false);
    });

    test('isSunk should return true if health 0', function() {
        const Ship = ships(2);
        Ship.hit();
        Ship.hit();
        expect(Ship.isSunk()).toEqual(true)
    });


})