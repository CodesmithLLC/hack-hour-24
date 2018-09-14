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
    let tracker = 1;
    for (let spaces = n; spaces > 0; spaces--){   
        for(let x = 1; x < spaces; x++){
            output += ' ';
        }
        for (let y = spaces-tracker; y < spaces; y++){
            output += '*';
        }
        tracker +=1;
        output += '\n';
    }
    return output;
}

console.log(drawStairs(6));
module.exports = drawStairs;
