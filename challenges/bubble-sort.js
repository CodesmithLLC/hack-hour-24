// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  // Edge Cases: No input, input not array, empty array
  if (!array || !Array.isArray(array) || !array.length) return [];
  // Edge Cases: Array of length 1
  if (array.length === 1) return array;
  // Initiate bubble sort with 'sortedIndex' pointer at last element and a swaps tracker
  let sortedIndex = array.length - 1;
  let swaps;
  do {
    // Set swaps tracker to false and use a pointer to traverse the unsorted portion of the array
    swaps = false;
    let currIndex = 0;
    while (currIndex < sortedIndex) {
      // As you traverse the array, check if any number is out of order with its following number
      if (array[currIndex] > array[currIndex + 1]) {
        // If two numbers are out of order, swap them and change swaps tracker to true
        [array[currIndex], array[currIndex + 1]] = [array[currIndex + 1], array[currIndex]];
        swaps = true;
      }
      // Increment currIndex after each check
      currIndex += 1;
    }
    // Decrement sortedIndex after each round of checking the unsorted array
    sortedIndex -= 1;
  }
  // Discontinue sort and return array if no swaps were made
  while (swaps);
  return array;
}

module.exports = bubbleSort;

// console.log('---TESTING bubbleSort---');
// console.log(`bubbleSort([]): expect -> []: actual -> [${bubbleSort([])}]`);
// console.log(`bubbleSort([6]): expect -> [6]: actual -> [${bubbleSort([6])}]`);
// console.log(`bubbleSort([1, 2, 3, 4, 5]): expect -> [1, 2, 3, 4, 5]: actual -> [${bubbleSort([1, 2, 3, 4, 5])}]`);
// console.log(`bubbleSort([5, 4, 3, 2, 1]): expect -> [5, 4, 3, 2, 1]: actual -> [${bubbleSort([5, 4, 3, 2, 1])}]`);
