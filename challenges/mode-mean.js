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
// define mode, define mean
let mean;
let mode;
let sum = 0;
let obj = {};
let objMax;


    for(let i = 0;  i < array.length;  i++) {
        if(!obj[array[i]]) {
            obj[array[i]] = 1;
        } else {
            obj[array[i]]++;
        }
        
        sum += array[i]
    }
    for (let key in obj) {
        objMax = obj[array[0]]
        if(obj[key] > objMax) {
            if(mode === undefined || key > mode ) {
            objMax = obj[key]
            mode = key;
            }
        }
        //console.log(mode)
    }
    console.log(obj)
    mean = sum/array.length;
// right a test to check if they have the same value
//console.log(typeof mode);
//console.log(typeof mean);
    if(parseInt(mode) === Math.floor(mean)) {
        return true;
    } else {
        return false;
    }
    

}
console.log(modemean([1,2,3,2]))

module.exports = modemean;
