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
  let mean = array.reduce( (a, b) => a + b) / array.length;
  let mode;
  let mostNums = 0;
  let numCount = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        numCount++;
      }
    }
    if (numCount > mostNums) {
      mostNums = numCount;
      mode = array[i];
    }
    if (numCount === mostNums) {
      if (array[i] > mode) {
        mode = array[i];
      }
    }
    numCount = 0;
  }
  return mode === mean;
}



module.exports = modemean;
