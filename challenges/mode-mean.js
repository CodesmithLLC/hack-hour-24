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
  function getMode(arr) {
    return arr.reduce(
      (acc, e) => {
        // initialize or increment the count for this value
        acc.counter[e] = acc.counter[e] ? acc.counter[e] + 1 : 1;
        // if the count for this item is comparable to the highest so far
        if (acc.counter[e] >= acc.highestCount) {
          // if equal count, use the higher value
          if (acc.counter[e] === acc.highestCount) acc.mode = Math.max(e, acc.mode);
          else acc.mode = e;
          // adjust the highest count to be the count for this value
          acc.highestCount = acc.counter[e];
        }
        return acc;
      },
      // initial value for reduce is an object with important tracking info
      { counter: {}, highestCount: 0, mode: 0 },
    ).mode; // return the mode off the reduce accumulator
  }
  const mean = Math.floor(array.reduce((acc, e) => acc + e, 0) / array.length);
  return getMode(array) === mean; // return boolean
}

const arr = [1,2,2,2,3];

console.log(modemean(arr));
module.exports = modemean;
