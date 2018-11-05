

// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  let i = 0;

  while (3 * i < 1000 && 5 * i < 1000) {
    if ((3 * i) % 5 !== 0) {
      // console.log(3 * i);
      sum += 3 * i;
    }
    // console.log(5 * i);
    sum += 5 * i;

    i += 1;
  }

  while (3 * i < 1000) {
    // console.log(3 * i);
    if ((3 * i) % 5 !== 0) {
      // console.log(3 * i);
      sum += 3 * i;
    }

    i += 1;
  }

  return sum;
}

console.log(sumMultiples3Or5Below1000());

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  let i = 0;

  while (x * i < z || y * i < z) {
    if (x * i < z) {
      sum += x * i;
    }
    if (y * i < z) {
      sum += y * i;
    }
    if (x * y * i < z) {
      sum -= x * y * i;
    }

    i += 1;
  }

  return sum;
}

console.log(sumMultiplesXOrYBelowZ(3, 5, 1000));

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
