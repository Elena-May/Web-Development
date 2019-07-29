const player = require('../player.js');
const computerPlayer = require('../compPlayer.js');

describe ('player', () => {

    test('player should hit computers board', function() {
        const Player = player();
        const Computer = computerPlayer();

        Player.hitOpponent("0, 0", Computer);

        expect(Computer.computerboard.board).toEqual(expect.objectContaining({'0, 0':'M'}))

    });

    
    test('computer should hit players board', function() {
        const Player = player();
        const Computer = computerPlayer();

        Computer.hitOpponent(Player);

        const actual = Object.values(Player.playerBoard.board);
        const expected = ['M'];

        expect(actual).toEqual(expect.arrayContaining(expected));

    })

    //test for computer storing  coordinates 

    test('computer should not hit the same co-ordinates twice', function() {
        const Player = player();
        const Computer = computerPlayer();

        Computer.hitOpponent(Player);
        Computer.hitOpponent(Player);

        const actual = Object.values(Player.playerBoard.board);
        const expected = ['M', 'M'];

        expect(actual).toEqual(expect.arrayContaining(expected));
    })
})