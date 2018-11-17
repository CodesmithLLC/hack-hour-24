// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort


function bubbleSort(array) {
  let test = true
  while (test) {
  // for (let j = 0; j < array.length; j += 1) {
    test = false;
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        test = true;
      }
    }
  }
  return array;



  // let swapped;
  // do {
  //     swapped = false;
  //     for (let i=0; i < array.length-1; i++) {
  //       if (array[i] > array[i+1]) {
  //         let temp = array[i];
  //         array[i] = array[i+1];
  //         array[i+1] = temp;
  //         swapped = true;
  //       }
  //     }
  // } while (swapped);
  // return array;
}
// console.log(bubbleSort([3,2,5,1,8,4,10]))
module.exports = bubbleSort;
