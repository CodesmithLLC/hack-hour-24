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
function romanNumeral(n) {
  // write out conversion of integers to Roman numerals
  const map = [
    1000, 'M', 900, 'CM', 500, 'D', 400, 'CD', 100, 'C', 90, 'XC', 50, 'L',
    40, 'XL', 10, 'X', 9, 'IX', 5, 'V', 4, 'IV', 1, 'I',
  ];
  
  // declare output
  let value = '';

  // iterate through the map
  for (let i = 0; n > 0 && i < map.length; i += 2) {
    // loop while input is less than or equal to array at index position
    while (n >= map[i]) {
      // add corresponding roman numeral to output
      value += map[i + 1];
      // decrement n to find the remaining roman numerals
      n -= map[i];
    }
  }
  return value;
}
 module.exports = romanNumeral;
