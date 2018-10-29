// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let twoCount = 0;
  for (let i = num; i >= 0; i -= 1) {
    const numToString = [...i.toString()];
    if (numToString.includes('2')) {
      const result = numToString.filter(numChar => numChar === '2').length;
      twoCount += result;
    }
  }
  return twoCount;
}

module.exports = countTwos;

console.log(countTwos(11420));

// ones -> 2
// tens -> 12, 20-29, 32, 42, 52, 62, 72, 82, 92
// hundreds -> 102, 112, 120-29, 132, 142, 152, 162, 172, 182, 192 