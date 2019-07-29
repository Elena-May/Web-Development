const gameBoard = require('./gameBoard.js')

const compPlayer = () => {
    let computerboard = gameBoard();

    const randomIntGen = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    } 
    
    const hitOpponent = (Player) => {

        let coordArray = [];
        let toHit = "";

        while (true) {
            let coordOne = randomIntGen(10);
            let coordTwo = randomIntGen(10);
            let coord = coordOne.toString() + ', ' + coordTwo.toString();

            if (coordArray.includes(coord)) {
                toHit;
            } else {
                coordArray.push(coord);
                toHit = coord;
                break;
            }

        }

        return Player.playerBoard.receiveAttack(toHit);
    }


    return {hitOpponent, computerboard}
}

module.exports = compPlayer;