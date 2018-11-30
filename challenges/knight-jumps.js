// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

// [ ][ ][ ][ ][ ][ ][ ][ ]
// [ ][ ][ ][ ][ ][ ][ ][ ]
// [ ][ ][o][ ][o][ ][ ][ ]
// [ ][o][ ][ ][ ][o][ ][ ]
// [ ][ ][ ][x][ ][ ][ ][ ]
// [ ][o][ ][ ][ ][o][ ][ ]
// [ ][ ][o][ ][o][ ][ ][ ]
// [ ][ ][ ][ ][ ][ ][ ][ ]

function knightjumps(str) {
  const x = str.split('')[1];
  const y = str.split('')[3];
  // const count = 8;
  if ((x === 1 || x === 8) && (y === 1 || y === 8)) {
    return 2;
  }
  if (x >= 3 && x <= 6 && y >= 3 && y <= 6) {
    return 8;
  }
  if ((x < 3 || x > 6) && (y === 2 && y === 7)) {
    return 6;
  }
  if ((x < 3 || x > 6) && (y < 3 && y > 6)) {
    return 4;
  }
  if ((x === 2 || x === 7) && (y === 1 || y === 8)) {
    return 3;
  }
 
}
console.log(knightjumps('(4 5)'));
module.exports = knightjumps;
