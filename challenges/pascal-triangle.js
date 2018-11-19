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
  // Edge Case: numRows = 0 or doesn't exist;
  if (!numRows) return [];
  // Initialize return triangle (with first row defined) and row counter
  const triangle = [[1]];
  let currentRow = 2;

  // Helper Function to Construct Row
  const constructRow = (array) => {
    const newArr = [1];
    for (let i = 1; i < array.length; i += 1) {
      newArr.push(array[i - 1] + array[i]);
    }
    newArr.push(1);
    return newArr;
  };

  // Build each row using the helper function
  while (numRows >= currentRow) {
    triangle.push(constructRow(triangle[currentRow - 2]));
    currentRow += 1;
  }

  // Return completed triangle
  return triangle;
}

module.exports = pascalTriangle;

// console.log('---TESTING pascalTriangle---');
// console.log('Pascal Triangle 1: ', pascalTriangle(1));
// console.log('Pascal Triangle 2: ', pascalTriangle(2));
// console.log('Pascal Triangle 3: ', pascalTriangle(3));
// console.log('Pascal Triangle 4: ', pascalTriangle(4));
// console.log('Pascal Triangle 5: ', pascalTriangle(5));
