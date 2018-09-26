/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

const romanDict = {
  1000: 'M',
  900: 'CM',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'XC',
  50: 'L',
  40: 'XL',
  10: 'X',
  9: 'IX',
  5: 'V',
  4: 'IV',
  1: 'I',
}

const romanNums = Object.keys(romanDict).map((num) => Number(num)).sort((n1, n2) => n1 - n2).reverse();

function romanNumeral(n) {
  for (let i = 0; i < romanNums.length; i += 1) {
    if (n >= romanNums[i]) {
      return romanDict[romanNums[i]] + romanNumeral(n - romanNums[i]);
    }
  }
  return '';
}

module.exports = romanNumeral;

// console.log('---TESTING romanNumeral---');
// console.log(`romanNumeral(0): expect -> '': actual -> ${romanNumeral(0)}`);
// console.log(`romanNumeral(1): expect -> 'I': actual -> ${romanNumeral(1)}`);
// console.log(`romanNumeral(2): expect -> 'II': actual -> ${romanNumeral(2)}`);
// console.log(`romanNumeral(3): expect -> 'III': actual -> ${romanNumeral(3)}`);
// console.log(`romanNumeral(4): expect -> 'IV': actual -> ${romanNumeral(4)}`);
// console.log(`romanNumeral(5): expect -> 'V': actual -> ${romanNumeral(5)}`);
// console.log(`romanNumeral(8): expect -> 'VII': actual -> ${romanNumeral(8)}`);
// console.log(`romanNumeral(9): expect -> 'IX': actual -> ${romanNumeral(9)}`);
// console.log(`romanNumeral(10): expect -> 'X': actual -> ${romanNumeral(10)}`);
// console.log(`romanNumeral(25): expect -> 'XXV': actual -> ${romanNumeral(25)}`);
// console.log(`romanNumeral(45): expect -> 'XLV': actual -> ${romanNumeral(45)}`);
// console.log(`romanNumeral(55): expect -> 'LV': actual -> ${romanNumeral(55)}`);
// console.log(`romanNumeral(125): expect -> 'CXXV': actual -> ${romanNumeral(125)}`);
// console.log(`romanNumeral(475): expect -> 'CDLXXV': actual -> ${romanNumeral(475)}`);
