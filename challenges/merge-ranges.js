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
  let mergeObj = {};

  for (let i = 0; i < array.length; i += 1) {
    const expanded = expand(array[i]);
    console.log(expanded)
    // const startRange = expandedAndStrung[0];
    // console.log(startRange)
    // console.log(mergeString.includes(expandedAndStrung))

    if (!mergeObj[array[i][0]]) mergeObj[expanded] = expanded;

    // if (!mergeString.includes(startRange)) mergeString += expandedAndStrung;
    // else {
    //   const indexOfConflict = mergeString.indexOf(startRange);
    //   console.log(indexOfConflict)
    //   // mergeString = mergeString.slice(0, indexOfConflict);
    //   // console.log()
    // }
    // console.log(mergeObj);
  }
  return mergeObj;
}

// function mergeRanges(array) {

//   // unflatten and expand each inner array range into one array
//   let flattenArray = array.reduce((accum, nextArr) => {
//     accum.push(...expand(nextArr));
//     return accum;
//   }, []);
//   flattenArray.sort((a, b) => a - b);
//   console.log(flattenArray)

//   // filter out duplicates
//   flattenArray = flattenArray.reduce((uniqueArr, nextNum) => {
//     if (!uniqueArr.includes(nextNum)) uniqueArr.push(nextNum)
//     return uniqueArr;
//   }, []);
//   console.log(flattenArray)

//   // flattenArray = flattenArray.reduce(())
// }

function expand(innerArray) {
  let expandedArray = [];

  for (let i = innerArray[0]; i <= innerArray[innerArray.length - 1]; i += 1) {
    expandedArray.push(i);
  }
  return expandedArray;
}

module.exports = mergeRanges;

var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
console.log(mergeRanges(times)); //-> [[0, 1], [3, 8], [9, 12]]

// expand each inner array
// turn contents of array into string, store in obj the actual num array
// if for each elem of next array, if the stringed num as key exists, pull out and pass to condense
//if an array includes a num from another array, condense 
// in condense, concat, sort and pull first and last into new array
