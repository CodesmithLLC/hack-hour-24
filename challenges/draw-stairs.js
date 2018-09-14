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
    let output = '';
    let numAsterisks = 1;
    for(let i = 1; i <= n; i++) {
        output+= ' '.repeat(n-numAsterisks) + '*'.repeat(numAsterisks) + '\n';
        numAsterisks++;
    }
    if(output[output.length-1] === '\n') {
        output = output.split('').slice(0,output.length-1).join('');
    }
    return output;
}

module.exports = drawStairs;
