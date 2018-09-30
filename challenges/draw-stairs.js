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

  let stairCase = '';

  for (let i = 1; i <= n; i += 1) {
    let buffer = (' ').repeat(n - i);
    const stars = ('*').repeat(i);
    if (i === 1) buffer = buffer.substring(1);
    stairCase += `${buffer}${stars}\n`;
  }
  return stairCase;
}

module.exports = drawStairs;

console.log(drawStairs(8));
