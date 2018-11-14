/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  // const L = array.length;
  // const result = [];
  // function inner(i, t) {
  //   if (i === L) {
  //     if (t.length === L - 1) {
  //       console.log(i, t);
  //       result.push(t.reduce((a, b) => a * b));
  //     }
  //     return;
  //   }
  //   inner(i + 1, t.concat([array[i]]));
  //   inner(i + 1, t);
  // }

  // inner(0, []);
  // return result;
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return 0;
  const resultArr = [];
  for (let i = 0; i < array.length; i += 1) {
    // console.log(array.slice(0, i), array.slice(i + 1));
    const front = array.slice(0, i).reduce((a, b) => a * b,1);
    const back = array.slice(i + 1).reduce((a, b) => a * b,1);
    if (front !== 1) resultArr.push(front * back); 
    else resultArr.push(back);
  }
  return resultArr;
}

// console.log(getAllProducts([]));
module.exports = getAllProducts;
