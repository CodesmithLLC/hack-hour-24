/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// function highestProduct(array) {
//   let highest;

//   // Handle edge cases.
//   // If array contains less than 3 integers return product of elements.
//   if (array.length === 0) {
//     return 0;
//   } if (array.length === 1) {
//     return array[0];
//   } if (array.length === 2) {
//     return array[0] * array[1];
//   }

//   // Get product of array.
//   function getProduct(arr) {
//     console.log(arr);
//     return arr.reduce((acc, element) => acc * element, 1);
//   }

//   // Find all possible combination of 3 integers and store max prod.
//   // Brute force bad!
//   function helper(numArr, subArr) {
//     if (subArr.length === 3) {
//       const curProduct = getProduct(subArr);
//       if (highest === undefined || curProduct > highest) {
//         highest = curProduct;
//       }
//       return;
//     } if (numArr.length === 0) {
//       return;
//     }

//     helper(numArr.slice(1), subArr.concat(numArr[0]));
//     helper(numArr.slice(1), subArr);
//   }

//   helper(array, []);
//   return highest;
// }

function highestProduct(array) {
  const copyArr = array.slice();
  copyArr.sort((a, b) => b - a);

  // Handle edge cases.
  // If array contains less than 3 integers return 0.
  if (!Array.isArray(copyArr) || copyArr.length < 3) {
    return 0;
  }

  const frontProd = copyArr[0] * copyArr[1] * copyArr[2];
  const endProd = copyArr[copyArr.length - 1] * copyArr[copyArr.length - 2] * copyArr[0];
  return frontProd > endProd ? frontProd : endProd;
}

// console.log(highestProduct([1, 2, -3, -8]));
console.log(highestProduct([1, 2, -3, -8]));

module.exports = highestProduct;
