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

//input: num
//output:
// num
// fizz for # divisible by 3
// buzz for # divisible by 5
// fizzbuzz for # divisible by 3 & 5

//declare a function 'fizzbuzz' taking in input
// increment up till the number
//  if the number is divisible by 3 and 5
//      return 'fizzbuzz'
//  if the number is divisible by 3
//      return 'fizz'
//  if the number is divisible by 5
//      return 'buzz'

function fizzbuzz(num) {
  let newArray = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      newArray.push("fizzbuzz");
    } else if (i % 3 === 0) {
      newArray.push("fizz");
    } else if (i % 5 === 0) {
      newArray.push("buzz");
    } else {
      newArray.push(i);
    }
  }
  return newArray;
}

console.log(fizzbuzz(16));

module.exports = fizzbuzz;
