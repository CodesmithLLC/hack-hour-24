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
  let row = [1];
  let ret = [row];
  for (let i = 1; i < numRows; i++) {
    let newRow = [];
    for (let j = 0; j <= row.length; j++) {
      var temp;
      if (j === 0)
        temp = row[0];
      else if (j === row.length)
        temp = row[j - 1];
      else
        temp = row[j] + row[j - 1];
      newRow.push(temp);
    }
    ret.push(newRow);
    row = newRow;
  }
  return ret;
}
console.log(pascalTriangle(6));
module.exports = pascalTriangle;
