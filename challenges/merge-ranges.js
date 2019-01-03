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
  const mergedRanges = [array[0]];
  const sortedArr = array.sort( (arrA, arrB) => {
    return arrA[0] - arrB[0]
  });
  for (let i = 1; i < sortedArr.length; i += 1) {
    let merged = false;
    for (let j = 0; j < mergedRanges.length; j += 1) {
      if (sortedArr[i][0] >= mergedRanges[j][0] && sortedArr[i][0] <= mergedRanges[j][1]) {
        if (sortedArr[i][1] > mergedRanges[j][1]) {
          mergedRanges[j][1] = sortedArr[i][1];
          merged = true;
        }
      }
      if (sortedArr[i][1] >= mergedRanges[j][0] && sortedArr[i][1] <= mergedRanges[j][1]) {
        if (sortedArr[i][0] < mergedRanges[j][0]) {
          mergedRanges[j][0] = sortedArr[i][0];
          merged = true;
        }
      }
    }
    if (!merged) {
      mergedRanges.push(sortedArr[i]);
    }
  }
  return mergedRanges;
}

var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]

console.log('answer: ', mergeRanges(times)); // -> [[0, 1], [3, 8], [9, 12]]

module.exports = mergeRanges;
