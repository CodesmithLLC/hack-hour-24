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
  // const mergedArr = array.reduce((acc, v) => {
  //   const tempArr = [];
  //   for (let i = v[0]; i <= v[v.length - 1]; i += 1) {
  //     tempArr.push(i);
  //   }

  //   return acc.concat(tempArr);
  // }, []).sort((a, b) => a - b);

  // const mergedRanges = [];
  // let start;
  // let end;

  // for (let i = 0; i < mergedArr.length; i += 1) {
  //   if (start === undefined) {
  //     start = mergedArr[i];
  //     end = mergedArr[i];
  //   } else if (mergedArr[i] !== end + 1 && mergedArr[i] !== end) {
  //     mergedRanges.push([start, end]);
  //     start = mergedArr[i];
  //     end = mergedArr[i];
  //   } else {
  //     end = mergedArr[i];
  //   }
  // }

  // mergedRanges.push([start, end]);

  // return mergedRanges;

  const sortedRanges = array.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

  const mergedRanges = [];
  let currentRange;

  for (let i = 0; i < sortedRanges.length; i += 1) {
    if (currentRange === undefined) {
      currentRange = sortedRanges[i];
    } else if (currentRange[1] >= sortedRanges[i][0]) {
      currentRange[1] = Math.max(currentRange[1], sortedRanges[i][1]);
    } else {
      mergedRanges.push(currentRange);
      currentRange = sortedRanges[i];
    }
  }

  return sortedRanges;
}

const times = [[9, 10], [0, 1], [3, 5], [4, 8], [10, 12]];

console.log(mergeRanges(times));

module.exports = mergeRanges;
