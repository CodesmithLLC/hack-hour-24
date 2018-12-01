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
  // return intersect(intersect(array3,array4),intersect(array1,array2))
  let total = removeDup(array1).concat(removeDup(array2),removeDup(array3),removeDup(array4))
  let dict = {};
  total.forEach(i=>{
    if(dict[i]){dict[i]+=1}
    else{dict[i]=1}
  })

  let result = [];
  for (let key in dict) {
    if (dict[key]===4){
      result.push(key);
    }
  }
  return result;
}
function removeDup(arr){
  return arr.filter((ele,index)=>arr.indexOf(ele) === index)
}
// function intersect(arr1, arr2) {
//   let common = arr1.filter(i=>arr2.indexOf(i)>-1);
//   return common.filter((ele,index)=>common.indexOf(ele) === index)
// }
console.log(commonElements([1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000],[15,9,9,'ferret',9,26,12,12,'dog'],[23,12,12,77,'ferret',9,88,100,'dog'],['ferret',12,12,45,9,66,77,78,2000]))
module.exports = commonElements;
