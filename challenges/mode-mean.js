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

let total = 0;
for(let i = 0; i < array.length; i++) {
    total = total + array[i] / array.length
}
let average = Math.floor(total)
console.log(average);

let output = {};
for(let i = 0; i < array.length; i++) {
    if(output[array[i]] === undefined) {
        output[array[i]] = 1
    } else {
        output[array[i]] += 1
    }
}

let mode = 0
for(let key in output) {
    if(output[key] > mode) {
        mode = key
    }
}
console.log(mode);

if(average === mode) {
    return true
} else {return false}
}



console.log(modemean([1,2,3,3,5]))



module.exports = modemean;
