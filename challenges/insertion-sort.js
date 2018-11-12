// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  // Edge Case - Array of 0 or 1 elements
  if (array.length < 2) return array;
  // Clone array for manipulation
  const myArr = array;
  // Declare a pointer to indicate how much of the array has been sorted
  let sortedIndex = 1;
  // Iterate forward through the array until the entire array has been sorted
  while (sortedIndex < myArr.length) {
    // Declare a variable to hold the first unsorted value and its index
    let currentIndex = sortedIndex;
    const currentVal = myArr[currentIndex];
    // Iterante backwards through the sorted array, one value at a time until hitting index 0
    while (currentIndex >= 0) {
      if (currentIndex === 0 || currentVal > myArr[currentIndex - 1]) {
        // If the value being sorted is less than the number observed ...
        // OR the currentIndex is 0, place the sorted number and break the inner loop
        myArr[currentIndex] = currentVal;
        break;
      } else {
        // Otherwise, move the sorted number forward by one index and decrement currentIndex
        myArr[currentIndex] = myArr[currentIndex - 1];
        currentIndex -= 1;
      }
    }
    // Once the number has been placed,
    sortedIndex += 1;
  }
  return myArr;
}

module.exports = insertionSort;

// console.log('---TESTING insertionSort---');
// console.log(`insertionSort([]): expect -> []: actual -> [${insertionSort([])}]`);
// console.log(`insertionSort([5]): expect -> [5]: actual -> [${insertionSort([5])}]`);
// console.log(`insertionSort([3, 6]): expect -> [3, 6]: actual -> [${insertionSort([3, 6])}]`);
// console.log(`insertionSort([6, 3]): expect -> [3, 6]: actual -> [${insertionSort([6, 3])}]`);
// console.log(`insertionSort([1, 2, 3, 4, 5]): expect -> [1, 2, 3, 4, 5]: actual -> [${insertionSort([1, 2, 3, 4, 5])}]`);
// console.log(`insertionSort([5, 4, 3, 2, 1]): expect -> [1, 2, 3, 4, 5]: actual -> [${insertionSort([5, 4, 3, 2, 1])}]`);
