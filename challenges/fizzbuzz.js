// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
console.log(fizzbuzz(16));
//  -> [ 1,
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
    //output array
    const outputArr = [];
    //for loop to iterate through numbers
    for (let i = 1; i <= num; i++){
        if (i % 3 === 0 && i % 5 === 0) { //if statement to identify numbers divisible by 3 and 5
            outputArr.push('fizzbuzz');
        } else if (i % 3 === 0) {  // else if statement to identify numbers divisible by 3
            outputArr.push('fizz');
        } else if (i % 5 === 0) {  // else if statement to identify numbers divisible by 5
            outputArr.push('buzz');
        } else { // else push numbers
            outputArr.push(i);
        }
    }
    return outputArr;
}

module.exports = fizzbuzz;
