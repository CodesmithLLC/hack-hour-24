/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  // Bruteforce.
  let start;
  let end;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i += 1) {
    let curSum = 0;
    for (let j = i; j < arr.length; j += 1) {
      curSum += arr[j];
      if (curSum > max) {
        max = curSum;
        start = i;
        end = j;
      }
    }
  }

  return max;
}

// function maxSubarray2(arr) {
//   let start;
//   let end;
//   let max = -Infinity;
//   let curSum = 0;
//   let i = 0;
//   let j = 0;

//   while (j < arr.length) {
//     if (curSum + arr[j] < 0) {
//       if (curSum > max) {
//         max = curSum;
//         start = i;
//         end = j - 1;
//       }
//       curSum = arr[j];
//       i = j;
//     } else {
//       curSum += arr[j];
//     }
//     j += 1;
//   }

//   return max;
// }

// console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));

module.exports = maxSubarray;
