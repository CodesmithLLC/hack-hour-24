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
  const dict = {};
  let sum = 0;

  array.forEach((v) => {
    // Keep track of number counts.
    if (Object.prototype.hasOwnProperty.call(dict, v)) {
      dict[v] += 1;
    } else {
      dict[v] = 1;
    }

    // Keep track of sum.
    sum += v;
  });

  // Find mode.
  const keys = Object.keys(dict);
  const max = { num: null, count: 0 };

  keys.forEach((v) => {
    if (dict[v] >= max.count) {
      if (max.num === null) {
        max.num = v;
        max.count = dict[v];
      } else if (v > max.num) {
        max.num = v;
        max.count = dict[v];
      }
    }
  });
  console.log(Math.floor(sum / array.length), parseInt(max.num, 10));
  return parseInt(max.num, 10) === Math.floor(sum / array.length);
}

console.log(modemean([2, 2, 5]));

module.exports = modemean;
