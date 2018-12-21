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
  if (string === '')
    return [''];

  let arr = string.split('');
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let remainArr = arr.slice();
    remainArr.splice(i, 1);
    anagrams(remainArr.join('')).forEach(elem => {
      result.push(arr[i] + elem);
    });
  }
  return result;
}

console.log(anagrams('abc'));
module.exports = anagrams;
