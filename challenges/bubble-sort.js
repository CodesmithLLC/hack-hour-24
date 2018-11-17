// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  const bubbled = array;

  for (let pass = bubbled.length; pass >= 0; pass -= 1) {
    for (let i = 1; i <= pass; i += 1) {
      if (bubbled[i - 1] > bubbled[i]) {
        let tmp = bubbled[i];
        bubbled[i] = bubbled[i - 1];
        bubbled[i - 1] = tmp;
      }
    }
  }
  return bubbled;
}

module.exports = bubbleSort;


const array = [9, 4, 1, 2, 3];
console.log(bubbleSort(array));