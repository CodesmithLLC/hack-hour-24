/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
 * binToDec('0')   -> 0
 * binToDec('11')  -> 3
 * binToDec('100') -> 4
 * binToDec('101') -> 5
 * binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
  // convert binary to array, drop any leading zeroes
  const binArray = binary.split('');
  while (binArray[0] === '0') {
    binArray.shift();
  }
  // Loop through binary array, multiplying decimal by two and adding the most significant bit
  let dec = 0;
  while (binArray.length > 0) {
    dec *= 2;
    dec += Number(binArray.shift());
  }
  return dec;
}

function decToBin(dec) {
  // Declare an array to hold binary values
  const binArray = [];
  // Edge case - decimal is 0
  if (dec === 0) return '0';
  // Divide decimal by two, adding the remainder to the binary array
  while (dec > 0) {
    const bit = String(dec % 2);
    dec = Math.floor(dec / 2);
    binArray.unshift(bit);
  }
  // Return binary array as string
  return binArray.join('');
}

module.exports = binToDec;

// console.log('TESTING binToDec');
// console.log(`binToDec('0'): expect -> 0: actual -> ${binToDec('0')}`);
// console.log(`binToDec('1'): expect -> 1: actual -> ${binToDec('1')}`);
// console.log(`binToDec('10'): expect -> 2: actual -> ${binToDec('10')}`);
// console.log(`binToDec('11'): expect -> 3: actual -> ${binToDec('11')}`);
// console.log(`binToDec('100'): expect -> 4: actual -> ${binToDec('100')}`);
// console.log(`binToDec('101'): expect -> 5: actual -> ${binToDec('101')}`);
// console.log(`binToDec('0101'): expect -> 5: actual -> ${binToDec('0101')}`);
// console.log(`binToDec('10101'): expect -> 21: actual -> ${binToDec('10101')}`);
// console.log(`binToDec('101010'): expect -> 42: actual -> ${binToDec('101010')}`);

// console.log('TESTING decToBin');
// console.log(`decToBin(0): expect -> '0': actual -> ${decToBin(0)}`);
// console.log(`decToBin(1): expect -> '1': actual -> ${decToBin(1)}`);
// console.log(`decToBin(2): expect -> '10': actual -> ${decToBin(2)}`);
// console.log(`decToBin(3): expect -> '11': actual -> ${decToBin(3)}`);
// console.log(`decToBin(4): expect -> '100': actual -> ${decToBin(4)}`);
// console.log(`decToBin(5): expect -> '101': actual -> ${decToBin(5)}`);
// console.log(`decToBin(21): expect -> '10101': actual -> ${decToBin(21)}`);
// console.log(`decToBin(42): expect -> '101010': actual -> ${decToBin(42)}`);
