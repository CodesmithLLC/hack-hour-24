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
    const sorted = array.sort();
    const modeObj = {};  
    let frequencies = 0; 
    let maxMode; 
    let sum = 0;
 
    for (let i = 0; i < sorted.length; i++) { 
      if (!modeObj.hasOwnProperty(sorted[i])) { 
        modeObj[sorted[i]] = 1;
      } else { 
        modeObj[sorted[i]]++;
      }
    }
  
    console.log(modeObj);
  
    for (let key in modeObj) {
      if (modeObj[key] > frequencies) { 
        maxMode = key;
      } 
    }
  
    console.log(maxMode);
  
    let mode = Number(maxMode);

    for (let i = 0; i < sorted.length; i++) {
      sum += sorted[i]; 
    }
 
    let mean = sum / sorted.length;

    console.log(mode);
    console.log(mean);
  
  
    if (mode ===  mean) {
      return true;
    } else {
      return false;
    }
}

module.exports = modemean;

console.log(modemean([5, 3, 8, 2, 1, 6, 3, 8]));
