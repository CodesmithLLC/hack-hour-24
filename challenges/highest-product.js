/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  allThree = [];
  // received the email, tried to fix the edge cases
  if (array.length < 3 || !Array.isArray(array)) return 0;
  function allPosible(arr, pro=[]){
    if(arr.length === 0) {
        if(pro.length===3){
            allThree.push(pro);
            // console.log(pro,multiplyAll(pro))
        }  
    }
    else{
      allPosible(arr.slice(1),pro.concat(arr[0]));
      allPosible(arr.slice(1),pro);
    }
  }
  allPosible(array);
  return Math.max(...allThree.map(i=>multiplyAll(i)));
}
function multiplyAll(ar){
  return ar.reduce((accu,curr)=>{return accu*curr},1)
}

// console.log(highestProduct(13));

module.exports = highestProduct;
