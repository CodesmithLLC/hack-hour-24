// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// console.log(matchWord('__END_DNE-----'));//  -> true
// console.log(matchWord('__ENDDNE__')) //;  -> false       (not separated by a space)
// console.log(matchWord('IF()()fi[]'))//;  -> true        (should be case-insensitive)
// console.log(matchWord('for__if__rof__fi'))//;  -> false     not properly closed. like ( [) ] 
// console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'))//;  -> true
// console.log(matchWord(''))//;  -> true


function matchWord(str) {
  if (str === '') return true;
  str = str.replace(/[^\w\s]|_/g, " ").replace(/\s+/g, " ").toLowerCase();
  let strArr = str.split(' ');
  strArr = strArr.filter(word => word.length > 0);
  return arrTester(strArr);
}

function arrTester(strArray) {
  let newArr = [];
  newArr.unshift(strArray.shift());

  while (strArray.length > 0) {
    if (newArr[0] === strArray[0].split('').reverse().join('')) {
      newArr.shift();
      strArray.shift();
    } else {
      newArr.unshift(strArray.shift());
    }
  }
  return newArr.length === 0;
}

module.exports = matchWord;
