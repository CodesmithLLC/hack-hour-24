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
    let newGrid = [];
    for (let i = 0; i < n; i++) {
        newGrid.push([]);
        for (let j = 0; j < n; j++) {
            newGrid[i].push(undefined);
        }
    }
    let x = 0;
    let y = 0;
    for (let newY = n - 1; newY >= 0; newY--) {
        for (let newX = 0; newX < n; newX++) {
            console.log(x, y);
            newGrid[newX][newY] = grid[x][y];
            if (++y % n == 0) {
                y = 0;
                x++;
            }
        }
    }
    console.log(newGrid);
    return newGrid;
}

rotateGrid([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 4);
module.exports = rotateGrid;
