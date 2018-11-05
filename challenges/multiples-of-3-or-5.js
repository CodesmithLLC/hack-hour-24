'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  const n1 = Math.ceil(1000/3) - 1;
  const n2 = Math.ceil(1000/5) - 1;
  const n3 = Math.ceil(1000/15) - 1;
  sum = 3 * (n1 + 1) * n1 / 2 + 5 * (n2 + 1) * n2 / 2 - 15 * (n3 + 1) * n3 / 2;
  return sum;
}
// console.log(sumMultiples3Or5Below1000())

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  const n1 = Math.ceil(z/x) - 1;
  const n2 = Math.ceil(z/y) - 1;
  const n3 = Math.ceil(z/(x*y)) - 1;
  sum = x * (n1 + 1) * n1 / 2 + y * (n2 + 1) * n2 / 2 - (x * y) * (n3 + 1) * n3 / 2;
  return sum;
}
console.log(sumMultiplesXOrYBelowZ(1,2,10))

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
