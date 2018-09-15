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
    // Compare the return values of mode and mean functions
    if (mode(array) === mean(array)) {
        return true;
    } return false;
}

console.log(modemean([1, 2, 2, 3, 4]));

function mode(array) {
    // Create empty object to store number as key and frequency as value
    // Create variable to store most frequent number
    // Create variable to store the frequency of said number
    let modes = {};
    let maxEl = array[0];
    let frequency = 1;

    // Loop through the array
    for (let i = 0; i < array.length; i++) {

        let el = array[i];
    // Set key : value pairs
        if (modes[el] === undefined) {
            modes[el] = 1; 
        }
        else {
            modes[el]++;
        }

    // Compare element to current max
    // Set new maxNumber and frequency
       if (modes[el] > frequency) {
            maxEl = el;
            frequency = modes[el];
        }
    }

    // Return maxNumber
    return maxEl;
};

function mean(array) {
    let total = 0;
    let avg;
    // Find total of array 
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    // Divide total by length of array
    avg = Math.floor(total / array.length);
    // Return result
    return avg;
}

console.log(mean([1, 2, 3, 4]));
console.log(mode([1, 2, 3, 4, 4]))

module.exports = modemean;
