/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

// Helper function that sums values in an array
const sumArrVals = arr => arr.reduce((acc, val) => acc + val);

function maxSubarray(arr) {
  // Edge case, empty array
  if (!arr.length) return 0;
  // Terminal case, array has one value, return that value
  if (arr.length === 1) return arr[0];
  // Otherwise, return the max of the summed values and two recursive calls
  return Math.max(sumArrVals(arr), maxSubarray(arr.slice(1)), maxSubarray(arr.slice(0, -1)));
}

module.exports = maxSubarray;

console.log('---TESTING maxSubarray---');
console.log(`maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]): expect -> 18 | actual -> ${maxSubarray([1, -2, 3, 10, -4, 7, 2, -5])}`);
console.log(`maxSubarray([15, 20, -5, 10]): expect -> 40 | actual -> ${maxSubarray([15, 20, -5, 10])}`);
