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
console.log(isSubstring('helloa','hello'))

function stringRotation(s1, s2) {
  // length not same, false
  if (s1.length !== s2.length) return false;
  // split string2 into 2 parts
  // but because we don't know the length of each part, we need a for loop to get all posibilities
  for (let i = 1; i < s2.length; i += 1) { 
    let temp1 = s2.slice(0,i);
    let temp2 = s2.slice(i);
    // if both parts are substrings of string1, return true
    if (isSubstring(s1,temp1)&&isSubstring(s1,temp2)) {
      return true;
    }
  }
  return false;
}
console.log(stringRotation("abcdefg", "fgabcde"))
module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
