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
  // Check if Knight is next to a vertical edge - then check distance to horizontal edge
  if (Number(str[1]) === 1 || Number(str[1]) === 8) {
    if (Number(str[3]) === 1 || Number(str[3]) === 8) return 2;
    if (Number(str[3]) === 2 || Number(str[3]) === 7) return 3;
    return 4;
  }
  if (Number(str[1]) === 2 || Number(str[1]) === 7) {
    if (Number(str[3]) === 1 || Number(str[3]) === 8) return 3;
    if (Number(str[3]) === 2 || Number(str[3]) === 7) return 4;
    return 6;
  }
  if (Number(str[3]) === 1 || Number(str[3]) === 8) return 4;
  if (Number(str[3]) === 2 || Number(str[3]) === 7) return 6;
  return 8;
}

module.exports = knightjumps;

// console.log('---TESTING knightJumps---');
// console.log(`knightjumps('(1 1)'): expect -> 2: actual -> ${knightjumps('(1 1)')}`);
// console.log(`knightjumps('(1 8)'): expect -> 2: actual -> ${knightjumps('(1 8)')}`);
// console.log(`knightjumps('(8 1)'): expect -> 2: actual -> ${knightjumps('(8 1)')}`);
// console.log(`knightjumps('(8 8)'): expect -> 2: actual -> ${knightjumps('(8 8)')}`);
// console.log(`knightjumps('(1 2)'): expect -> 3: actual -> ${knightjumps('(1 2)')}`);
// console.log(`knightjumps('(1 7)'): expect -> 3: actual -> ${knightjumps('(1 7)')}`);
// console.log(`knightjumps('(8 2)'): expect -> 3: actual -> ${knightjumps('(8 2)')}`);
// console.log(`knightjumps('(8 7)'): expect -> 3: actual -> ${knightjumps('(8 7)')}`);
// console.log(`knightjumps('(2 1)'): expect -> 3: actual -> ${knightjumps('(2 1)')}`);
// console.log(`knightjumps('(2 8)'): expect -> 3: actual -> ${knightjumps('(2 8)')}`);
// console.log(`knightjumps('(7 1)'): expect -> 3: actual -> ${knightjumps('(7 1)')}`);
// console.log(`knightjumps('(7 8)'): expect -> 3: actual -> ${knightjumps('(7 8)')}`);
// console.log(`knightjumps('(1 2)'): expect -> 4: actual -> ${knightjumps('(2 2)')}`);
// console.log(`knightjumps('(1 7)'): expect -> 4: actual -> ${knightjumps('(7 7)')}`);
// console.log(`knightjumps('(8 2)'): expect -> 4: actual -> ${knightjumps('(7 2)')}`);
// console.log(`knightjumps('(8 7)'): expect -> 4: actual -> ${knightjumps('(7 7)')}`);
// console.log(`knightjumps('(2 1)'): expect -> 4: actual -> ${knightjumps('(2 2)')}`);
// console.log(`knightjumps('(2 8)'): expect -> 4: actual -> ${knightjumps('(2 7)')}`);
// console.log(`knightjumps('(7 1)'): expect -> 4: actual -> ${knightjumps('(7 2)')}`);
// console.log(`knightjumps('(7 8)'): expect -> 4: actual -> ${knightjumps('(7 7)')}`);
