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
  // check for zero return 0
  if (binary === '0') return 0;

  // convert to numbers
  let workArr = Array.from(binary);
  workArr = workArr.map(item => parseInt(item));

  // loop through the array, the binary sum is equal each digit times 2to the index
  let power = workArr.length - 1;

  return workArr.reduce((acc, curr) => {
    const powered = 2 ** power;
    power -= 1;
    const sumThis = curr * powered;
    acc += sumThis;
    return acc;
  }, 0);
}
console.log(binToDec('101'));
module.exports = binToDec;
