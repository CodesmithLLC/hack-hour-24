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
  const obj = {};
  let mean = 0;
  let mode = 0;
  for (let i = 0; i < array.length; i += 1) {
    mean += array[i];
    if (Object.keys(obj).includes(array[i].toString())) {
      obj[array[i]] += 1;
    } else {
      obj[array[i]] = 1;
    }
  }
  mean = Math.floor(mean / array.length);
  Object.keys(obj).forEach((elem) => {
    if (obj[elem] >= mode) {
      mode = elem;
    }
  });
  return mean.toString() === mode;
}

const test = [2, 2, 2, 2];
console.log(modemean(test));

module.exports = modemean;
