// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let temp;
  for (let i = 0; i < array.length; i += 1) {
    for(let x = i + 1; x < array.length; x += 1 ) {
      if(array[i] > array[x]){
        temp = array[x];
        array[x] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}
let test = [1,5,2,7,3,4,9];
console.log(bubbleSort(test));

module.exports = bubbleSort;
