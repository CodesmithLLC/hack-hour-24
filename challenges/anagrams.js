/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(string) {
  let before, after, focus;
  let output = [];
  if(string.length < 2) {
    return string;
  } else{
    for(let i = 0; i < string.length; i += 1) {
      let firstLetter = string[i];

      if(string.indexOf(firstLetter) != i)
        continue;
      
      var remainingString = string.slice(0, i) + string.slice(i+1, string.length);

      for( let subPermutation of anagrams(remainingString)){
        output.push(firstLetter + subPermutation);
      }
    }
  }
  return output;
}

console.log(anagrams('abcd'));
module.exports = anagrams;
