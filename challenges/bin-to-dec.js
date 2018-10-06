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
  const binArray = binary.split('');
  let binPower = 0;
  let decimalVal = 0;


  for (let i = binArray.length - 1; i >= 0; i -= 1) {
    if (binArray[i] == 1) {
      decimalVal += (2 ** binPower);
    }
    binPower += 1;
  }
  return decimalVal;
}

function decToBin(decimal) {
  let quotient = Math.floor(decimal / 2);
  let bitArray = [];
  
  console.log(quotient);
  
  while (quotient !== 0) {
    const remainder = decimal % quotient;
    console.log(remainder)
    bitArray.unshift(remainder);
    quotient = Math.floor(quotient / 2);
    console.log(quotient)
  }
  console.log(bitArray);
  return bitArray;
}

decToBin(10)

module.exports = binToDec;
