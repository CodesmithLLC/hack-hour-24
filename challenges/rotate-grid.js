/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

const rotateGrid = function rotateGrid(grid, n) {
  // Edge Case - grid size 0 or 1
  if (n < 2) return grid;
  // Starting iterating from the bottom row, going up
  for (let i = n - 1; i >= 0; i -= 1) {
    // Push each value in the current row to the end of the array that corresponds to its index
    for (let j = 0; j < n; j += 1) {
      grid[j].push(grid[i].shift());
    }
  }
  // Once complete, return the rotated grid
  return grid;
};

module.exports = rotateGrid;

// // TESTING rotateGrid
// // Helper function to generate a sample grid
// const genGrid = function genGrid(n) {
//   const outGrid = [];
//   let counter = 1;
//   for (let i = 0; i < n; i += 1) {
//     outGrid.push([]);
//     for (let j = 0; j < n; j += 1) {
//       outGrid[i][j] = counter;
//       counter += 1;
//     }
//   }
//   return outGrid;
// };

// // declare a constant for the side length
// const sideLen = 4;

// const sampleGrid = genGrid(sideLen);

// console.log(sampleGrid);
// console.log(rotateGrid(sampleGrid, sideLen));
