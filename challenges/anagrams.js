/**
 * Given a single input string, c. At first, don't worry about
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
  
  function inner(first, rest) {
    if (rest.length === 1) {
      return [first + rest];
    }
    const results = [];
    // console.log('r:', rest)
    for (let i = 0; i < rest.length; i += 1) {
      //      '', a b c 
      // 
      const anagram = inner(rest[i], rest.substr(0, i) + rest.substr(i + 1));
      // console.log(rest[i],'kevin', rest.substr(0, i) ,'hi')
      // console.log(anagram)
      for (let j = 0; j < anagram.length; j += 1) {
        // console.log(j, anagram[j])
        results.push(first + anagram[j]);
      }
    }
    // if(results.length === 0) return '';
    return results;
  }

  return inner('', string);
}
console.log(anagrams(''));


module.exports = anagrams;
