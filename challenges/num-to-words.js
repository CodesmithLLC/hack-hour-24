// // // Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// // // Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


// // /**
// //  * numToWords(0) -> 'Zero'
// //  * numToWords(43) -> 'FortyThree'
// //  * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
// //  * numToWords(15) -> 'Fifteen'
// //  * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
// //  * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
// //  * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
// //  */
// let digit = {
//   // 1: 'one',
//   2: 'two',
//   3: 'three',
//   4: 'four',
//   5: 'five',
//   6: 'six',
//   7: 'seven',
//   8: 'eight',
//   9: 'nine',
// }

let word = {
  'Quadrillion': 100000000000000,
  'Trillion': 1000000000000,
  'Billion':1000000000,
  'Million':1000000,
  'Thousand': 1000,
  'Hundred': 100,
  'Ninty': 90,
  'Eighty': 80,
  'Seventy': 70,
  'Sixty': 60,
  'Fifty': 50,
  'Fourty': 40,
  'Thirth': 30,
  'Twenty': 20,
  'Nineteen':19,
  'Eighteen':18,
  'Seventeen':17,
  'Sixteen':16,
  'Fifteen':15,
  'Fourteen':14,
  'Thirteen':13,
  'Twelve':12,
  'Eleven':11,
  'Ten':10,
  'Nine':9,
  'Eight':8,
  'Seven':7,
  'Six':6,
  'Five':5,
  'Four':4,
  'Three':3,
  'Two':2,
  'One':1,
};


function numToWords(num){
  newNum = num.toString();
  part1 = newNum.slice(-3);
  part2 = newNum.slice(-6,-3);
  part3 = newNum.slice(-9,-6);
  part4 = newNum.slice(-12,-9);
  part5 = newNum.slice(-15,-12);
  part6 = newNum.slice(-18,-15);

  let str2 = helper(part2) + 'Thousand';
  let str1 = helper(part1) + '';
  let str3 = helper(part3);
  let str4 = helper(part4);
  let str5 = helper(part5);
  let str6 = helper(part6);

  if(str3!==''){str3 += 'Million'}
  if(str4!==''){str4 += 'Billion'}
  if(str5!==''){str5 += 'Tillion'}
  if(str6!==''){str6 += 'Quadrillion'}

  return str6+str5+str4+str3+str2+str1
}
console.log(numToWords(92120000000000000))
function helper(num) {
  let str = '';
  if (num === 0) {
    return str;
  }
  for (let key in word) {
    if (num >= word[key]) {
      let count = Math.floor(num/word[key]); 
      for(let k in word){
        if (word[k] === count) {
          {
            if (k==='One') {
              k='';
            } 
            else 
            {
              console.log(count)
              str+=k;
            }
          }
        }
      }
      str += key;
      num = num - word[key]*count;
    }
  }
  return str;
}

console.log(helper(2321))
// // module.exports = numToWords;

// stephanie's solution
// function numToWords(num) {
//   // cover case of no number or zero
//   if (!num) return 'Zero';
//   // stringify number
//   let str = String(num);
//   // prepend zeros until length is divisible by 3 so we can evaluate place and format
//   while (str.length % 3) {
//     str = '0' + str;
//   }
//   // return the final word
//   return wordPlace(str)
//   .replace('TenOne', 'Eleven')
//   .replace('TenTwo', 'Twelve')
//   .replace('TenThree', 'Thirteen')
//   .replace('TenFour', 'Fourteen')
//   .replace('TenFive', 'Fifteen')
//   .replace('TenSix', 'Sixteen')
//   .replace('TenSeven', 'Seventeen')
//   .replace('TenEight', 'Eighteen')
//   .replace('TenNine', 'Nineteen');
//   // cover special cases for tens
// }

// // define helper function to evaluate three numbers at a time into respective words until there are no more threes
// function wordPlace(str) {
//   // define base case when no digits are left
//   if (!str.length) return '';
//   // slice number string by three at a time
//   const groupNums = str.slice(0, 3);
//   // declare variable to store words
//   let wordStore = '';
//   // if groupNums is 000, should not have words
//   if (groupNums === '000') wordStore = '';
//   // otherwise...
//   else {
//     // determine PLACES index by dividing string length by 3, minus 1
//     const placesIndex = str.length / 3 - 1;
//     // parse the groups of three, and add it to the words storage
//     wordStore = parseThree(groupNums) + PLACES[placesIndex];
//   }
//   // continue adding to group of words for every 3 digits
//   return wordStore + wordPlace(str.slice(3));
// }

// // define helper function to parse those groups of three
// function parseThree(digits) {
//   // declare variable to store words
//   let words;
//   // if digits is greater than or equal to 100, should take format of
//   if (digits >= 100) {
//     // (one) hundred / (twenty) tens / (two) ones
//     return ONES[digits[0]] + 'Hundred' + TENS[digits[1]] + ONES[digits[2]];
//   } else if (digits >= 10) {
//     // if digits is greater than or equal to 10, should take format of tens / ones
//     return TENS[digits[1]] + ONES[digits[2]];
//   } else {
//     // otherwise, format should just be ones
//     return ONES[digits[2]];
//   }
// }