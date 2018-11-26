/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 1 + 1
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */

function countStairs(n) {
  let resultCount = 0;
  function recurse(n) {
    console.log('THIS IS N',n);
    if(n === 0) {
      resultCount += 1;
      return;
    } 
    if(n > 0) {
      recurse(n-2);
      recurse(n-1);
    }
  }
  recurse(n);
  return resultCount;
}
console.log(countStairs(5));

module.exports = countStairs;
