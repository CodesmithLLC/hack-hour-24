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

function matchInverse(tok1, tok2) {
    if (tok1.length != tok2.length)
        return false;
    for (let i = 0; i < tok1.length; i++) {
        if (tok1[i].toLowerCase() != tok2[tok2.length - i - 1].toLowerCase())
            return false;
    }
    return true;
}

function isLetter(input) {
    var letters = /^[A-Za-z]+$/;
    if (input.value.match(letters)) {
        return true;
    }
    else {
        alert("message");
        return false;
    }
}
function matchWord(str) {
    if (str === '')
        return false;
    let regEx = /[A-Za-z]+/g;
    let tokArr = str.match(regEx);
    let tokStack = [];
    for (let i = 0; i < tokArr.length; i++) {
        if (tokStack.length > 0 && matchInverse(tokArr[i], tokStack[tokStack.length - 1]))
            tokStack.pop();
        else {
            tokStack.push(tokArr[i]);
            //console.log(tokStack);
        }
    }
    return tokStack.length === 0;
}

console.log(matchWord('__END_DNE-----'));
console.log(matchWord('__ENDDNE__'));
console.log(matchWord('IF()()fi[]'));
console.log(matchWord('for__if__rof__fi'));
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
console.log(matchWord(''));
module.exports = matchWord;
