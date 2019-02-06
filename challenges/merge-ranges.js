/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

// 




function mergeRanges(array) {
  const sortedArr = array.sort((arrA, arrB) => arrA[0] - arrB[0]);
  const mergedRanges = [sortedArr[0]];
  for (let i = 1; i < sortedArr.length; i += 1) {
    let curr = sortedArr[i];
    let last = mergedRanges[mergedRanges.length - 1];
    if (curr[0] > last[1]) {
      mergedRanges.push(curr);
    } else if (curr[1] > last[1]) {
      last[1] = curr[1];
    }
  }
  return mergedRanges;
}
// function mergeRanges(array) {
//   array.sort(function(a, b) {
//     return a[0] - b[0];
//   });
//   var result = [array[0]];
//   for (var i = 1; i < array.length; i++) {
//     var curr = array[i];
//     var last = result[result.length - 1];
//     if (curr[0] > last[1]) {
//       result.push(curr);
//     } else if (curr[1] > last[1]) {
//       last[1] = curr[1];
//     }
//   }
//   return result;
// }

var times = [[0, 1], [3, 5], [4, 8], [10, 15], [11, 13]];

console.log('answer: ', mergeRanges(times)); // -> [[0, 1], [3, 8], [9, 12]]


module.exports = mergeRanges;
