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
    const ronuMap= {
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
    return recursion(ronuMap, n);
}

function recursion(ronuMap, n) {
    if (n == 0)
        return "";
    // find the largest divider
    let dividers = Object.keys(ronuMap).filter((num) => num <= n);
    let divider = Math.max(...dividers);
    // divide it and keep recursion with the remain
    let remain = n % divider;
    return ronuMap[divider]+ recursion(ronuMap, remain);
}

console.log(romanNumeral(999));
module.exports = romanNumeral;
