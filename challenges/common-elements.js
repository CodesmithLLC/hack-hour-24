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

function commonElements(array1, array2, array3, array4){

  // create a count object
  const countObj = {};

  // create return array
  const returnArray = [];

  // iterate through each array individually
  // 1st array:
  array1.forEach(ele => {
    if (!countObj[ele]) {
      countObj[ele] = 1;
    }
  })
  // 2nd array:
  array2.forEach(ele => {
    if (countObj[ele] === 1) {
      countObj[ele] += 1;
    }
  })
  // 3rd array:
  array3.forEach(ele => {
    if (countObj[ele] === 2) {
      countObj[ele] += 1;
    }
  })
  // 4th array:
  array4.forEach(ele => {
    if (countObj[ele] === 3) {
      countObj[ele] += 1;
    }
  })

  // iterate through countObj and find the keys that have a value of 4
  for (let key in countObj) {
    if (countObj[key] === 4) {
      if (!isNaN(key)) {
        returnArray.push(Number(key));
      } else {
        returnArray.push(key);
      } 
    }
  }

  return !returnArray.length ? "Nothing in Common!" : returnArray;
}


console.log(commonElements([1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000], [15,9,9,'ferret',9,26,12,12,'dog'], [23,12,12,77,'ferret',9,88,100,'dog'], ['ferret',12,12,45,9,66,77,78,2000]));
module.exports = commonElements;
