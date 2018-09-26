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
    let k = 0;
    for (let i = 0; i < n; i++) {
        str = '';
        for (let j = 0; j < n - i - 1; j++)
            str += ' ';
        for (let j = 0; j < i + 1; j++)
            str += '*';
    
        console.log(str);
    }
}

drawStairs(6);

module.exports = drawStairs;
