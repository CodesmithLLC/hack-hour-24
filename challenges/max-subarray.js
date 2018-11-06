/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */



function maxSubarray(arr) {
  // if all negative
  if (!arr.some(i => i > 0)) {
    return Math.max(...arr);
  }
  // if at least 1 element > 0
  let sum = 0;
  const records = [];
  for (let i = 0; i < arr.length; i += 1) {
    // sum starts to add nums when it encounters the 1st positive num
    // if sum becomes negative, reset it to 0, start counting from the next positive num
    sum = Math.max(0, sum + arr[i]);
    records.push(sum);
    // console.log(sum);
    // console.log(records);
  }
  return Math.max(...records);
}
console.log(maxSubarray([3, -10, 4, -1, 2]));
module.exports = maxSubarray;
