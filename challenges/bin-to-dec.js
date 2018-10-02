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

// binary sequence;
/*
0: 0
1: 1
2: 10
3: 11
4: 100
5: 101
*/

const bin = {};


function binToDec() {
    const arr = [];
    for (let i = 0; i < 20; i++) {
        if (i % 2 === 0) {
            arr.push(0)
        } else {
            arr.push(1)
        }
        bin[i] = Number(arr.reverse().join(''));

    }

}

binToDec()
console.log(bin)

module.exports = binToDec;