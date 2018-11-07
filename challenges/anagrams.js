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
  const stringArr = string.split('');
  const retArr = [];

  function produceAnagrams(currStr, currArr) {
    if (currArr.length === 0) {
      retArr.push(currStr);
      return;
    }

    for (let i = 0; i < currArr.length; i += 1) {
      produceAnagrams(currStr + currArr[i], currArr.filter((v, index) => index !== i));
    }
  }

  produceAnagrams('', stringArr);

  return retArr.filter((v, index, self) => self.indexOf(v) === index);
}

console.log(anagrams('abc'));

module.exports = anagrams;
