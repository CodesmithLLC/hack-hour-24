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
  if (s1.length !== s2.length) {
    return false;
  }
  // for (let i = 0; i < s2.length; i += 1) {
  //   if (s2[i] === s1[0]) {
  //     if (isSubstring(s1, s2.slice(0, i))) {
  //       return (s1 === s2.slice(i, s2.length).concat(s2.slice(0, i)));
  //     }
  //   }
  // }
  const newStr = s1.concat(s1);
  return isSubstring(newStr, s2);
}


console.log(isSubstring('hello', 'hello'));
console.log('hello'.slice(3,5))
console.log(stringRotation("hhhhhellohhhhh", "ellohhhhhhhhhh"));

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
