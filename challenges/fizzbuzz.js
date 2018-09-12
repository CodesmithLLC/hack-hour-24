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
  const output = [];
  for(let i = 1; i <= num; i++) {
    output.push(i)
  }
  return output.map(function(value) {
    if(value%3 === 0 && value%5 === 0) {
      return 'fizzbuzz';
    } else if(value%5 === 0) {
      return 'buzz';
    } else if(value % 3 === 0) {
      return 'fizz';
    } else {
      return value;
    }
  });
}
console.log(fizzbuzz(16));
module.exports = fizzbuzz;
