/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function singleRow(numRows) {
  let bigArr = {1:[1], 2:[1, 1]};

  if (bigArr[numRows]) return bigArr[numRows];

  bigArr[numRows] = [];
  bigArr[numRows][0] = 1; 
  for (let i = 1; i < numRows - 1; i++) {
    // console.log(singleRow(numRows-1))
    bigArr[numRows][i] = singleRow(numRows-1)[i-1] + singleRow(numRows-1)[i];
  }
  bigArr[numRows][numRows-1] = 1;
  return bigArr[numRows];
}
function pascalTriangle(numRows) {
  let result = [];
  for (let i = 1; i < numRows + 1; i++) {
    // console.log(singleRow(i))
    result.push(singleRow(i));
  }
  return result;
}
// console.log(pascalTriangle())
module.exports = pascalTriangle;
