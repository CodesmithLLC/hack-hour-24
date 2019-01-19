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
    // loop to log each line
    for (let i = n; i >= 1; i--){
        // set each string to empty and then add to it
        let line = "";
        // use a loop to add the correct amount of spaces 
        for (let j = 1; j <= n; j++){
            if (j >= i){
              line += "*";
            } else {
              line += " ";
            }
        }
        console.log(line);
    }
}

drawStairs(10);

module.exports = drawStairs;
