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



function numToWords(num) {
  // edge case
  if (num === 0 && result === undefined) {
    return 'Zero';
  }
  let outerResult = '';
  let numToString = num.toString();
  // add zero's to front so number of digits divisible by three
  while (numToString.length % 3) {
    numToString = `0${numToString}`;
  }
  const units = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];
  const digitGroups = [];
  while (numToString.length) {
    const numStringArr = numToString.split('');
    let threeDigits = numStringArr.splice(-3);
    threeDigits = Number(threeDigits.join(''));
    digitGroups.push(threeDigits);
    numToString = numStringArr.join('');
  }
  function helperFunc(num, reslt) {
    let result = reslt || '';
  
    if (num >= 100) {
      const numHundreds = Math.floor(num / 100);
      const leftOver = num % 100;
      result += helperFunc(numHundreds, result);
      result += 'Hundred';
      result += helperFunc(leftOver);
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
  }

  for (let i = 0; i < digitGroups.length; i += 1) {
    outerResult = `${helperFunc(digitGroups[i])}${units[i]}${outerResult}`;
  }

  return outerResult;


module.exports = numToWords;