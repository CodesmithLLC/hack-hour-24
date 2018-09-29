/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
  const binArray = binary.split('').reverse();

  return binArray.reduce((accum, next, i) => {
    return accum + (Math.pow(2, i) * next);
  }, 0);
}

module.exports = binToDec;

console.log(binToDec('101'))
/* 
* 2^0 = 1
* 2^1 = 2
* 2^2 = 4
* 2^3 = 8
*/