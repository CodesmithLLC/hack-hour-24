// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"


function knightjumps(str) {
  const x = +str[1];
  const y = +str[3];
  let result = 8;
  // if x is 2 or 7, subtract 2
  if (x === 2 || x === 7) {
    result -= 2;
    // if y is 2 or 7 subtract 2
    if (y === 2 || y === 7) {
      result -= 2;
    }
    // if y is 1 or 8 subtract 3
    if (y === 1 || y === 8) {
      result -= 3;
    }
  }
  // if x is 1 or 8, subtract 4
  if (x === 1 || x === 8) {
    result -= 4;
    // if y is 2 or 7 subtract 1
    if (y === 2 || y === 7) {
      result -= 1;
    }
    // if y is 1 or 8 subtract 2
    if (y === 1 || y === 8) {
      result -= 2;
    }
  }
  // if x is 3-6
  if (x > 2 && x < 7) {
    // if y is 1 or 8 subtract 4
    if (y === 1 || y === 8) {
      result -= 4;
    }
    // if y is 2 or 7 subtract 2
    if (y === 2 || y === 7) {
      result -= 2;
    }
  }
  return result;
}


//console.log(knightjumps('(2 2)'));
module.exports = knightjumps;
