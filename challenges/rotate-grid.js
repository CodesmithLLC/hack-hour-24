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
  // const output = [];
  // for (let i = 0; i < n; i += 1){
  //   output.push([]);
  // }
  // for (let i = 0; i < n; i += 1){
  //   for(let z = 0; z < n; z += 1){
  //     output[i][n-1-z] = grid[z][i];
  //   }
  // }
  // console.log(output);
  // return output;
  let temp;
  let count = 0;
  for (let i = 0; i < n; i += 1){
    grid[i] = grid[i].reverse();
  }
  for(let i = 0; i < n; i += 1){
    for (let z = 0; z < n; z += 1){
      temp = grid[i][z];
      grid[i][z] = grid[n-1-z][n-1-i];
      grid[n-1-z][n-1-i] = temp;
      count += 1;
      if(count > n+1){
        break;
      }
    }
  }
  //console.log(grid);
  return grid;
}
const grid = [[1, 2, 3,10],
              [4, 5, 6, 11],
              [7, 8, 9, 12],
              [13, 14, 15, 16]]

console.log(rotateGrid(grid, 4));
module.exports = rotateGrid;
