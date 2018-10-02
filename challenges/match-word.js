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
  // Create empty stack to hold words and empty string to hold the current word
  const stack = [];

  // Helper function to reverse word strings
  const reverseWord = function reverseWord(word) {
    return word.split('').reverse().join('');
  };

  // Trim string, removing all special characters and replacing with spaces
  const cleanStr = str.replace(/[^a-zA-Z]/g, ' ').trim();

  // Turn string into array of words, filtering out all spaces
  const cleanStrArr = cleanStr.split(' ').filter(el => el !== '');

  // Loop through the array, checking each word against the stack
  for (let i = 0; i < cleanStrArr.length; i += 1) {
    if (!stack.length) {
      // If the stack is empty, push the word
      stack.push(reverseWord(cleanStrArr[i]));
    } else if (cleanStrArr[i].toLowerCase() === stack.slice(-1)[0].toLowerCase()) {
      // If the word matches the top of the stack, pop the most recent word off the stack
      stack.pop();
    } else {
      // Otherwise, push the reverse of the word to the stack
      stack.push(reverseWord(cleanStrArr[i]));
    }
  }
  // Once loop complete, check if stack is empty - if so, return true, else return false
  return !stack.length;
}

module.exports = matchWord;

// console.log('---TESTING matchWord---');
// console.log(`matchWord(''): expect -> true: actual -> ${matchWord('')}`);
// console.log(`matchWord('_END_DNE_'): expect -> true: actual -> ${matchWord('_END_DNE_')}`);
// console.log(`matchWord('_ENDDNE_'): expect -> false: actual -> ${matchWord('_ENDDNE_')}`);
// console.log(`matchWord('IF()()fi[]'): expect -> true: actual -> ${matchWord('IF()()fi[]')}`);
// console.log(`matchWord('for__if__rof__fi'): expect -> false: actual -> ${matchWord('for__if__rof__fi')}`);
// console.log(`matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'): expect -> true: actual -> ${matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw')}`);
