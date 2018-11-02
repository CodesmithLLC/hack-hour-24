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


function mergeRanges(array) {
  let sorted;
  let range = [];
  let output = [];
  let rangeIndex = 0;
  sorted = array.sort((a,b) => a[0] > b[0]);
  console.log(array);
  for (let i = 0; i < array.length; i += 1) {
    if(output.length === 0) {
      output.push(array[i]);
    } else{
      if(array[i][0] >= output[rangeIndex][0] && array[i][0] <= output[rangeIndex][1]){
        output[rangeIndex][1] = array[i][1];
      } else{
        output.push(array[i]);
        rangeIndex += 1;
      }
    }
  }
  return output;
}
var test = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
console.log(mergeRanges(test));
module.exports = mergeRanges;
