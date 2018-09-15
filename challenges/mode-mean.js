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

  // getting mean
  const mean = Math.floor(array.reduce((acc, curr) => acc + curr)/array.length);

  // getting mode
    // creating count object
      const countObj = {};
      array.forEach(ele => {
        countObj[ele] = (countObj[ele] || 0) + 1;
      });
    
    // find numbers that occur the most;
      const maximum = Math.max(...Object.values(countObj).map(ele => {
        return ele;
      }));
    // find key(s) associated with max number
      let moder;
      for (let key in countObj) {
        if (countObj[key] === maximum && (!moder || moder < key)) {
          moder = key;
        }
      }
      
  return (mean === parseInt(moder));
}

console.log(modemean([1,2,2,3,3]));

module.exports = modemean;
