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
  const obj = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
  }
  let output ='';
  const keysArr = Object.keys(obj)

  while(n > 0) {
    let greatestNum;
    if(n >= 1000) {
      greatestNum = 1000;
    } else {
      for(let i = 0; i < keysArr.length; i++) {
        if(keysArr[i] > n) {
          greatestNum = keysArr[i-1];
          break
        }
      }
    }
    let numTimesNDivsisbleByGreatestNum = Math.floor(n /greatestNum);
    output += obj[greatestNum].repeat(numTimesNDivsisbleByGreatestNum)
    n = n - (greatestNum * numTimesNDivsisbleByGreatestNum);
  }
  return output;
}
console.log(romanNumeral(2014))
module.exports = romanNumeral;
