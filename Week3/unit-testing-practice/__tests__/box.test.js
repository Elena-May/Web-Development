const Box = require('../box')


describe('box', () => {
    
    // needs to be defined outside of beforeAll so that it in the scope
    let box;

    beforeEach(() => {
        box = new Box();
    });

    // test to check the test are set up properly
    test('should return true', function() {
        expect(true).toEqual(true);
    });

    // test to check Box constructor has default height and width of 100
    test('should have a default height and width', () => {
        expect(box.height).toEqual(100);
        expect(box.width).toEqual(100);
    });

    // user should be able to pass in heights and widths if they choose
    test('should take a height and width as arguments', () => {
        let box = new Box(50, 40);

        expect(box.height).toEqual(50);
        expect(box.width).toEqual(40);
    })
    
    // should be able to calculate area of box using method .area
    test('should calculate its area', () => {

        expect(box.area()).toEqual(10000);
    })

    
    test('should increment box by provided value', () => {
        box.increaseWidth(10);
        expect(box.width).toEqual(110);
    })

});