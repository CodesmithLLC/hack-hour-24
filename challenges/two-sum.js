/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const obj = {};

  for (let i = 0; i < arr.length; i += 1) {
    if (obj[arr[i]]) obj[arr[i]] += 1;
    else obj[arr[i]] = 1;
  }
  // console.log(obj);
  for (let i = 0; i < arr.length; i += 1) {
    if (obj[n - arr[i]]) {
      if (arr[i] !== n - arr[i]) {
        return true;
      } if (obj[n - arr[i]] > 1) {
        return true;
      }
    }
  }

  return false;

  // for (let i = 0; i < arr.length; i += 1) {
  //   const index = arr.indexOf(n - arr[i]);
  //   if (index > -1 && index !== i) {
  //     return true;
  //   }
  // }

  // return false;
}

// console.log(twoSum([1, 2, 3], 7));

module.exports = twoSum;
