/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let maxSum = Math.max();
  let sumArray;
  let runningSum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    runningSum += arr[i];
    if(runningSum > maxSum) {
      maxSum = runningSum;
    }
    for(let x = i + 1; x < arr.length; x += 1){
      runningSum += arr[x];
      if(runningSum > maxSum) {
        maxSum = runningSum;
      }
    }
    runningSum = 0;
  } 
  return maxSum;
}

const test = [-15, -20, -5, -10];
const test2 = [1, -2, 3, 10, -4, 7, 2, -5];

console.log(maxSubarray(test));
console.log(maxSubarray(test2))

module.exports = maxSubarray;
