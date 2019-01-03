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

function commonElements(...args) {
  // collect all arguments into args
  const result = args.reduce((acc, curr) => {
    // // create new set from each arg array, eliminating duplicates
    // const newSet = new Set(curr);
    // // use spread operator to turn set back into array to filter
    // // only keep elements that are also in accumulator
    // return [...newSet].filter(elem => acc.indexOf(elem) !== -1);
    const filtered = curr.filter(elem => acc.indexOf(elem) !== -1);
    const elimDupesSet = new Set(filtered);
    return [...elimDupesSet];
  });
  if (result.length > 0) {
    return result;
  }
  return 'Nothing in Common!';
}

// var arr1 = [1, 4, 6, 7, "ferret", 12, 12, 99, 2000, "dog", "dog", 99, 1000];
// var arr2 = [15, 9, 9, "ferret", 9, 26, 12, 12, "dog"];
// var arr3 = [23, 12, 12, 77, "ferret", 9, 88, 100, "dog", "cat"];
// var arr4 = ["ferret", 12, 12, 45, 9, 66, 77, 78, 2000, "dog"];

// console.log('result: ', commonElements(arr1, arr2, arr3, arr4));
module.exports = commonElements;
