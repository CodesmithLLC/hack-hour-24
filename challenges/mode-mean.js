/*
 * Given an array of numbers, determine if the modeObj and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * modeObj: number that occurs the most
 * mean: avg of numbers
 * Return true or false
 *
 */


function modemean(array) {
  const mean = array.reduce((acc, next) => acc + next, 0) / array.length;
  const modeObj = {};

  // Fill our modeObj with key-val pairs of the nums and its count number
  array.forEach((value) => {
    if (!modeObj[value]) {
      modeObj[value] = 1;
    } else {
      modeObj[value] += 1;
    }
  });

  const mode = Object.keys(modeObj).reduce((acc, next) => {
    if (modeObj[acc] <= modeObj[next]) {
      if (acc < next) acc = next;
    }
    return acc;
  });

  return Math.floor(mean) === Number(mode);
}

module.exports = modemean;
