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
    let i = 0;
    while (i < n) {
        let str = '';
        let j = 0;
        while (j < n) {
            if (j < n - i - 1) {
                str += ' ';
            } else {
                str += '*';
            }
            j++;
        }
        console.log(str);
        i++;
    }
}

drawStairs(6);

module.exports = drawStairs;
