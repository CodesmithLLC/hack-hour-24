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
  // If strings are different lengths, cannot be true.
  if (s1.length !== s2.length) {
    return false;
  }

  // Get all possible rotations.
  const rotations = [];

  // First loop gets starting point of rotation.
  for (let i = 0; i < s1.length; i += 1) {
    let rotation = '';
    // Second loop creates rotation.
    for (let j = i; j < s1.length + i; j += 1) {
      rotation += s1[j % s1.length];
    }
    rotations.push(rotation);
  }
  console.log(rotations);
  return rotations.includes(s2);

  // Brute force solution bad. Better solution from Joel.
  // return isSubstring(s1.concat(s1), s2);
}

console.log(stringRotation('hello', 'llohe'));
module.exports = { isSubstring, stringRotation };
