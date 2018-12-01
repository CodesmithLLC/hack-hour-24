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
  // need a storage for the values to find Max
  const endValues = [];

  // need to recurse through the items to find the Max Values given the weight
  function weighter(remainingItems, weightAvailable, currVal = 0) {
    // base case
    if (remainingWeight >= weightAvailable || remainingItems.length <= 1) {
      return;
    }
    console.log('remaining items ==========> ', remainingItems, 
    '\nweight available ==========> ', weightAvailable,
    '\ncurrent value ==========> ', currVal,
    '\n---------------------------------------------------------------------------------')
    // pushes the current value
    endValues.push(currVal);
    // recurse the function
    return (weighter(remainingItems.slice(1), weightAvailable - remainingItems[0].weight, currVal + remainingItems[0].value)) || (weighter(remainingItems.slice(1), remainingWeight, currVal))
  }

  // (weighter(remainingItems.slice(1), remainingWeight + remainingItems[0].weight, currVal + remainingItems[0].value)) || 
  // || (weighter(remainingItems.slice(1), remainingWeight, currVal))
  weighter(items, weightAvailable);
  console.log(endValues);

  return Math.max(...endValues);
};

console.log(solveKnapsack([{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}], 5))
module.exports = solveKnapsack;
