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

const romanMap = {
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
  1000: 'M'
}

function romanNumeral(n) {
  // loop through the keys of the roman Map
  let romanKeys = Object.keys(romanMap);
  let remainder = n;
  let leftover;
  let index;
  let numberOfCurrentNumeral;
  let romanNumeralString = '';
  
  for (let i=0; i<romanKeys.length; i++) {
    // as you loop through, compare n with the key, see if n<key
    if (remainder < romanKeys[i]) {
      // if true, then take n and modulus it by the previous key to get remainder
      leftover = remainder % romanKeys[i-1]; // 2
      // subtract that n with remainder and divide that by previous key to get the number of that roman numeral
      numberOfCurrentNumeral = (remainder - leftover)/romanKeys[i-1];
      romanNumeralString += romanMap(romanKeys[i-1]).repeat(numberOfCurrentNumeral);
      remainder = leftover;
      index = i-1;
      break;
    }
  }
  
  for (let i=index; i>0; i--) {
    if (remainder > romanKeys[i]) {
      leftover = remainder % romanKeys[i-1];
      numberOfCurrentNumeral = (remainder - leftover)/romanKeys[i-1];
      romanNumeralString += romanMap(romanKeys[i-1]).repeat(numberOfCurrentNumeral);

    }
  }
          
}

module.exports = romanNumeral;
