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

    for (let i = 0; i <= n; i++) {
        let newArr = new Array(n).fill(' ');
        for (let j = 0; j <= i; j++) {
            newArr[j] = '*';
        }
        console.log(newArr.reverse().join(''))
    }
    //create a forloop that maxes at n 

    //init an empty array each time 

    //second for loop? 

    //add an increment of an asterick at each iteration 


}


module.exports = drawStairs;

drawStairs(5)