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
  const max = Math.max(array);
  const sumMinusDouble = (max / 2) * (1 + max);
  let totalSum = 0;
  for (let i = 0; i < array.length; i += 1) {
    totalSum += array[i];
  }
  return totalSum - sumMinusDouble;
}

module.exports = repeatNumbers;
