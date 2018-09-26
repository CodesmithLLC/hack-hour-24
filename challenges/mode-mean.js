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
  const modeTracker = {};
  let mode = 0;
  const sum = array.reduce((acc, elem) => {
    acc += elem;
    return acc;
  });

  const mean = Math.floor(sum / (array.length));

  array.forEach((elem) => {
    if (modeTracker[elem]) {
      modeTracker[elem] += 1;
    } else {
      modeTracker[elem] = 1;
    }
  })
  Object.keys(modeTracker).forEach((elem) => {
    if (modeTracker[elem] >= modeTracker[mode]) {
      mode = elem;
    }
    if (modeTracker[elem] === modeTracker[mode] && elem > mode) {
      mode = elem;
    }
  });
  return mode === mean;
}

module.exports = modemean;
