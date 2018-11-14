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
  const numObj = {};

  for (let i = 0; i < array.length; i += 1) {
    if (numObj[array[i]]) return array[i];
    numObj[array[i]] = true;
  }
  return undefined;
}

module.exports = repeatNumbers;

console.log(repeatNumbers([1, 2, 3, 2]));
// (3 * 4) / 2