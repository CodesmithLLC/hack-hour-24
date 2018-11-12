// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


function insertionSort(array) {
  // 17639
  if (array.length <= 1 || !Array.isArray(array)) return array;

  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] < array[i]) {
      let j = i;
      while (array[j] > array[i + 1]) {
        j--;
      }
      const temp = array[i + 1];
      array.splice(i + 1, 1);
      array.splice(j+1, 0, temp);
    }
  }
  return array;
}

const arr = [5,3,0,9];
console.log(insertionSort(arr));
module.exports = insertionSort;
