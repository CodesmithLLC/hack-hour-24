/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
    let i = 0;
    let midI = Math.floor(str.length / 2);
	while (i < str.length) {
        let j = str.length - 1;
        while (j >= i) {
            if (str.charAt(i) === str.charAt(j))
                return checkPalin(str.slice(i, j+1));
            j--;
        }
        i++;
    }
    return false;
}

function checkPalin(subStr) {
    let i = 0;
    let j = subStr.length - 1;
    while (i < j) {
        if (subStr.charAt(i++) != subStr.charAt(j--))
            return false;
    }
    return true;
}

console.log(permPalin('abab'));
console.log(permPalin('cbaba'));
console.log(permPalin('cbac'));
console.log(permPalin('a'));

module.exports = permPalin;