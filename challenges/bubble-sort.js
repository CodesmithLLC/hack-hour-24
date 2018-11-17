// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort


function bubbleSort(array) {
  let swapped = true;

  for (let i = 0; i < array.length; i += 1) {
    if (!swapped) break;
    swapped = false;
    for (let j = 0; j < array.length - i - 1; j += 1) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }
  }

  return array;
}

// console.log(bubbleSort([1, 0, 8, 2]));

module.exports = bubbleSort;
