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
    let result = '';
    for (let i = n; i > 0; i--) {
        // line 1 = i = 6 => (i - 1) 5 spaces, 1 #
        // line 2 = i = 5 => (i - 1) 4 spaces, 2 #
        result += ' '.repeat(i - 1).concat('#'.repeat(n - i) + '\n');
    }
    return result;
}

console.log(drawStairs(6));


module.exports = drawStairs;
