/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
  let index = 0;
  let result = [[1]];
  if(numRows === 1) return result;
  else{
    index +=1;
    while(index < numRows) {
      let row = [];
      let i = 0;
      while(i < index+1) {
        if(i === 0 || i === index){
          row[i] = 1;
        } else{
          row[i] = result[index-1][i] + result[index-1][i-1];
        }
        i++;
      }
      result.push(row);
      index++;
    }
  }
  return result;
}
console.log(pascalTriangle(6));

module.exports = pascalTriangle;
