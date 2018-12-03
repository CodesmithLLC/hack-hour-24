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

const eachPermutation = (array, callback) => {
  // Helper function to generate permutations
  const generatePermutations = (arr) => {
    // Edge: If array length is 0 or 1, return it
    if (arr.length <= 1) return arr;
    // Otherwise, create a placeholder for permutations
    const permutations = [];
    // Iterate through array
    for (let i = 0; i < arr.length; i += 1) {
      // Generate array variatn missing value at index i
      const rest = arr.slice(0, i).concat(arr.slice(i + 1));
      // Send these variants through generatePermutations
      const restVariants = generatePermutations(rest);
      // Prepend value at index i to each variant
      for (let j = 0; j < restVariants.length; j += 1) {
        const variant = [arr[i]].concat(restVariants[j]);
        permutations.push(variant);
      }
    }
    return permutations;
  };

  // Utilize helper function to generate permutations
  const arrayPermutations = generatePermutations(array);

  // Call callback on each permutation
  arrayPermutations.forEach(p => callback(p));

  // No return value necessary
  return undefined;
};

module.exports = eachPermutation;

eachPermutation([1, 2, 3], null);
