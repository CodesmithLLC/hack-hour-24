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
  if(items.length === 0) return 0;
  if(weightAvailable <= 0) return 0;
  let runningWeight = 0;
  let runningValue = 0;
  let checkIndex;
  const values = [];
  for(let i = 0; i < items.length; i += 1) {
    checkIndex = i;
    while(runningWeight < weightAvailable && checkIndex < items.length) {
      runningWeight += items[checkIndex].weight;
      if(runningWeight <= weightAvailable) {
        runningValue += items[checkIndex].value;
      }
      checkIndex += 1;
    }
    values.push(runningValue);
    console.log(values);
    runningValue = 0;
    runningWeight = 0;
    checkIndex = 0;
  }
  return Math.max(...values);
};
let items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}, {weight:1, value: 6}];
console.log(solveKnapsack(items, 1));
module.exports = solveKnapsack;
