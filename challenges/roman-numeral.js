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
  const num = JSON.stringify(n);
  let roman = [];
  for(let i = num.length-1; i >= 0; i--){
    if(num[i] >= 5){
      switch(i) {
        case 1:
            roman.push('V')
            break;
        case 2:
            roman.push('L')
            break;
        default:
            
    }
    }
  }
}

romanNumeral(321);

module.exports = romanNumeral;
