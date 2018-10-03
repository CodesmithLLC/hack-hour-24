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

function binToDec(binary, hexadecimal) {
  // const hexConversions = {
  //   "A": 10,
  //   "B": 11,
  //   "C": 12,
  //   "D": 13,
  //   "E": 14,
  //   "F": 15,
  // }
  let binaryArrReverse = binary.slice().split('').reverse();
  //if(!hexadecimal) {
    let binarySums = binaryArrReverse.map((el, index) => {
      return Math.pow(2, index) * el;
    });
    return binarySums.reduce((a,b) => a + b);
  // } else {
  //   hexadecimalArr = [];
  //   for(let i = 0; i < binaryArrReverse.length; i+=4) {
  //     arrOfFour = [];
  //     arrOfFour.push(binaryArrReverse[i])
  //     arrOfFour.push(binaryArrReverse[i+1])
  //     arrOfFour.push(binaryArrReverse[i+2])
  //     arrOfFour.push(binaryArrReverse[i+3])
  //     hexadecimalArr.push(arrOfFour);
  //   }
  //   return hexadecimalArr;
}

console.log(binToDec('101'))
module.exports = binToDec;
