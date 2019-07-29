
shipArray = [{'name': 'something', 'number': 2}, {'name': 'somethingelse', 'number': 3} ]

let Ships = {};

for(let i=0; i<shipArray.length; i++) {
    Ships['Ship'+i] = shipArray[i];
};

board = {"1, 0": "-", "1, 1": "-"}

//const placeShips = (ship, ...coordinates) => {
  //  for (let key in board) {
  //  for (i = 0; i < coordinates.length; i++) {
     //   if (key === coordinates[i]) {
      //      for(let keys in Ships) {
         //       if (keys === ship) {
        //    board[key] = ship ;
      //  }
  //  }
  //  }
 //   }
//    };

 //   return board;
// };

for(let keys in Ships) {
    if('Ship0' === keys) {
        console.log(Ships[keys].name)
    }
}

//placeShips('Ship1', "1, 0");
//console.log(board)