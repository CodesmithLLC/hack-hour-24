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
  const triangleArr = [];

  // Take care of base cases for numRows = 0, 1, or 2.
  if (numRows === 0) {
    return triangleArr;
  }

  triangleArr.push([1]);
  if (numRows === 1) {
    return triangleArr;
  }

  triangleArr.push([1, 1]);
  if (numRows === 2) {
    return triangleArr;
  }

  let curRow = 2;

  while (curRow < numRows) {
    const tempArr = Array(curRow + 1).fill(1);

    for (let i = 1; i < curRow; i += 1) {
      tempArr[i] = triangleArr[curRow - 1][i - 1] + triangleArr[curRow - 1][i];
    }

    triangleArr.push(tempArr);
    curRow += 1;
  }

  return triangleArr;
}

// console.log(pascalTriangle(1));
// console.log(pascalTriangle(2));
// console.log(pascalTriangle(3));
// console.log(pascalTriangle(4));
// console.log(pascalTriangle(5));
// console.log(pascalTriangle(6));

module.exports = pascalTriangle;
