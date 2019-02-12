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

function pascalTriangle(numRows) {
  const result = [];
  for (let i = 0; i < numRows; i += 1) {
    const row = [];
    for (let j = 0; j <= i; j += 1) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        const sum = result[result.length - 1][j - 1] + result[result.length - 1][j];
        row.push(sum);
      }
    }
    result.push(row);
  }
  return result;
}


module.exports = pascalTriangle;
