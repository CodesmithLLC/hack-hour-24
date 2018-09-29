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

// console.log(parseInt(101,2))

// return num.split('').reverse().reduce(function(x, y, i){
//   return (y === '1') ? x + Math.pow(2, i) : x;
// }, 0);

function binToDec(binary) {
  const real = Number(binary.slice(0, binary.length));
  let sum = 0;
  function inner(n) {
    while (n > 1) {
      const pow10 = Math.floor(Math.log10(n));
      sum += 2 ** pow10;
      n -= 10 ** pow10;
    }
    if (n === 1) {
      sum += 1;
    }
    return sum;
  }
  return inner(real);
}
console.log(binToDec('1000010'));
module.exports = binToDec;
