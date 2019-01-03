/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
// function flattenDeep(arr) {

//   // create result arr
//   let result = [];
//   // iterate through arr
//   arr.forEach((elem) => {
//     // if number, push onto result arr
//     if (!Array.isArray(elem)) {
//       result.push(elem)
//     } else {
//       // if array push result of flattenDeep(nested) onto result arr
//       result = result.concat(flattenDeep(elem));
//     }

//   })

//   // return result arr
//   return result;
// }

// const testArr = [3, [4, 5], 2, [[6, 7], [2]]];
// console.log(flattenDeep(testArr));

// function hiDepth(hiArr) {
//   // create result arr
//   const result = [];
//   // create depth var, set to 0
//   let depth = 0;
//   // create inner function that ...
//   function depthCheck(elem) {
//     // if hi push depth var onto result
//     if (elem === 'hi') {
//       result.push(depth);
//     } else if (Array.isArray(elem)) {
//       // if array increase depth variable
//       depth += 1;
//       result.push(depthCheck(elem));
//     }
//     depth = 0;
//   }
//   // iterate thru hiArr,
//   hiArr.forEach(element => {
//     // push result of innerfunction(elem) onto result arr
//     result.push(depthCheck(element));
//   });

//   // return result arr
//   return result;

// }

// const hiTest = [['x', 'hi'], 'b', 'hi', [['hi', 'x'], 'b']];

// console.log(hiDepth(hiTest));

// function hiDepth(hiArr) {
//   // create result arr
//   const result = [];
//   // create inner function that ...
//   function searchArr(arr, depth = 0) {
//     arr.forEach(ele => {
//       if (ele === "hi") {
//         result.push(depth);
//       } else if (Array.isArray(ele)) {
//         searchArr(ele, depth + 1);
//       }
//     });
//   }
//   searchArr(hiArr);
//   // return result arr
//   return result;
// }

// const hiTest = [["x", "hi"], "b", "hi", [["hi", "x"], "b"]];

// console.log(hiDepth(hiTest));

// function maxDepth(arr) {
//   let max = 0;
//   let tempDepth = 0;
//   arr.forEach((ele) => {
//     if (Array.isArray(ele)) {
//       tempDepth = maxDepth(ele) + 1;
//     }
//     if (tempDepth > max) {
//       max = tempDepth;
//     }
//   });
//   return max;
// }

// const testDepthArr = [9, [3, [4, 1]], 6, [[[7]]]];
// console.log(maxDepth(testDepthArr));

// const tObj = {
//   friends: 5,
//   score: 20,
//   age: 10,
// };

// const tArr = [ 9, 6, 18, 17 ];

// for (const key in tArr){
//   console.log(tArr[key]);
// }

function largestNested(obj) {
  let max = -Infinity;
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      const temp = largestNested(obj[key]);
      if (temp > max) {
        max = temp;
      }
    } else if (obj[key] > max) {
      max = obj[key];
    }
  }
  return max;
}

const lNTest = [3, [4], 2, {time: [[7]], age: 3}, 5];

console.log(largestNested(lNTest));
