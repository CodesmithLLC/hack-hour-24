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
  let test = str.toLowerCase().split(/[_\W]/);
  test = test.filter(i => i !== '');
  console.log(test);
  const left = [];
  for (let i = 0; i < test.length; i++) {
    const testCopyR = test[i].slice().split('').reverse().join('');
    console.log(testCopyR)
    if (i === 0) {
      left.push(test[i]);
    } else if (left[left.length - 1] === testCopyR) {
      left.pop();
    } else if (left[left.length - 1] !== testCopyR) {
      left.push(test[i]);
    }
  }
  return left.length === 0;
}


console.log(matchWord(''))
module.exports = matchWord;
