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
    return mean(array) === mode(array);
}

function mean(array){
    
    let sum = array.reduce((a,b) => a + b)
    let mean = Math.floor(sum/array.length)
     return mean;
}

function mode(array){
     let obj = {};

    array.forEach((el) =>{
        if(obj[el]){
            obj[el]++
        } else {
            obj[el] = 1;
        }
    })
  
    
    let maxVal = Object.values(obj).reduce((a,b) => a > b ? a : b);;
   
    let MaxArray = []; //Array of Max keys
    for(let prop in obj){
        if(obj[prop] === maxVal){
            MaxArray.push(prop);
        }
    }

    return Number(MaxArray.reduce((a,b) => a > b ? a : b));  //max value from MaxArray
}
module.exports = modemean;

console.log(modemean([2,9,8,9,8,9,8]))
console.log(mode([2,9,8,9,8,9,8]))
// console.log(mean([2,9,8,8]))
// console.log(mean([2,9,8,8]))
