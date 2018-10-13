// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

const scaleChart = {
  0: '',
  1: 'Thousand',
  2: 'Million',
  3: 'Billion',
  4: 'Trillion',
  5: 'Quadrillion',
  6: 'Quintillion',
  7: 'Sextillion',
  8: 'Septillion',
};

const tensChart = {
  2: 'Twenty',
  3: 'Thirty',
  4: 'Forty',
  5: 'Fifty',
  6: 'Sixty',
  7: 'Seventy',
  8: 'Eighty',
  9: 'Ninety',
};

const nums = {
  0: '',
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  10: 'Ten',
  11: 'Eleven',
  12: 'Twelve',
  13: 'Thirteen',
  14: 'Fourteen',
  15: 'Fifteen',
  16: 'Sixteen',
  17: 'Seventeen',
  18: 'Eighteen',
  19: 'Nineteen',
};

const numToWords = function numToWords(num, scale = 0) {
  // Edge Case - Number is zero
  if (num === 0 && scale === 0) {
    return 'Zero';
  }

  // Step 1: Convert the Number in the Hunreds/Tens/Ones to Words
  // Start by creating an empty string for words.
  let words = '';
  // Declare a constant for the numbers in the hundreds, tens and ones place
  const firstThreeNums = String(num).slice(-3);
  // Parse out the hundreds and add to words
  if (firstThreeNums.length === 3 && firstThreeNums[0] !== '0') {
    const hundreds = nums[Number(firstThreeNums[0])];
    words = `${hundreds}Hundred`;
  }

  // Parse out the tens and ones
  const firstTwoNums = Number(String(num).slice(-2));
  if (firstTwoNums < 20) {
    words += nums[firstTwoNums];
  } else {
    const tens = Number(String(firstTwoNums)[0]);
    const ones = Number(String(firstTwoNums)[1]);
    words += tensChart[tens] + nums[ones];
  }

  // Step 2: Add scale ('Millions', 'Thousands', etc) to the words representing hte first three digits
  if (firstThreeNums !== '000') words += scaleChart[scale];

  // Step 3: If number is over 1000, make a recusive call to the next scale
  if (num > 1000) {
    return numToWords(Number(String(num).slice(0, -3)), scale + 1) + words;
  }
  // If number is less than 1000, return just the number converted to words
  return words;
};

module.exports = numToWords;

// console.log('---TESTING numToWords---');
// console.log(`numToWords(0): expect -> 'Zero': actual -> ${numToWords(0)}`);
// console.log(`numToWords(43): expect -> 'FortyThree': actual -> ${numToWords(43)}`);
// console.log(`numToWords(2999): expect -> 'TwoThousandNineHundredNintyNine': actual -> ${numToWords(2999)}`);
// console.log(`numToWords(15): expect -> 'Fifteen': actual -> ${numToWords(15)}`);
// console.log(`numToWords(2483579411): expect -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven': actual -> ${numToWords(2483579411)}`);
// console.log(`numToWords(300525151340440): expect -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty': actual -> ${numToWords(300525151340440)}`);
// console.log(`numToWords(92120000000000000): expect -> 'NintyTwoQuadrillionOneHundredTwentyTrillion': actual -> ${numToWords(92120000000000000)}`);
