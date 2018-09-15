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
  //mean
  //sum the array values using .reduce
  const sum = array.reduce((acc, curr) => {
    return acc + curr;
  })
  //divide the sum by the length then .floor
  const mean = Math.floor(sum/array.length);

  //mode
  //cache the values 
  const cache = {};
  
  array.forEach(item => {
    if (cache[item]) {
      cache[item] += 1;
    }
    else {
      cache[item] = 1;
    }
  })
  
  //iteratte through the object to determine the mode
  let modes = [];
  let occurance = 0;

  for(let key in cache) {
    if (cache[key] > occurance) {
      occurance = cache[key];
      modes.push(key);
    }
    else if (cache[key] === occurance) {
      modes.push(key);
    }
  }
  const trueMode = array.reduce((acc, curr) => {
    if (acc < curr) return curr;
    else return acc;
  })
  
  //if mean === mode return true
  //else return false
  return (mean == trueMode);
}

module.exports = modemean;
