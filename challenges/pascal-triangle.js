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

/*
  [1, 4, 6, 4, 1],
  [1, 5, 10, 10, 5, 1]

  curr[0] = prev[0]
  curr[1] = prev[0] + prev[1]
  curr[2] = prev[1] + prev[2]
  curr[3] = prev[2] + prev[3]
  curr[4] = prev[3] + prev[4]
  curr[5] = prev[4] 
*/

/* my idea:
  construct either just the 1st or both 1st and 2nd rows
  then loop through using the previous row as a base to construct the next line
  stop when it reaches the nth level deep
*/

function pascalTriangle(numRows) {
  if (numRows < 1) return [];
  const triangle = [[1]];

  for (let i = 0; i < numRows - 1; i += 1) {
    const row = [1];

    for (let j = 1; j < triangle[i].length; j += 1) {
      row[j] = triangle[i][j] + triangle[i][j - 1];
    }
    row.push(1);
    triangle.push(row);
  }
  return triangle;
}

module.exports = pascalTriangle;
