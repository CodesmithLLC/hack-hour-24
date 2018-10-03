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
  if (str === '') return true;
  let i = 1;
  const workingString = str.replace(/[.,\[\]\/@#!$%\^&\*;:{}=\-_`~()]/g, ' ').toLowerCase();
  const workingArr = workingString.split(' ').filter(word => word !== '');
  const stack = [workingArr[0]];
  while (i < workingArr.length) {
    if (stack.includes(workingArr[i].split('').reverse().join(''))) {
      if (stack.pop() === workingArr[i].split('').reverse().join('')) {
        i += 1;
      } else {
        return false;
      }
    } else {
      stack.push(workingArr[i]);
      i += 1;
    }
  }
  if (stack[0] === undefined) {
    return true;
  }
}

module.exports = matchWord;
