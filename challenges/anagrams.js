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

function anagrams(str) {
  // const resultArr = [];

  // for (let i = 0; i < string.length; i += 1) {
  //   const miniArr = [string[i]];
  //   function recurder(arr) {
  //     if (arr.length === 0) return;
  //     resultArr.push(arr.shift());
  //     return recurder(arr);
  //   }
  //   recurder(string);
  // }


  // time complexity: terrible
  var shrink = str.split('');
	var grow = [];
	var all = [];

	// recursive function that gives all permutations in 'all' variable
	function repet(shrink, grow) {
		// base case
		if (shrink.length === 0) {
			all.push(grow);
			return;
		}
		// loop that creates new shrink and grow arrays and adjusts arrays
		for (let i=0; i<shrink.length; i++) {
			var nShrink = [...shrink];
			var	nGrow = [...grow];
			nGrow.push(...nShrink.splice(i,1));
			repet(nShrink, nGrow);
		}
		return;
	};

	// runs the recursive function
	repet(shrink, grow);
  return all;
}

console.log(anagrams('abc'));

module.exports = anagrams;
