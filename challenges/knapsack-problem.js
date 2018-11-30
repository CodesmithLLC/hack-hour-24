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


  function knapSack(W, wtArr, valArr, n) {
    const Knap = new Array(100).fill([]).map(() => new Array(100).fill([]));

    for (let i = 0; i <= n; i += 1) {
      for (let w = 0; w <= W; w += 1) {
        if (i === 0 || w === 0) {
          Knap[i][w] = 0;
        } else if (wtArr[i - 1] <= w) {
          Knap[i][w] = Math.max(valArr[i - 1] + Knap[i - 1][w - wtArr[i - 1]], Knap[i - 1][w]);
        } else {
          Knap[i][w] = Knap[i - 1][w];
        }
      }
    }

    return Knap[n][W];
  }
  const ar1 = items.map(i => i.weight);
  const ar2 = items.map(i => i.value);
  return knapSack(weightAvailable, ar1, ar2, items.length);
}


// console.log(solveKnapsack([{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}], 3));

module.exports = solveKnapsack;
