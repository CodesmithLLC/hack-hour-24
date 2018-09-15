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
    let sum = 0;
    const modes = {};
    let maxMode
    // iterate through the array and put into object if not exist
    for (let i = 0; i < array.length; i++) {
        if (!modes.hasOwnProperty(array[i])) {
            modes[array[i]] = 1;
        } else {
            modes[array[i]]++;
        }
    }
    console.log(modes);
    
    console.log(maxMode);
    // const sorted = Object.entries(modes).sort((a, b) => {
    //     return b[1] - a[1];
    // })
    // console.log(sorted);
    // // check for 
    // // for (let i = 0; i < sorted.length; i++) {
    // //     if (sorted[i][1])
    // // }
    // let mode = Number(sorted[0][0]);
    
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
    let mean = Math.floor(sum / array.length);
    console.log(mean);

    return (mode = mean) ? true : false;
}

module.exports = modemean;

console.log(modemean([1, 2, 2, 4, 3, 4, 3, 5, 6, 7]));
