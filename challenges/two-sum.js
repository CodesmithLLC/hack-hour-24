/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  let found = false;
  let workArr = Array.from(arr);
  arr.forEach((item, index)  => {
    workArr.splice(index, 1);
    if (workArr.indexOf(n - item) !== -1) found = true;
    workArr.splice(index, 0, item);
  })
  return found;
}

module.exports = twoSum;
