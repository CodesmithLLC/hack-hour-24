// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

// function insertionSort(array) {
//   for (let i = 1; i < array.length; i += 1) {
//     const currVal = array[i];
//     for (let j = i - 1; j >= 0; j -= 1) {
//       if (currVal < array[j]) {
//         array[i] = array[j];
//         array[j] = currVal;
//       }
//     }
//   }
//   return array;
// }

function insertionSort(array) {
  let sortedUpToHere = 1;
  while (sortedUpToHere < array.length) {
    let currentIndex = sortedUpToHere;
    let currentVal = array[currentIndex];
    while (currentIndex >= 0) {
      currentIndex -= 1;
      while (currentVal < array[currentIndex]) {
        array[currentIndex + 1] = array[currentIndex];
        array[currentIndex] = currentVal;
      }
    }
    sortedUpToHere += 1;
  }
  return array;
}

const testArr = [99, 608, 83, 179, 408, 665, 774, 675];

console.log(insertionSort(testArr));

module.exports = insertionSort;
