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
function permute(input) {
  const results = [];
  function permutation(arr, position) {
    if (position === arr.length - 1) {
      results.push(arr);
    } else {
      for (let i = position; i < arr.length; i += 1) {
        // 123 pos = 0
        // 123, 123
        //123,1 => temp is 2 , 
        const tempSwap = arr[position];
        arr.splice(position, 1, arr[i]);
        arr.splice(i, 1, tempSwap);
        permutation(arr.slice(), (position + 1));
      }
    }
  }

  permutation(input, 0);
  return results;
}

function eachPermutation(arr, callback) {
  let newarr = permute(arr);
  newarr = newarr.map(i => callback(i));
}


// console.log(eachPermutation([1, 2, 3], (perm) => { console.log(perm.concat(['hi'])) ;}));
module.exports = eachPermutation;
