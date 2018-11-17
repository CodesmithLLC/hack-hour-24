// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

// [2, 5, 1, 3, 7];

function bubbleSort(array) {

  // create an array to reorder
  let workArr = Array.from(array);
  let swapped = false;
  
  // take the first value and check if its greater than the next value
  do {
    swapped = false;
    for (let i = 0; i < workArr.length; i += 1) {
      if (workArr[i] > workArr[i + 1]) {
        // swap
        let temp = workArr[i];
        workArr[i] = workArr[i + 1];
        workArr[i + 1] = temp;
        swapped = true;
      }
    }

  } while (swapped === true);
}


module.exports = bubbleSort;
