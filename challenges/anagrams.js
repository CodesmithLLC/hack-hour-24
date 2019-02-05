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
  if (string === '') { return ['']; }

  const result = new Set;

  function helperFunc(str, temp = '') {
    if (str.length === 1) {
      result.add(temp + str);
    } else {
      for (let i = 0; i < str.length; i += 1) {
        let currTemp = temp;
        const stringArr = str.split('');
        const nextLetterArr = stringArr.splice(i, 1);
        currTemp += nextLetterArr[0];
        const unusedLetters = stringArr.join('');
        helperFunc(unusedLetters, currTemp);
      }
    }
  }
  helperFunc(string);
  return [...result];
}


module.exports = anagrams;

