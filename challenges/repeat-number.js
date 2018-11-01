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

// let arr = [1,3,5,2,4,6,]
function repeatNumbers(array) {
  if (!Array.isArray(array)) return undefined;
  const sum1 = array.reduce((a, b) => a + b);
  const sum2 = Math.max(...array) * (Number(Math.max(...array)) + 1) / 2;
  const result = sum1 === sum2 ? undefined : sum1 - sum2;
  return result;
}
// console.log(repeatNumbers(arr))

module.exports = repeatNumbers;
