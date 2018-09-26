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

function drawStairs(n, count = 1, reverseCount = n-1, total = '*') {
    if (count === n) {
        console.log(total);
        return;
    }
    let string = '';
    for (let i=reverseCount; i>0; i--) {
        string += ' '
    }
    // using repeat
        // console.log(' '.repeat(reverseCount) + total);
    console.log(string + total);
    return drawStairs(n, count+=1, reverseCount-=1, total += '*');
}




drawStairs(7);
module.exports = drawStairs;
