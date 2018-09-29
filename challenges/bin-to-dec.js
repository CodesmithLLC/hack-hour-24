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
  let dec = 0;

  for (let i = 0; i < binary.length; i += 1) {
    dec += parseInt(binary[i], 10) * Math.pow(2, binary.length - i - 1);
  }

  return dec;
}

function decToBin(dec) {
  let binary = '';
  let decimal = dec;

  let counter = 0;
  let divisor = Math.pow(2, counter);

  while (decimal / divisor >= 1) {
    counter += 1;
    divisor = Math.pow(2, counter);
  }
  console.log(divisor);
  counter -= 1;
  console.log(Math.pow(2, counter));
  while (decimal > 0) {
    if (decimal / divisor >= 1) {
      decimal %= divisor;
      binary = `1${binary}`;
    } else {
      binary = `0${binary}`;
    }

    divisor /= 2;
  }

  return binary;
}

// console.log(binToDec('100'));
// console.log(decToBin('10'));

module.exports = binToDec;
