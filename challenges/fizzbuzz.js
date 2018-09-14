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

const fizzbuzz = function fizzbuzz(num) {
  const fizzBuzzArr = [];
  for (let i = 1; i <= num; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzBuzzArr.push('fizzbuzz');
    } else if (i % 3 === 0) {
      fizzBuzzArr.push('fizz');
    } else if (i % 5 === 0) {
      fizzBuzzArr.push('buzz');
    } else {
      fizzBuzzArr.push(i);
    }
  }
  return fizzBuzzArr;
};

// console.log('TESTING FIZZBUZZ');
// console.log(`fizzbuzz(0): expect -> [ ]: actual -> [ ${fizzbuzz(0)} ]`);
// console.log(`fizzbuzz(1): expect -> [ 1 ]: actual -> [ ${fizzbuzz(1)} ]`);
// console.log(`fizzbuzz(6): expect -> [ 1, 2, 'fizz', 4, 'buzz', 'fizz' ]: actual -> [ ${fizzbuzz(6)} ]`);
// console.log("fizzbuzz(16): expect -> [ 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16 ]: actual -> ");
// console.log(fizzbuzz(16));

module.exports = fizzbuzz;
