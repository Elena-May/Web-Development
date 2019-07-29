const gameBoard = require('./gameBoard.js');

const player = () => {
    
    let playerBoard = gameBoard();

    const hitOpponent = (coord, computer)  => {
        
        return computer.computerboard.receiveAttack(coord);
    }
    
    return {hitOpponent, playerBoard}
}

module.exports = player;


