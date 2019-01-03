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
  if (num === 0) {
    return 'zero'
  }
  let result = "";
  
  return helperFunc(num)

  function helperFunc(num){
    if (num === 0) {
      return result;
    }
  }




  if (num === 1) {
    result += 'one'
  }
  if (num === 2) {
    result += 'two'
  }
  if (num === 3) {
    result += 'three'
  }
  if (num === 4) {
    result += 'four'
  }
  if (num === 5) {
    result += 'five'
  }
  if (num === 6) {
    result += 'six'
  }
  if (num === 7) {
    result += 'seven'
  }
  if (num === 8) {
    result += 'eight'
  }
  if (num === 9) {
    result += 'nine'
  }
  if (num === 10) {
    result += 'ten'
  }
  if (num === 11) {
    result += 'eleven'
  }
  if (num === 12) {
    result += 'twelve'
  }
  if (num === 13) {
    result += 'thirteen'
  }
  if (num === 14) {
    result += 'fourteen'
  }
  if (num === 15) {
    result += 'fifteen'
  }
  if (num === 16) {
    result += 'sixteen'
  }
  if (num === 17) {
    result += 'seventeen'
  }
  if (num === 18) {
    result += 'eighteen'
  }
  if (num === 19) {
    result += 'nineteen'
  }

}

module.exports = numToWords;
