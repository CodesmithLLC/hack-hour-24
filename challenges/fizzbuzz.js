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
    //new array
    let newArray = [];
    let n = 1

    //divisible by 3 & 5 fizzbuzz

    while(n <= num){
       
        if (n%3 === 0 && n%5 === 0){
            newArray.push('fizzbuzz')
        }
        else if (n%3 === 0 ){
            newArray.push('fizz')
        } else if (n%5 === 0){
            newArray.push('buzz')
        } 
        else {
            newArray.push(n)
        }
        n++;
        
    }
     return newArray;
    //return newArray;
    // divisible by 3 fizz 

    //divisible by 5 buzz
}

module.exports = fizzbuzz;

console.log(fizzbuzz(16))
