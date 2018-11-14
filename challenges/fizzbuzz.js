// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
    // define an empty array for return
    let ret = [];
    // loop number from 1 to num, if hit (%3 == 0 && %5 == 0), put 'fizzbuzz'; if hit (%3 == 0), put 'fizz'; or if hit (%5 == 0) put 'buzz', index for others
    for (let i = 1; i <= num; i++) {
        if (i % 3 == 0 && i % 5 == 0)
            ret.push('fizzbuzz');
        else if (i % 3 == 0)
            ret.push('fizz');
        else if (i % 5 == 0)
            ret.push('buzz');
        else
            ret.push(i);
    }
    return ret;
}
console.log(fizzbuzz(16));

module.exports = fizzbuzz;
