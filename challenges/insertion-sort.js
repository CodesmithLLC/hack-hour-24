// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for(let i = 1; i < array.length; i += 1) {
    let currElem = array.splice(i,1);
    let insertPoint = i;
    for(let x = i; x >= 0; x -= 1) {
      if(currElem[0] < array[x]) {
        insertPoint = x;
      } 
    }
    array.splice(insertPoint, 0, currElem[0]);
    console.log('Sorting...', array);
  }
  //splice curr elem
  
  //find what spot it needs to be in by looping through already sorted list
  //insert it into that spot
}
let test = [14,3,7,12,8, 9 , 20, 1];
insertionSort(test);
console.log(test);

module.exports = insertionSort;