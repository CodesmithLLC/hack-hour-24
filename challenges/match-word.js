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

function matchWord(str) {
  if ('') return true;

  const arrayOfWords = [];
  let word = '';

  for (let i = 0; i < str.length; i += 1) {
    if (str[i].toLowerCase().match(/[a-z]/) !== null) {
      word += str[i].toLowerCase();
    } else if (word !== '') {
      arrayOfWords.push(word);
      word = '';
    }
  }

  const stack = [];
  for (let i = 0; i < arrayOfWords.length; i += 1) {
    if (stack.length !== 0 && stack[i - 1] === arrayOfWords[i].split('').reverse().join('')) {
      stack.pop();
    } else {
      stack.push(arrayOfWords[i]);
    }
  }

  return stack.length === 0;
}

console.log(matchWord('__ENDDNE__'));
module.exports = matchWord;
