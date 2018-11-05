'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000(x = 3, y = 5, z = 1000) {
  let sum = [];

  for (let i = 1; i < z; i += 1) {
    if (i % (x * y) === 0 || i % (x) === 0 || i % (y) === 0) sum.push(i);
  }

  return sum.reduce((total, nextNum) => total + nextNum);
}
console.log(sumMultiples3Or5Below1000());

/*
 3,  5, 15
 6, 10, 30 
 9, 20,
12, 25,
18, 
21,
24,
27, 
*/

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;

  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
