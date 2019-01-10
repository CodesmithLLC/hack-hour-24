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

function numToWords(num, result) {
  if (num === 0 && result === undefined) {
    return 'Zero';
  }
  result = "";
  if (num >= 1000000000000000) {
    let numQuadrillions = Math.floor(num/1000000000000000);
    let leftOver = num % 1000000000000000;
    result += numToWords(numQuadrillions, result);
    result += 'Quadrillion';
    result += numToWords(leftOver, result);
    return result;
  }
  if (num >= 1000000000000) {
    let numTrillions = Math.floor(num/1000000000000);
    let leftOver = num % 1000000000000;
    result += numToWords(numTrillions, result);
    result += 'Trillion';
    result += numToWords(leftOver, result);
    return result;
  }
  if (num >= 1000000000) {
    let numBillions = Math.floor(num/1000000000);
    let leftOver = num % 1000000000;
    result += numToWords(numBillions, result);
    result += 'Billion';
    result += numToWords(leftOver, result);
    return result;
  }
  if (num >= 1000000) {
    let numMillions = Math.floor(num/1000000);
    let leftOver = num % 1000000;
    result += numToWords(numMillions, result);
    result += 'Million';
    result += numToWords(leftOver, result);
    return result;
  }
  if (num >= 1000) {
    let numThousands = Math.floor(num/1000);
    let leftOver = num % 1000;
    result += numToWords(numThousands, result);
    result += 'Thousand';
    result += numToWords(leftOver, result);
    return result;
  }
  if (num >= 100) {
    let numHundreds = Math.floor(num/100);
    let leftOver = num % 100;
    result += numToWords(numHundreds, result);
    result += 'Hundred';
    result += numToWords(leftOver, result);
    return result;
  }
  if (num > 90) {
    result += 'Ninety';
    num -= 90;
  }
  if (num > 80) {
    result += 'Eighty';
    num -= 80;
  }
  if (num > 70) {
    result += 'Seventy';
    num -= 70;
  }
  if (num > 60) {
    result += 'Sixty';
    num -= 60;
  }
  if (num > 50) {
    result += 'Fifty';
    num -= 50;
  }
  if (num > 40) {
    result += 'Forty';
    num -= 40;
  }
  if (num > 30) {
    result += 'Thirty';
    num -= 30;
  }
  if (num > 20) {
    result += 'Twenty';
    num -= 20;
  }
  if (num === 1) {
    result += 'One';
    num -= 1;
  }
  if (num === 2) {
    result += 'Two';
    num -= 2;
  }
  if (num === 3) {
    result += 'Three';
    num -= 3;
  }
  if (num === 4) {
    result += 'Four';
    num -= 4;
  }
  if (num === 5) {
    result += 'Five';
    num -= 5;
  }
  if (num === 6) {
    result += 'Six';
    num -= 6;
  }
  if (num === 7) {
    result += 'Seven';
    num -= 7;
  }
  if (num === 8) {
    result += 'Eight';
    num -= 8;
  }
  if (num === 9) {
    result += 'Nine';
    num -= 9;
  }
  if (num === 10) {
    result += 'Ten';
    num -= 10;
  }
  if (num === 11) {
    result += 'Eleven';
    num -= 11;
  }
  if (num === 12) {
    result += 'Twelve';
    num -= 12;
  }
  if (num === 13) {
    result += 'Thirteen';
    num -= 13;
  }
  if (num === 14) {
    result += 'Fourteen';
    num -= 14;
  }
  if (num === 15) {
    result += 'Fifteen';
    num -= 15;
  }
  if (num === 16) {
    result += 'Sixteen';
    num -= 16;
  }
  if (num === 17) {
    result += 'Seventeen';
    num -= 17;
  }
  if (num === 18) {
    result += 'Eighteen';
    num -= 18;
  }
  if (num === 19) {
    result += 'Nineteen';
    num -= 19;
  }

  if (num === 0) { return result; }
  return numToWords(num, result);

}

console.log(numToWords(98786236669912345));
module.exports = numToWords;
