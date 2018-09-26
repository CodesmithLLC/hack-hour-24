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
  s2 = s2.repeat(2);
  return isSubstring(s2, s1);
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};

// console.log('---TESTING stringRotation---');
// console.log(`stringRotation('hello', 'hello'): expect -> true: actual -> ${stringRotation('hello', 'hello')}`);
// console.log(`stringRotation('hello', 'llohe'): expect -> true: actual -> ${stringRotation('hello', 'llohe')}`);
// console.log(`stringRotation('hello', 'he'): expect -> false: actual -> ${stringRotation('hello', 'he')}`);
// console.log(`stringRotation('hello', 'ollhe'): expect -> false: actual -> ${stringRotation('hello', 'ollhe')}`);
