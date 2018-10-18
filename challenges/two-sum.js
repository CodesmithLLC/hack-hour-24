/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const nums = [];
  for (let i = 0; i < arr.length; i += 1) {
    nums.push(n - arr[i]);
  }
  for (let j = 0; j < arr.length; j += 1) {
    if (nums.indexOf(arr[j]) > -1 && nums.indexOf(arr[j]) !== j) return true;
  }
  return false;
}
console.log(twoSum([1,4,5,7], 10))
module.exports = twoSum;
