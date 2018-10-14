/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  const positivesArr = array.filter(num => num > 0).sort((a, b) => b - a);
  const negativesArr = array.filter(num => num < 0).sort((a, b) => a - b);
  const productThree = [];

  while (productThree.length !== 3) {
    const biggestNeg = negativesArr[0];
    const biggestPos = positivesArr[0];

    if (Math.abs(biggestNeg) > biggestPos) {
      productThree.push(biggestNeg);
      negativesArr.shift();
    } else {
      productThree.push(biggestPos);
      positivesArr.shift();
    }
  }

  return productThree.reduce((product, num) => product * num);
}

console.log(highestProduct([-10, -5, -2, 0, 1, 2, 5]));

module.exports = highestProduct;


// if there is more than one negative
  // find the largest two negatives greater than the sma

  // remove zero if exists
