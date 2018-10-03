/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    array.sort((a, b) => a > b);
    let arrLen = array.length;
    return array[arrLen - 1] * array[arrLen - 2] * array[arrLen - 3];
}

console.log(highestProduct([3, 2,5,4]));


module.exports = highestProduct;
