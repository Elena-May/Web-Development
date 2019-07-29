const player = require('player.js');
const computerPlayer = require('compPlayer.js');

const Player = player();
const Computer = computerPlayer();

const coordInput = document.getElementById('input');

    const placeShips = (coordInput) => {
        while (count < shipArray.length) {
            placeShip(ship, coordInput);
            incrementShip();
            document.getElementById("myForm").reset();
        }
    }

// need a function that changes the ship the user is asked to input
// need a function that changes the name of the ship being inputed

// increment ship function, called after every input
// need to place the placing of ships into a loop in this folder

// put the increment Ship function in player module