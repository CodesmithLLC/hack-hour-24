/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {

  if (str.length===0||str.length===1) {return true}
	// for(let i = 0; i < str.length+1; i += 1){
  //   for(let j=i+2;j<str.length+1;j++){
  //     // console.log(i,j)
  //     newStr = str.slice(i,j)
  //     // console.log(newStr)
  //         if(isPa(newStr)){return true}
  //       }
  //   }
  str = str.toLowerCase().replace(' ', '');
  const store = [];
  for (let i = 0; i < str.length; i += 1) {
    // console.log(str[i],store[store.length-1])
    if (i === 0) store.push(str[i]);
    else if (str[i] === store[store.length - 1] || str[i] === store[store.length - 2]) {
      return true;
    } else (store.push(str[i]));
  }
  return false;
}

// function isPa(str) {
//   str = str.replace(' ', '');
//   if (str.replace(' ','').split('').reverse().join('')===str) return true;
//   return false;
// }
// console.log(permPalin('abdedbaci'))
module.exports = permPalin;