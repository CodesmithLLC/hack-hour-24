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

let arr = [2,5,2,3,7,6,6,2,5,12];
function modemean(array) {
    let max = 0;
    let mode = [];
    let quantity = {};
    let sum = 0;
    array.forEach(elem => {
        sum += elem;
        if(!quantity[elem]){
            quantity[elem] = 1;
        } else {
            quantity[elem]++;
        }
        if(quantity[elem] > max){
            max = quantity[elem];
        }
    })
    for(let prop in quantity){
        if(quantity[prop] == max){
            mode.push(Number(prop));
        }
    }
    // console.log(max);
    // console.log(mode);
    // console.log(quantity);
    // console.log(sum/array.length);
    return ((Math.floor(sum/array.length) == Math.max(...mode)));
}
modemean(arr);
module.exports = modemean;
