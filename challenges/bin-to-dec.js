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

//input: binary string
//output: decimal number

//split the input to a string and reverse it, so that i wouldn't have to subract 1 for each power
//reduce it to 1 number


function binToDec(binary) {
    const newArr = binary.split('').reverse();
    console.log(newArr);

    return newArr.reduce((acc, curr, index) => {
        acc = acc + Number(curr) * (2 ** index);
        return acc;
    }, 0)

}

console.log(binToDec('111001'));
// -> 5

module.exports = binToDec;
