// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  console.log('=== new game ===');
  // do not sort for empty or array with single element
  if (!array || array.length < 2)
    return array;
  // do bubble sort
  let j = array.length - 1;
  while (j > 0) {
    let streak = 0; // the start of
    for (let i = 1; i <= j; i++) {
      if (array[i] < array[i - 1]) {
        // 
        streak = i - 1; 
        let temp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = temp;
      }
      console.log('iteration i=', i, ' j =', j, ':', array);
    }
    j = streak;
    console.log('new j(streak)=', j);
  }
  return array;
}
bubbleSort([3]);
bubbleSort([3,2]);
bubbleSort([4, 3,2]);
bubbleSort([6,5,3,1,8,7,2,4]);
module.exports = bubbleSort;
