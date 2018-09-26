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
    let str = "";
    let remain = 0;
    for(let i = n; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            str += " ";
        }
        remain++;
        for(let k = 0; k < remain ;k++){
            str += "*";
        }
        console.log(str);
        str = "";
    }
}

drawStairs(6);

module.exports = drawStairs;
