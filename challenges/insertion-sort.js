// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (var i = 1, j; i < array.length; i += 1) {
    const temp = array[i];
    for (var j = i - 1; j >= 0 && array[j] > temp; j -= 1) {
      array[j+1] = array[j];
    }
    array[j+1] = temp;
  }

  return array;

  // joe's solution
  // for (let i = 1; i < array.length; i += 1) {
  //   if (array[i] < array[i - 1]) {
  //     let j = i;
  //     while (j >= 0 && array[j] < array[j - 1]) {
  //       const temp = array[j];
  //       array[j] = array[j - 1];
  //       array[j - 1] = temp;
  //       j--;
  //     }
  //   }
  // }
  // return array
}

console.log(insertionSort([6,5,3,1,8,7,2,4]))
module.exports = insertionSort;