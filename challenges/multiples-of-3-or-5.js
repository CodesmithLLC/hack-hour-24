'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  let mult3 = 1000/3;
  let mult5 = 1000/5;
  let mult15 = 1000/15;
  if(Number.isInteger(mult3)) mult3 = mult3- 1;
  else mult3 = Math.floor(mult3);
  if(Number.isInteger(mult5)) mult5 = mult5 - 1;
  else mult5 = Math.floor(mult5);
  if(Number.isInteger(mult15)) mult15 = mult15 - 1;
  else mult15 = Math.floor(mult15);

  let sumMult3 = 3 * (mult3 * (mult3+1)/2);
  let sumMult5 = 5 * (mult5 * (mult5+1)/2);
  let sumMult15 = 15 * (mult15 * (mult15+1)/2);

  sum = sum + sumMult3 + sumMult5 - sumMult15;
  
  return sum;
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  let multx = z/x;
  let multy = z/y;
  let multxy = z/(x * y);
  if(Number.isInteger(multx)) multx = multx - 1;
  else multx = Math.floor(multx);
  if(Number.isInteger(multy)) multy = multy - 1;
  else multy = Math.floor(multy);
  if(Number.isInteger(multxy)) multxy = multxy - 1;
  else multxy = Math.floor(multxy);

  let sumMultx = x * (multx * (multx+1)/2);
  let sumMulty = y * (multy * (multy+1)/2);
  let sumMultxy = (x * y) * (multxy * (multxy+1)/2);

  sum = sum + sumMultx + sumMulty - sumMultxy;
  
  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
