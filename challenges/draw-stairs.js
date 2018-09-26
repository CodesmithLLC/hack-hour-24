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
    let space = ' ';
    let asterisk = '*';
    console.log(space + asterisk);
    for (let i = 1; i < n; i ++) {
        let asterisks = asterisk.repeat(i);
        let spaces = space.repeat(n - i);
        // console.log(asteriskString + spaceString);
        console.log(spaces + asterisks);
    }
}


module.exports = drawStairs;

console.log(drawStairs(10));