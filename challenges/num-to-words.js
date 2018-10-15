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
  const singleDigits = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const teenDigits = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tensDigits = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninty'];
  const bigDigits = ['Hundred', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];

  if (!num) return '';
  const numToString = num.toString();
  const workArr = Array.from(numToString);

  if (workArr.length === 1) {
    return singleDigits[parseInt(workArr[0])];
  }
  else if (workArr.length === 2) {
    let result = '';
    result.concat(teenDigits[parseInt])
  }

}

console.log(numToWords(21));

module.exports = numToWords;


INSERT INTO users ("joel", "perkins" "joel.climbs@gmail.com", "jeeves", "https://github.com/joelkperkins", "https://www.linkedin.com/in/joelkperkins/");
