/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

// time complexity n^2
// function twoSum(arr, n) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === n) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

function twoSum(arr, n) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }

  for (let j = 0; j < arr.length; j++) {
    if (obj[n - arr[j]]) {
      if (arr[j] !== n - arr[j]) {
        return true;
      } else if (obj[n-arr[j]] > 1) {
        return true;
      }
    }
  }
  
  return false;
}

console.log(twoSum([1,3,3], 5))
module.exports = twoSum;
