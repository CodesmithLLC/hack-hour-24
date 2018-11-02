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
function isOverlapped(arr1, arr2) {
  return ((arr1[0] <= arr2[0] && arr1[1] >= arr2[0]) ||
   (arr1[0] <= arr2[1] && arr1[1] >= arr2[1]));
}

function mergeRanges(array) {
  return array.reduce((ranges, elem) => {
    if (ranges.length === 0)
      ranges.push(elem);
    else {
      // Iteratively find if there's overlapped in ranges, modify that range if found. After iternation and if there's no overlapped found, add new range
      let hasOverlap = false;
      for (let i = 0; i < ranges.length; i++){
        let range = ranges[i];
        if (isOverlapped(range, elem)) {
          range[0] = Math.min(range[0], elem[0]);
          range[1] = Math.max(range[1], elem[1]);
          hasOverlap = true;
          break;
        }
      }
      if (!hasOverlap)
        ranges.push(elem);
    }
    return ranges;
  }, []);
}

let times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
console.log(mergeRanges(times));
module.exports = mergeRanges;
