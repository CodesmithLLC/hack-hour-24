/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

 // you have to find the best sum of the previous point in the array
function maxSubarray(arr) {  
  // set accumulated sum and maximum sum to negative infinity to start
  let accumulated = -Infinity, max = -Infinity;
  // loop through arr
  for (const num of arr) {  
    // accumulated sum will either add to the previous accumulation, or it won't
    accumulated = Math.max(accumulated + num, num);
    // accumulated sum will either be better than max sum, or it won't
    max = Math.max(accumulated, max);
  }
  // return maximum sum
  return max;
}

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]))

module.exports = maxSubarray;
