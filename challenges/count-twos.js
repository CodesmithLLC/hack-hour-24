// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive).
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is one 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

// BRUTE FORCE APPROACH
const numOfTwos = (str) => {
  let twos = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '2') twos += 1;
  }
  return twos;
};

const countTwos = (num) => {
  let total = 0;
  while (num > 0) {
    total += numOfTwos(String(num));
    num -= 1;
  }
  return total;
};

module.exports = countTwos;

// console.log('---TESTING countTwos---');
// console.log(`countTwos(1): expect -> 0: actual -> ${countTwos(1)}`);
// console.log(`countTwos(3): expect -> 1: actual -> ${countTwos(3)}`);
// console.log(`countTwos(13): expect -> 2: actual -> ${countTwos(13)}`);
// console.log(`countTwos(1000): expect -> 300: actual -> ${countTwos(1000)}`);
// console.log(`countTwos(11420): expect -> 4483: actual -> ${countTwos(11420)}`);

// console.log(`countTwos(9): expect -> 1: actual -> ${countTwos(9)}`);
// console.log(`countTwos(99): expect -> 20: actual -> ${countTwos(99)}`);
// console.log(`countTwos(999): expect -> 300: actual -> ${countTwos(999)}`);
// console.log(`countTwos(9999): expect -> 4000: actual -> ${countTwos(9999)}`);
// console.log(`countTwos(99999): expect -> 50000: actual -> ${countTwos(99999)}`);
// console.log(`countTwos(999999): expect -> 600000: actual -> ${countTwos(999999)}`);
// console.log(`countTwos(9999999): expect -> 7000000: actual -> ${countTwos(9999999)}`);
