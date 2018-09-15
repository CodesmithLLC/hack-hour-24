/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

function modemean(array) {
  // Edge case - if empty or single-value array, return true
  if (array.length <= 1) return true;
  // Calculate the mean by summing the numbers, dividing by length
  let mean = array.reduce((n1, n2) => n1 + n2);
  mean /= array.length;
  // Calculate the mode by counting frequency of each item in array
  const freqCount = {};
  array.forEach((num) => {
    if (!freqCount[num]) {
      freqCount[num] = 1;
    } else {
      freqCount[num] += 1;
    }
  });
  // Assign mode the value of the number with the highest frequency
  const mode = Object.keys(freqCount).reduce((n1, n2) => {
    if (freqCount[n1] > freqCount[n2]) {
      return n1;
    }
    // If two numbers have the same frequency, assign the higher number
    if (freqCount[n1] === freqCount[n2] && n1 > n2) {
      return n1;
    }
    return n2;
  });
  // return true if rounded-down mode is equal to rounded-down mean, false otherwise
  return (Math.floor(mode) === Math.floor(mean));
}

// console.log('---TESTING MODEMEAN---');
// console.log(`modemean([]): expect -> true: actual -> ${modemean([])}`);
// console.log(`modemean([7]): expect -> true: actual -> ${modemean([7])}`);
// console.log(`modemean([3, 7]): expect -> false: actual -> ${modemean([3, 7])}`);
// console.log(`modemean([3, 5, 7]): expect -> false: actual -> ${modemean([3, 5, 7])}`);
// console.log(`modemean([3, 3, 5]): expect -> true: actual -> ${modemean([3, 3, 5])}`);
// console.log(`modemean([3, 5, 5, 7]): expect -> true: actual -> ${modemean([3, 5, 5, 7])}`);
// console.log(`modemean([3, 5, 5, 5, 7]): expect -> true: actual -> ${modemean([3, 5, 5, 5, 7])}`);
// console.log(`modemean([1, 3, 5, 7, 9]): expect -> false: actual -> ${modemean([1, 3, 5, 7, 9])}`);

module.exports = modemean;
