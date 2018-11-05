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

 // I got help from the internet **make sure to redo

function mergeRanges(array) {
  // sort the array first
  const sortedArr = array.sort((a, b) => { return a[0]-b[0] || a[1]-b[1] });
  // create a return result array
  const result = [];
  // last variable keeps track of the previous element while looping
  let last;

  // looping through the sorted array
  sortedArr.forEach(ele => {
    console.log(result);
    // compare the last index of the current element with first index of the new index
    if (!last || ele[0] > last[1]) {
      last = ele;
      result.push(last);
    // compare the last index of the current element with the last index of the next index
    } else if (ele[1] > last[1]) {
      last[1] = ele[1];
    }
  })
  
  return result;
}

console.log(mergeRanges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]));

module.exports = mergeRanges;
