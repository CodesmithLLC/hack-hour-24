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
  const sortedArr = array.sort();
  const last = sortedArr[sortedArr.length - 1];
  const sumMinusDouble = (last / 2) * (1 + last);
  let totalSum = 0;
  for (let i = 0; i < sortedArr.length; i += 1) {
    totalSum += sortedArr[i];
  }
  return totalSum - sumMinusDouble;
}

module.exports = repeatNumbers;
