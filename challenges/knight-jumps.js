// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"


function countMoves(coordNums, offsetChoices) {
  if (coordNums.length === 0)
    return 1;
  let moves = 0;
  const curCoordNum = coordNums.shift();
  for (let i = 0; i < offsetChoices.length; i++) {
    let newOffsetChoices = offsetChoices.slice();
    newOffsetChoices.splice(i, 1);
    // get combination counts of the other coords
    const subMoves = countMoves(coordNums.slice(), newOffsetChoices);
    if (curCoordNum + offsetChoices[i] <= 8) {
      moves += subMoves;
    }
    if (curCoordNum - offsetChoices[i] > 0) {
      moves += subMoves;
    }
  }
  return moves;
}

function knightjumps(str) {
  const coords = str.match(/[0-9]+/g);
  if (coords.length != 2)
    return;
  const coordNums = coords.map(elem => Number.parseInt(elem));
  return countMoves(coordNums, [2, 3]);
}
console.log(knightjumps('(4 5)'));
module.exports = knightjumps;
