/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    array.sort((a, b) => a > b);
    let arrLen = array.length;
    let biggest =  array[arrLen - 1] * array[arrLen - 2] * array[arrLen - 3];
    let smallest = array[0] * array[1] * array[arrLen - 1];
    return Math.max(biggest, smallest);
}

console.log(highestProduct([-50, -1, 2, 10, 80]));


module.exports = highestProduct;
