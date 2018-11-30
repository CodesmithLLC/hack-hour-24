/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable) {
  let max = -Infinity;
  function findMaxValue(index, weightLeft, value) {
    let newVal = value;

    if (weightLeft < 0) {
      newVal -= items[index - 1].value;
      return;
    }
    if (index === items.length || weightLeft === 0) {
      if (newVal > max) {
        max = value;
      }
      return;
    }

    findMaxValue(index + 1, weightLeft - items[index].weight, newVal + items[index].value);
    findMaxValue(index + 1, weightLeft, value);
  }

  findMaxValue(0, weightAvailable, 0);

  return max;
}

const items = [{ weight: 1, value: 3 }, { weight: 2, value: 4 }, { weight: 3, value: 5 }];
solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])

console.log(solveKnapsack(items, 3));
console.log(solveKnapsack(items, 5));

module.exports = solveKnapsack;
