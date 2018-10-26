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
  let stairs = null;
  for (let i = 1; i <= n; i += 1) {
    const buffer = (' ').repeat(n - i);
    const stars = ('*').repeat(i);
    console.log(`${buffer}${stars}`);
    stairs = stairs === null ? `${buffer}${stars}\n` : stairs += `${buffer}${stars}\n`;
  }
  console.log(stairs);
  return stairs;
}

module.exports = drawStairs;
