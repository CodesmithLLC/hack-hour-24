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

const cache = {};

function anagrams(string) {
  // Check if answer has already been cached
  if (cache[string]) return cache[string];

  // If empty string, return empty array
  if (string === '') return [''];

  // If string is a single character, return that character
  if (string.length === 1) {
    cache[string] = [string];
    return [string];
  }

  // Otherwise create and cache an array of anagrams
  const anagramArray = [];
  for (let i = 0; i < string.length; i += 1) {
    const remainingChars = string.substring(0, i) + string.substring(i + 1);
    anagrams(remainingChars).forEach(anagram => anagramArray.push(string[i] + anagram));
  }
  cache[string] = anagramArray;

  // Helper function to deduplicate the anagram array
  const deDupe = array => array.filter((el, i) => array.indexOf(el) === i);

  // Returnd de-duplicated array
  return deDupe(anagramArray);
}

module.exports = anagrams;
