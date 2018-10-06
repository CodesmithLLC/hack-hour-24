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
  let romanNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let numVal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let output= '';
  for (let i = 0; i < romanNum.length; i += 1) {
    if (n === 0) return output;
    if (n % numVal[i] >= 0 && n % numVal[i] !== n) {

      const remainder = n % numVal[i];
      const minusValue = n - remainder;
      const howManyTimesItFits = minusValue / numVal[i];
      
      for (let j = 0; j < howManyTimesItFits; j += 1) {
        output += romanNum[i];
      }
      n -= minusValue;
    }
    
  }
  return output;
}

console.log(romanNumeral(11))
module.exports = romanNumeral;
