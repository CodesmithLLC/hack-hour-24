/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  if (s1.length != s2.length)
    return false;

  // s1: i(= 0), s2: j(= 0)
  // find the first match. check thereafter to the end, if not reach the end, start from next position of s2
  for (let j = 0; j < s2.length; j++) {
    // find first-char match
    if (s2.charAt(j) !== s1.charAt(0)) {
      continue;
    }
    // start matching: compare s1: i(= 0) with s2: k(= j)
    let i = 0;
    let k = j;
    while (k < s2.length) {
      // fail to complete match -> exit inner loop -> restore s1: i to 0, increase j;
      if (s2.charAt(k++) !== s1.charAt(i++)) {
        break;
      }
      // if does get matched to the very end of s2...
      if (k === s2.length) {
        // do substring check
        return isSubstring(s1, s2.slice(0, j));
      }
    }
  }
  return false;
}
console.log(stringRotation("hhhellohhh", "lohhhhhhel"));
console.log(stringRotation("hhhellohhh", "lohhhrhhel"));
console.log(stringRotation("hello", "hello"));
console.log(stringRotation("hello", "llohe"));
module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
