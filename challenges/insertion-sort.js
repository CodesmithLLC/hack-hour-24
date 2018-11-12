// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j >= 0; j--) {
      // do exchange if array[i] is greater than array[j]
      if (array[j] < array[j - 1]) {
        let temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      }
      else if (array[j] > array[j - 1])
        break;
    }
  }
  return array;
}

const array = [6, 5, 3, 1, 8, 7, 2, 4];
console.log(insertionSort(array));
module.exports = insertionSort;