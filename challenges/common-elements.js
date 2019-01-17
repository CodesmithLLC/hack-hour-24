// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

// var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
// var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
// var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
// var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

// function commonElements() {
//   // collect arguments into array
//   const args = [...arguments];
//   // turn args into sets and then back into arrays to eliminate duplicates
//   const dupelessArgs = args.map(arg => [...new Set(arg)]);

//   const result = dupelessArgs.reduce((acc, curr) => {
//     // only keep elements that are also in accumulator
//     return curr.filter(elem => acc.indexOf(elem) !== -1);
//   });
//   if (result.length > 0) {
//     return result;
//   }
//   return 'Nothing in Common!';
// }

// var arr1 = [1, 4, 6, 7, "ferret", 12, 12, 99, 2000, "dog", "dog", 99, 1000];
// var arr2 = [15, 9, 9, "ferret", 9, 26, 12, 12, "dog"];
// var arr3 = [23, 12, 12, 77, "ferret", 9, 88, 100, "dog", "cat"];
// var arr4 = ["ferret", 12, 12, 45, 9, 66, 77, 78, 2000, "dog"];

// console.log('result: ', commonElements(arr1, arr2, arr3, arr4));


// // method 1: using an object
// function commonElements() {
//   // make a new set out of each array to eliminate duplicates
//   const args = [...arguments];
//   const argSets = args.map(subArr => [...new Set(subArr)]);

//   // tally up ocurrences of each num/word
//   const cache = argSets.reduce((a, b) => {
//     b.forEach(el => {
//       if (!a[el]) a[el] = 1;
//       else a[el] += 1;
//     });
//     return a;
//   }, {});
  
//   // if num/word tallies up to args length, push to output
//   const output = [];
//   for (const key in cache) {
//     if (cache[key] === args.length) output.push(key * 1 || key);
//   }

//   // if no common elements, return "Nothing in Common!"
//   if (output.length === 0) return "Nothing in Common!";
//   return output;
// }

// // method 2: using HOF's
function commonElements() {
  const args = [...arguments].slice(1);
  const filtered = arguments[0].filter(el => args.every(subArr => subArr.includes(el)));
  const uniques = [...new Set(filtered)];
  return uniques;
}
module.exports = commonElements;
