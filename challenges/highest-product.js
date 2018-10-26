/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return undefined;
  // sort
  const sortedArray = array
    .sort((a, b) => a - b);
    // .filter(num => num !== 0);
  console.log(sortedArray);

  // if two neg numbers exist
  const firstTwoNumsProduct = sortedArray.slice(0, 2).reduce((prod, num) => prod * num);
  const thirdAndSecondLastNumsProduct = sortedArray.slice(-3, -1).reduce((prod, num) => prod * num);
  console.log(thirdAndSecondLastNumsProduct);
  console.log(firstTwoNumsProduct);

  // check if their product is > product of 3rd to last and 2nd to last numbers (positive)
  if (firstTwoNumsProduct > thirdAndSecondLastNumsProduct) {
    // if true, return product of greatest two neg numbers and highest pos number
    return firstTwoNumsProduct * sortedArray.slice(-1);
  }
  // if false, return product of greatest three pos numbers
  return thirdAndSecondLastNumsProduct * sortedArray.slice(-1);
}

console.log(highestProduct([-3, -2, -1, 0]));

module.exports = highestProduct;

// const positivesArr = array.filter(num => num > 0).sort((a, b) => b - a);
// const negativesArr = array.filter(num => num < 0).sort((a, b) => a - b);
// const productThree = [];

// while (productThree.length !== 3) {
//   const biggestNeg = negativesArr[0];
//   const biggestPos = positivesArr[0];

//   if (Math.abs(biggestNeg) > biggestPos) {
//     productThree.push(biggestNeg);
//     negativesArr.shift();
//   } else {
//     productThree.push(biggestPos);
//     positivesArr.shift();
//   }
// }

// return productThree.reduce((product, num) => product * num);
