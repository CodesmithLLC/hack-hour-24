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
  let total = n;

  const dict = {
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
  };

  // Use array for denominations because not sure if object keys are returned in order.
  const denominations = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  // Assume n is always positive.
  let i = 0;
  let romanNum = '';

  // While total is greater than 0, and denomination is less than total,
  // decrease total by denomination and continue.
  // Else move onto next denomination.
  while (total > 0) {
    if (denominations[i] <= total) {
      total -= denominations[i];
      romanNum += dict[denominations[i]];
    } else {
      i += 1;
    }
  }

  return romanNum;
}

// console.log(romanNumeral(8));

module.exports = romanNumeral;
