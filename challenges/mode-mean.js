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
  let mean = 0;
  const modeObj = {};
  let mode = 0;

  array.forEach((el) => {
    mean += el;
    if (modeObj.hasOwnProperty(el)) {
      modeObj[el] += 1;
    } else {
      modeObj[el] = 1;
    }
  });

  mean = Math.floor(mean / array.length);

  for (let keys in modeObj){
    if(modeObj[keys] > mode) {
      mode = keys
    }
  }
  if (mode === mean) {
    return true;
  }
  return false;
}

module.exports = modemean;
