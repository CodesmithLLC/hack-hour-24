'use strict';

// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  // Loop from 0 to 1000, adding i to sum if it divides cleanly into 3 or 5
  for (let i = 3; i < 1000; i += 1) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
      sum += i;
    }
  }
  return sum;
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  const start = Math.min(x, y);
  // Loop from 0 to z, adding i to sum if it divides cleanly into x or y
  for (let i = start; i < z; i += 1) {
    if ((i % x === 0) || (i % y === 0)) {
      sum += i;
    }
  }
  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;

// console.log('---TESTING sumMultiplesXOrYBelowZ---');
// console.log(`sumMultiplesXOrYBelowZ(3, 5, 10): expect -> 23: actual -> ${sumMultiplesXOrYBelowZ(3, 5, 10)}`);
