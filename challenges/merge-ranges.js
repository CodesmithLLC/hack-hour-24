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

  const sortedRanges = array.sort((a, b) => a[0] > b[0]);
  const mergedRanges = [];
  let curRange;

  sortedRanges.forEach((range) => {
    if (curRange === undefined) {
      curRange = range;
    } else if (range[0] > curRange[1]) {
      mergedRanges.push(curRange);
      curRange = range;
    } else {
      curRange[1] = Math.max(curRange[1], range[1]);
    }
  });

  // Push last range.
  if (curRange !== undefined) {
    mergedRanges.push(curRange);
  }

  return mergedRanges;
}

const times = [[9, 10], [0, 1], [3, 5], [4, 8], [10, 12]];

console.log(mergeRanges(times));

module.exports = mergeRanges;
