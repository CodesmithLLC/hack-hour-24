// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


function insertionSort(array) {
  // Sort in place.
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i; j >= 1; j -= 1) {
      if (array[j] < array[j - 1]) {
        // Swap.
        const temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }

  return array;
}

// const array = [8, 5, 1, 3, 2, 4, 7, 10];
// insertionSort(array);
// console.log(insertionSort(array));

module.exports = insertionSort;
