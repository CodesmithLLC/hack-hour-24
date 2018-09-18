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

//input: array
//output: boolean

// declare a function 'modemean' taking in input
//     declare a 'storage' empty object
//     iterate through the array
//         if storage object does not have the element as the key value
//             create a key of the element and the value as 1
//         else if storage object has a key
//             increment the value of that key
//     iterate through 'storage' object
//         if storage[key] < storage[key + 1]
//         if the value of the key greater than value of the key + 1
//             return key of storage object
//         else if the value of the key is less than the value of the key

function modemean(array) {}

module.exports = modemean;
