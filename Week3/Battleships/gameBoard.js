const ships = require('./ships');

const gameBoard = () => {

    const board = {};

    for (i = 0; i < 10; i++) {
        for (j = 0; j < 10; j++) {
            board[i+ ", " +j] = '-';
            }  
        }


    const shipArray = [];
    let shipsObject = {};

    for (i = 0; i < 4; i++) {
        shipArray.push(ships(1));
    }
    for (i = 0; i < 3; i++) {
        shipArray.push(ships(2))
    }
    for (i = 0; i < 2; i++) {
        shipArray.push(ships(3))
    }

    shipArray.push(ships(4))
    
    for(let i=0; i<shipArray.length; i++) {
        shipsObject['Ship'+i] = shipArray[i];
    };

    
    let count = 0;

    const incrementShip = () => {
        count ++;
        let ship = 'Ship' + count;

        return ship;
    }

    //placeShips 
    // might need some logic later on to check the co-ordinates and ship length match up  
    const placeShip = (shipp, ...coordinates) => {
        for (let key in board) {
            for (i = 0; i < coordinates.length; i++) {
                if (key === coordinates[i]) {
                    for(let keys in shipsObject) {
                        if (keys === shipp) {
                            board[key] = shipp;
                        }
                    }   
                }   
            }
        };
     return board;

    };


    
    let sunkCounter = 0;
    //recieveAttack + keep track of hits 
    const receiveAttack = (coordinates) => {

        for (let key in board) {
            if(key === coordinates) {
                if(board[key] === '-') {
                    board[key] = 'M';
                    return false;
                } else {
                    for(let keys in shipsObject) {
                        if(board[key] === keys) {
                            shipsObject[keys].hit();
                            sunkCounter++;
                        }
                    }

                    return true;

                } 
            }
        }
    };

    //all have been hit 
    const allSunk = (sunkCounter) => {

       return sunkCounter === 20 ? 'All the ships have been sunk' : 'Not all ships are sunk';

    }

    return {board, receiveAttack, shipsObject, allSunk, sunkCounter, placeShip}

};

module.exports = gameBoard;