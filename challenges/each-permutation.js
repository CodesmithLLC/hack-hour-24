/*
Write a function that takes two arguments, an array and a callback. The callback will be called once for each permutation
of the elements of the array, where the permutation is passed as an argument.

Permutations are all the possible rearrangements of the elements. For this problem, assume each permutation must include
every element from the array.

Permutations must NOT repeat any of the array elements.

No return value is necessary.

eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
});
[ 1, 2, 3 ]
[ 1, 3, 2 ]
[ 2, 1, 3 ]
[ 2, 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2, 1 ]
*/

function permu(arr) {
  if (arr.length === 0)
    return [[]];
  let collections = [];
  for (let i = 0; i < arr.length; i++) {
    let remainArr = arr.slice();
    remainArr.splice(i, 1);
    permu(remainArr).forEach((elem) => {
      elem.unshift(arr[i]);
      collections.push(elem);
    });
  }
  return collections;
}
 function eachPermutation(arr, callback) {
   permu(arr).forEach((elem) => {
     callback(elem);
   });
 }
eachPermutation([1, 2, 3], (perm) => {
  console.log(perm);
});

module.exports = eachPermutation;
