// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac",
// i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that
// takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or
// punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function isAlpha(letter) {
  const regex = /[a-z]/ig;
  return regex.test(letter);
}
function matchWord(str) {
  // make a work array
  let workArr = Array.from(str);
  workArr = workArr.map(item => item.toLowerCase());
  const resultArr = [];
  let newWord = [];
  let collectingLetters = false;
  // iterate through the array and build words when you find letters
  workArr.forEach((item) => {
    if (isAlpha(item) && collectingLetters === false) {
      collectingLetters = true;
    } else if (!isAlpha(item) && collectingLetters === true) {
      collectingLetters = false;
      if (resultArr.length > 0) {
        resultArr.unshift(newWord.reverse().join(''));
        if (resultArr[0] !== resultArr[1]) {
          return false;
        }
        resultArr.splice(0, 2);
      } else if (resultArr.length === 0) {
        resultArr.unshift(newWord.join(''));
      }
      newWord = [];
    }
    if (collectingLetters === true) {
      newWord.push(item);
    }
  });
  // reverse the word
  // unshift the word onto an array
  // next time we find a word, build it and check if it was the last word added
  // if it wasnt => false
  // if it was shift the word off and keep going
  // if array.length = 0 at the end, then its all good
  return (resultArr.length === 0);
}

console.log(matchWord('__END_DNE-----'));
console.log(matchWord('__ENDDNE__'));
console.log(matchWord('IF()()fi[]'));
console.log(matchWord('for__if__rof__fi'));
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
console.log(matchWord(''));
// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

module.exports = matchWord;
