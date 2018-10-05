/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */
function subsetSum(array, target) {
  // inner function to test if the array elements from i, onwards to the end,
  // can match the target value
  function testSum(target, i) {
    // if the target has been driven down to 0, return true
    if (target === 0) return true;
    // if we've gone through the entire array of numbers and target still
    // is not equal to 0, return false
    if (i === array.length) return false;

    // either we use the current number, or we don't use the current number
    return testSum(target - array[i], i + 1) || testSum(target, i + 1);
  }

  // run test sum on our target, with index starting at 0
  return testSum(target, 0);
}

console.log(subsetSum([3, 34, 4, 12, 5, 12], 32));
module.exports = subsetSum;