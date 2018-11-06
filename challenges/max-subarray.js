/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let i = 0;
  let sum = 0;
  let start = 0;
  let end = 0;
  let max = Number.MIN_VALUE;

  while (i < arr.length) {
    if (sum === 0)
      start = i;
    sum += arr[i];
    if (sum > max) {
      max = sum;
      end = i;
    }
    // reset sum if sum is negative
    if (sum < 0) {
      sum = 0;
    }
    i ++;
  }
  return arr.slice(start, end + 1);
}

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));
console.log(maxSubarray([15,20,-5,10]))

module.exports = maxSubarray;
