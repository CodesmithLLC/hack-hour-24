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

// const romanNumMap = {
//   1 : 'I',
//   4 : 'IV',
//   5 : 'V',
//   9 : 'IX',
//   10 : 'X',
//   40 : 'XL',
//   50 : 'L',
//   90 : 'XC',
//   100 : 'C',
//   400 : 'CD',
//   500 : 'D',
//   900 : 'CM',
//   1000 : 'M',
// }

function romanNumeral(n) {
  const romanNumeralMap = [1000, 'M', 900, 'CM', 500, 'D', 400, 'CD', 100, 'C', 90, 'XC', 50, 'L', 40, 'XL', 10, 'X', 9, 'IX', 5, 'V', 4, 'IV', 1, 'I'];

  let romanNumeralResult = '';

  for (let i = 0; i < romanNumeralMap.length; i += 2) {

    while (n - romanNumeralMap[i] >= 0 && n >= romanNumeralMap[i]) {
      romanNumeralResult += romanNumeralMap[i + 1];
      n -= romanNumeralMap[i];
    }
  }
  return romanNumeralResult;
}

// function populate(nth) {
//   let numth = 1;
//   while(nth !== 1) {
//     numth *= 10;
//     nth--;
//   }
//   return numth;
// }

// function reduceToZero(num, numMap, roman = '') {
//   if (num === 0) return roman;
//   numMap.forEach((denom) => {
//     if (num - denom >= 0) {
//       roman += romanNumMap[denom];
//       num -= denom;
//     }
//   });
//   return reduceToZero(num, numMap, roman);
// }

// function romanNumeral(n) {
//   let romanNumeral = '';
//   const numToStringSplitByChars = n.toString().split('');

//   for (let i = 0; i < numToStringSplitByChars.length; i += 1) {
//     let numthPlace = numToStringSplitByChars[i] * populate(numToStringSplitByChars.length - i);
//     const numthToString = numthPlace.toString();
    
//     if (romanNumMap[numthToString]) romanNumeral += romanNumMap[numthToString];
//     else {
//       const romanNumMapKeys = Object
//         .keys(romanNumMap)
//         .map(stringKey => Number(stringKey))
//         .filter(keyVal => keyVal <= numthPlace && numthToString.length === keyVal.toString().length)
//         .reverse();

//       romanNumeral += reduceToZero(numthPlace, romanNumMapKeys);
//     }
//   }
//   return romanNumeral;
// }



module.exports = romanNumeral;

// populate(4)
console.log(romanNumeral(699));