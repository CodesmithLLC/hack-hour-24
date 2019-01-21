/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.

 For example:
 drawStairs(6) ->
     *
    **
   ***
  ****
 *****
******

*/


function drawStairs(n) {
    // Represent each line of stairs by a string of leading spaces with a string of blocks
    let line = '';
    // Populate the line with blank spaces equal to the height of the stairs
    for (let i = 0; i < n; i += 1) {
      line += ' ';
    }
    // For each row: remove a leading space and add a block to the end of line, then print that line
    for (let i = 0; i < n; i += 1) {
      line = line.substring(1);
      line += '*';
      console.log(line);
    }
  }

drawStairs(3);

module.exports = drawStairs;
