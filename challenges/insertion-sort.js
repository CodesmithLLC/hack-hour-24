// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  for (let i = 1; i < array.length; i += 1) {
    const currVal = array[i];
    for (let j = i - 1; j >= 0; j -= 1) {
      if (array[i] < array[j]) {
        array[j + 1] = array[j];
      } else {
        break;
      }
      array[j + 1] = currVal;
    }
  }
  return array;
}

const testArr = [994, 608, 83, 179, 408, 665, 774, 675]

console.log(insertionSort(testArr));

module.exports = insertionSort;