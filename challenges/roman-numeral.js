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
    const romanNumMap= {
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
    return recursion(romanNumMap, n);
}

function recursion(romanNumMap, n) {
    if (n == 0)
        return "";
    // find the largest divider
    let dividers = Object.keys(romanNumMap).filter((num) => num <= n);
    let divider = Math.max(...dividers);
    // divide it and keep recursion with the remain
    let remain = n % divider;
    return romanNumMap[divider]+ recursion(romanNumMap, remain);
}

console.log(romanNumeral(999));
module.exports = romanNumeral;
