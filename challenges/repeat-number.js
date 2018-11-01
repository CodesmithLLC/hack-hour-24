/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  let cache = {};
  for (let i = 0; i < array.length; i += 1) {
    if (cache[array[i]]) {
      return i;
    }
    else {
      cache[array[i]] = 1;
    }
  }
  return false;
}

module.exports = repeatNumbers;
