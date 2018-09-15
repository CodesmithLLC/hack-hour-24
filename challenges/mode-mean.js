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
  if(array.length===0) {
    return false;
  }
  function findMean() {
    const numItems = array.length
    const sum = array.reduce((a,b) => a+b);
    return Math.floor(sum/numItems);
  }
  function findMode() {
    const obj = {};
    array.forEach(function(el) {
      obj.hasOwnProperty(el) ? obj[el]++ : obj[el] = 1;
    })
    let mostFrequent = 0;
    let mode;
    for(let key in obj){
      if(obj[key] > mostFrequent) {
        mostFrequent = obj[key];
        mode = Number(key);
      } else if(obj[key] === mostFrequent) {
        if(Number(key) > mode) {
          mode = Number(key);
        }
      }
    }
    return mode;
  }
  return findMean() === findMode();
}
module.exports = modemean;
