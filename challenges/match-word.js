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
  let str = '%%$@$while  try ! yrt  for if_fi rof #*#  elihw'


  str = str.replace(/[^\w\s]|_/g, "")
          .replace(/\s+/g, " ");

  const strArr = str.split(' ');
  return arrTester(strArr);

}

const arrTester = function(strArray){
  if (strArray.length === 0) {
    return true
  }
  let endStr = strArray.pop();
  for (let i = 0; i < strArr.length; i += 1) {
    if (strArray[i] === endStr.split('').reverse().join()) {
      strArray.splice(i, 1);
      return arrTester(strArray);
    }
  }
  return false;

}

module.exports = matchWord;
