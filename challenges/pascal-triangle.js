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

function pascalTriangle(numRows, PT = []) {
  if (PT.length === numRows) return PT;
  if (numRows === 1) return pascalTriangle(numRows, [[1]]);

  // take the last row and reduce for a new array
  const priorRow = PT[PT.length - 1];
  const nextRow = [];

  for (let i = 0; i <= PT.length; i += 1) {
    if (i === 0 || i === PT.length) nextRow.push(1);
    else {
      nextRow.push(priorRow[i - 1] + priorRow[i]);
    }
  }
  PT.push(nextRow);
  return pascalTriangle(numRows, PT);
}

module.exports = pascalTriangle;

// console.log(pascalTriangle(5));