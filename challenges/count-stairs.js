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
function countStairsHelper(n, sub, solutions) {
  let result = countStairs(n - sub);
  for (let i = 0; i < result.length; i++) {
    result[i].unshift(sub);
    solutions.push(result[i]);
  }
  return solutions;
}

function countStairs(n) {
  if (n === 0)
    return [[]];
  let solutions = [];
  if ((n - 1) >= 0) {
    solutions = countStairsHelper(n, 1, solutions);
  }
  if ((n - 2) >= 0) {
    solutions = countStairsHelper(n, 2, solutions);
  }
  return solutions;
}
console.log(countStairs(5));

module.exports = countStairs;
