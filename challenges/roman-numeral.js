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
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};
function romanNumeral(n) {
  let romanNumeral = '';
  let i = 0;
  const keys = Object.keys(romanMap);
  while (n > 0) {
    if (n - romanMap[keys[i]]>=0) {
      romanNumeral += keys[i];
      n -= romanMap[keys[i]];
      i = 0;
    } else {
      i += 1;
    }
  }
  return romanNumeral;
}

console.log(romanNumeral(104));

module.exports = romanNumeral;
