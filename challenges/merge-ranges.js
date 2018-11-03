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
  // Edge Case - short array
  if (array.length <= 1) return array;
  // Sort arrays by starting time
  const sortedArr = array.sort((a, b) => a[0] - b[0]);
  // Declare output array
  const outArr = [];
  // Reducer that combines overlapping times
  const reducer = (firstTime, secondTime) => {
    // If two times overlap ...
    if (firstTime[1] >= secondTime[0]) {
      // ... return the combined time
      return [firstTime[0], Math.max(firstTime[1], secondTime[1])];
    }
    // Otherwise push the first time to output and return the second time
    outArr.push(firstTime);
    return secondTime;
  };
  const finalTime = sortedArr.reduce(reducer);
  // Push the final time to output and return
  outArr.push(finalTime);
  return outArr;
}

module.exports = mergeRanges;

// console.log('---TESTING mergeRanges---');
// const times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
// console.log(`mergeRanges(times): expect -> [[0, 1], [3, 8], [9, 12]]: actual -> [${mergeRanges(times)}]`);
