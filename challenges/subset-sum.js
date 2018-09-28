/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function combination(chars) {
    var result = [];
    var f = function(initial, chars) {
      for (var i = 0; i < chars.length; i++) {
        result.push(initial + chars[i]);
        f(initial + chars[i], chars.slice(i + 1));
      }
    }
    f(0, chars);
    return result;
  }
  
  
  console.log(combination([1, 2, 3]))
  function subsetSum(array, target){
    return combination(array).includes(target);
  }
  console.log(subsetSum([1,2,3],7))

// module.exports = subsetSum;
