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
    //build an array filled with blank spaces
    let log = Array(n + 1).fill(" ");

    //iterate through the array, adding one star to the end and console.logging the line
    for (let i = n - 1; i >= 0; i--) {
        log[i] = '*';
        console.log(log.join(''));
      }
}

drawStairs(6);


module.exports = drawStairs;
