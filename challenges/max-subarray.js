/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */


function maxSubarray(arr) {
  let greatestSum;
  // loop through a starting index
  for (let i = 0; i < arr.length; i += 1) {
    // for each starting index loop thru each possible ending index, creating a subarray using slice
    for (let j = i + 1; j <= arr.length; j += 1) {
      // for each subarray find total
      let subArr = arr.slice(i, j);
      let subTotal = 0;
      for (let k = 0; k < subArr.length; k += 1) {
        subTotal += subArr[k]
      }
      // if there is no greatestSum OR if total is greater than greatest sum...
      if (!greatestSum || subTotal > greatestSum) {
        // ...update greatestSum and resultSubArr
        greatestSum = subTotal;
      }
    }
  }
  return greatestSum;
}

module.exports = maxSubarray;
