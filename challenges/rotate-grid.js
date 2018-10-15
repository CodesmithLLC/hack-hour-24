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

 // 11 12 13 -> 31 32 33
 // 21 22 23 -> 12 22 32
 // 31 32 33 -> 11 21 31

 // 12
 // 34

 // 31
 // 42
function rotateGrid(grid, n) {
  if (n > grid.length) return undefined 
  const arrBig = [];
  for (let i = 0; i < n; i += 1) {
    arrBig[i] = [];
  }

  for (let i = 0; i < n; i += 1) {
    for (let j = n - 1; j >= 0; j -= 1) {
      arrBig[i].push(grid[j][i]);
    }
  }
  return arrBig;
}
console.log(rotateGrid([   [1, 2,3,4],
                           [5,6,7,8],
                           [9,10,11,12],
                           [13,14,15,16]
                           ], 5))
module.exports = rotateGrid;
