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

const cache = {
  0: 1,
  1: 1,
};

function countStairs(n) {
  // Edge case: Input NaN or less than 0
  if (typeof n !== 'number' || n < 0) return 0;
  if (cache[n]) return cache[n];
  cache[n] = countStairs(n - 1) + countStairs(n - 2);
  return cache[n];
}

module.exports = countStairs;

console.log('---TESTING countStairs---');
console.log(`countStairs(1): expect -> 1: actual -> ${countStairs(1)}`);
console.log(`countStairs(2): expect -> 2: actual -> ${countStairs(2)}`);
console.log(`countStairs(5): expect -> 8: actual -> ${countStairs(5)}`);
console.log(`countStairs(50): expect -> 20,365,011,074: actual -> ${countStairs(50)}`);
