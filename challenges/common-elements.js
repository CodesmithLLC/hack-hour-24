// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

// var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
// var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
// var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
// var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(array1, array2, array3, array4) {
  const array1WithoutDupes = array1.filter((v, i, self) => self.indexOf(v) === i);
  const array2WithoutDupes = array2.filter((v, i, self) => self.indexOf(v) === i);
  const array3WithoutDupes = array3.filter((v, i, self) => self.indexOf(v) === i);
  const array4WithoutDupes = array4.filter((v, i, self) => self.indexOf(v) === i);

  const totalArr = array1WithoutDupes.concat(array2WithoutDupes).concat(array3WithoutDupes).concat(array4WithoutDupes);

  totalArr.sort();

  let count = 0;
  let currentWord;
  const retArr = [];

  for (let i = 0; i < totalArr.length; i += 1) {
    if (currentWord === undefined) {
      currentWord = totalArr[i];
      count = 1;
    } else if (currentWord !== totalArr[i]) {
      if (count >= 4) {
        retArr.push(currentWord);
      }
      currentWord = totalArr[i];
      count = 1;
    } else {
      count += 1;
    }
  }

  if (count >= 4) {
    retArr.push(currentWord);
  }

  return retArr;
}

// const array1 = [1, 4, 6, 7, 'ferret', 12, 12, 99, 2000, 'dog', 'dog', 99, 1000];
// const array2 = [15, 9, 9, 'ferret', 9, 26, 12, 12, 'dog'];
// const array3 = [23, 12, 12, 77, 'ferret', 9, 88, 100, 'dog'];
// const array4 = ['ferret', 12, 12, 45, 9, 66, 77, 78, 2000];

// console.log(commonElements(array1, array2, array3, array4));

module.exports = commonElements;
