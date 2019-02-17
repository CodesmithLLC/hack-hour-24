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


function romanNumeral(n) {
  const romanNumeralKey = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  };
  let currN = n;
  let result = '';
  const keysArrReversed = Object.keys(romanNumeralKey).reverse();

  keysArrReversed.forEach((val) => {
    const timesToSubtract = Math.floor(currN / val)
    const valToSubtract = timesToSubtract * val;
    for (let i = 0; i < timesToSubtract; i += 1) {
      result += romanNumeralKey[val];
    }
    currN -= valToSubtract;
  });

  return result;
}

module.exports = romanNumeral;

