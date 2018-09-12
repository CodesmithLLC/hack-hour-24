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
    //intitialize fresult array
    let result = [];
    let stop = num + 1

    //loop up to num
    for (let i = 0; i < stop; i++) {
        //set conditionals 
        //fizzbuzz = nums divisible by both 3 & 5
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("fizzbuzz");
        }
        //fizz = nums divisible by 3
        else if (i % 3 === 0) {
            result.push("fizz")
        }
        //buzz = nums divisible by 5
        else if (i % 5 === 0) {
            result.push("buzz");
        }
        //just push the num is neither
        else {
            result.push(i);
        }
    }
    console.log(result);
    return result;
}
fizzbuzz(16);
module.exports = fizzbuzz;
