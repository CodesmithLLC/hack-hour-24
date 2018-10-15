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

function rotateGrid(grid, n) {
  const gridCopy = grid.map((arr) => {
    return arr.slice();
  });

  // i need to use gridcopy so I can keep the original while replacing the original grid
  for (let x=0, y=0; x<grid[0].length; x++, y++) {
    // loop through first row to replace the last column
    // loop through last row to replace the first column
    grid[y][grid[0].length - 1] = gridCopy[0][x];
    grid[y][0] = gridCopy[n -1][x];

    // loop through last column to replace the last row
    // loop through first column to replace the first row
    grid[n-1][x] = gridCopy[y][gridCopy.length - 1];
    grid[y][0] = gridCopy[0][x];
  }
  return grid;
}

rotateGrid([   [1, 2, 3],
               [4, 5, 6],
               [7, 8, 9]  ], 3)
module.exports = rotateGrid;
