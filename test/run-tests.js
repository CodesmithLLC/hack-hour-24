var chai = require('chai');  
var expect = chai.expect;    
const mergeArrays = require('../challenges/merge-array.js');

describe('mergeArrays', () => {

  it('takes two sorted arrays and merges into one sorted array', () => {
    const testArr1 = [1, 3, 5, 7, 9];
    const testArr2 = [2, 4, 6, 8, 10];
    const resultArr = mergeArrays(testArr1, testArr2);
    const mergedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(resultArr).to.equal(mergedArr);
  });

  it('properly merges arrays of different lengths', () => {
    const testArr3 = [1, 3, 99];
    const testArr4 = [2, 5, 9, 20, 33];
    const resultArr2 = mergeArrays(testArr3, testArr4);
    const mergedArr2 = [1, 2, 3, 5, 9, 20, 33, 99];
    expect(resultArr2).to.equal(mergedArr2);
  });

});