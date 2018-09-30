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

  // create empty array
  const stairs = [];

  // create function that creates the stars row
  function stars(num) {
    let counter = 0;
    let result = '';

    // add the appropriate amount of stars in row
    while (counter !== num) {
      result += '*';
      counter += 1;
    }

    // buffer the row with spaces in row
    let buffer = n - result.length;
    while (buffer !== 0) {
      result = ` ${result}`;
      buffer -= 1;
    }
    return result;
  }

  // looping through n-1, starting at n
  for (let i = n; i > 0; i -= 1) {
    const row = stars(i);
    stairs.unshift(row);
  }
  return stairs;

  // stairs.forEach((lvl) => {
  //   console.log(lvl);
  // });
}

module.exports = drawStairs;

// console.log(drawStairs(25));
