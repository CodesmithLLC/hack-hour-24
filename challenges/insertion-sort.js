// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 1; i < array.length; i += 1) {
    let j = i;
    while (j >= 0) {
      console.log(array[j - 1] + ' && ' + array[i]);
      if (array[j - 1] > array[i]) {
        console.log(array[j - 1] + ' > ' + array[i]);
        j -= 1;
      }
      //       else if (array[i] > array[j - 1]) {
      //         const temp = 
      //       }
      else {
        const temp = array[j];
        console.log('temp = ', temp, ' i =', i, ' j = ', j);
        array[j] = array[i];
        array[i] = temp;
        break;
      }
    }
    console.log(array.slice(0, i));
  }
  return array;
}


const test = [3, 7, 4, 9, 5, 2, 6, 1];
console.log(insertionSort(test))

// return array.reduce((sorted, nextNum) => {
//   if (sorted.length === 0) sorted.push(nextNum);
//   else {
//     sorted = sorted.reduce((partialSorted, nextSortedNum, i) => {
//       if (nextNum < nextSortedNum && i === 0) partialSorted.push(nextNum);
//       else if (nextNum > nextSortedNum && i === partialSorted.length - 1) partialSorted.push(nextNum);
//       else {

//       }
//       return partialSorted;
//     }, sorted);
//   }
//   return sorted;
// }, []);