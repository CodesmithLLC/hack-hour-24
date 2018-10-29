// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let count = 0;
  let currentNum = 1;

  while (currentNum <= num) {
    let operator = currentNum.toString();
    if(operator[operator.length-1] === '2' && operator.length === 1){
      count += 1;
      currentNum += 1;
    } else if (operator.indexOf('2') === -1){
      currentNum += 1;
    } else{
      for(let i = 0; i < operator.length; i += 1){
        if(operator[i] === '2'){
          count += 1
        }
      }
      currentNum += 1;
    }
  }
  return count;
}

console.log(countTwos(11420));

module.exports = countTwos;
