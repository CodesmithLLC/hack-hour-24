// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive).
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


// const numOfTwos = (str) => {

//   let twos = 0;
//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === '2') twos += 1;
//   }
//   return twos;
// };

// const countTwos = (num) => {
//   let total = 0;
//   while (num > 0) {
//     total += numOfTwos(String(num));
//     num -= 1;
//   }
//   return total;
// };

// const countTwos = (num) => {
//   let result = 0;
//   let reverseStrArr = num.toString().split().reverse();
//   for (let i = 0; i < reverseStrArr.length; i += 1) {
//     if ()
//   }


// }

// function countTwos(num) {
//   //  initialize a count
//   let count = 0;
//   // converted the numbers to strings
//   const str = String(num);
//   // loop through the number
//   for (let i = 2; i <= num; i++) {
//     // look at each digit
//     const subStr = String(i);
//     for (let j = 0; j < str.length; j++) {
//       // if the digit is equal to '2', increase count
//       if (subStr[j] === '2') count++;
//     }
//   }
//   return count;
// }

// function countTwosFast(num) {
//   // create digits array
//   const digits = num.toString().split('').reverse();
//   // reduce it
//   return digits.reduce((count, strDigit, idx, arr) => {
//     // turn string into number
//     const digit = Number(strDigit);
//     // case for first digit
//     if (idx === 0) {
//       if (digit >= 2) count += 1;
//     } else {
//       // use formula to add to count based on digit and index
//       count += digit * idx * Math.pow(10, idx - 1);
//       // add 10 to the index power for digits > 2
//       if (digit > 2) {
//         count += Math.pow(10, idx);
//       } else if (digit === 2) {
//         // for digits === 2, add the total of all previous digits to the count
//         count += Number(arr.slice(0, idx).reverse().join('')) + 1;
//       }
//     }
//     // return updated count
//     return count;
//     // include initial value of 0
//   }, 0);
// }


function countTwos(num) {
  let twosCount = 0;

  for (let i = 0; i <= num; i++) {
    if (i.toString().length > 1) {
      const digitsArr = (i).toString(10).split('').map(Number);
      for (let j = 0; j < digitsArr.length; j++) {
        if (digitsArr[j] === 2) twosCount++;
      }
    } else if (i === 2) twosCount++;
  }
  return twosCount;
}

console.log(countTwos(300));

module.exports = countTwos;
