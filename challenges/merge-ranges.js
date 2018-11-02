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

var times = [[10, 12], [9, 10], [0, 1], [3, 5], [4, 8]];
function mergeRanges(array) {
  if (!Array.isArray(array) || array.some(i => !Array.isArray(i))) return undefined;
  // sort array
  let newArr = array.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  // merge
  let i = 0;
  while (newArr[i + 1]) {
    if (newArr[i + 1][0] >= newArr[i][0] && newArr[i + 1][0] <= newArr[i][1]) {
      if (newArr[i + 1][1] <= newArr[i][1]) {
        newArr.splice(i + 1, 1);
      } else {
        // how to array destructuring??
        newArr[i][1] = newArr[i + 1][1];
        newArr.splice(i + 1, 1);
      }
    }
    i += 1;
  }
  return newArr;
}
// console.log(mergeRanges(times));
// console.log(times.sort((a,b) => a[0]-b[0]))
module.exports = mergeRanges;
