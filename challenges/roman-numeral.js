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

 //input: number
 //output: string

 // split number into arrays
 // if the length of the array is 1
 //     then the output is from an object

 // if the length of the array is 2,
 //     then check the first element of the array and 


function romanNumeral(n) {
    const romanNumbs = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI'
        7: ;
    }

    for (let key in romanNumbs){
        let digits = (''+n).split('');
        
        let lengthOfDigits = digits.length;
        if (lengthOfDigits <= 0){
    
        }

    }

}

module.exports = romanNumeral;
