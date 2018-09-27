/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1   :    I
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


const conversion = {
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

function romanNumeral(nun) {

  if(str1 == null) return -1;
  var num = char_to_int(str1.charAt(0));
  var pre, curr;
  
  for(var i = 1; i < str1.length; i++){
  curr = char_to_int(str1.charAt(i));
  pre = char_to_int(str1.charAt(i-1));
  if(curr <= pre){
  num += curr;
  } else {
  num = num - pre*2 + curr;
  }
  }
  
  return num;
  }
  



console.log(romanNumeral(14))

console.log(conversion);
module.exports = romanNumeral;
