// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  // if string is empty, return true
  if (!str.length) return 0;

  const wordsArray = str.match(/[a-zA-Z]+/g);
  const stackOfWords = wordsArray.reduce((stack, nextWord) => {
    const reversed = nextWord.split('').reverse().join('');
    if (stack.length === 0) stack.push(nextWord);
    else if (stack[stack.length - 1] === reversed) {
      stack.pop();
    } else {
      stack.push(nextWord);
    }
    return stack;
  }, []);
  return stackOfWords.length === 0;
}

module.exports = matchWord;

console.log(matchWord('for__if__rof__fi'));
