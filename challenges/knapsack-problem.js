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
  const everyCombination = [];

  function sKRecursive(itemsArr, combination = { weight: 0, value: 0 }) {
    const itemsArrCopy = JSON.parse(JSON.stringify(itemsArr));
    const combinationWithout = JSON.parse(JSON.stringify(combination));
    const combinationWith = JSON.parse(JSON.stringify(combination));

    if (itemsArrCopy.length > 0) {
      const currFirstItem = itemsArrCopy.splice(0, 1)[0];
      combinationWith.weight += currFirstItem.weight;
      combinationWith.value += currFirstItem.value;
      sKRecursive(itemsArrCopy, combinationWithout);
      sKRecursive(itemsArrCopy, combinationWith);
    } else {
      everyCombination.push(combination);
    }
  }

  sKRecursive(items);

  const withinWeight = everyCombination.filter(comb => comb.weight <= weightAvailable);

  return withinWeight.reduce(
    (maxVal, comb) => comb.value > maxVal ? comb.value : maxVal, withinWeight[0].value
  );

}

// items = [
//   { weight: 1, value: 3 },
//   { weight: 2, value: 4 },
//   { weight: 3, value: 5 }
// ];
// console.log(solveKnapsack(items, 5)); // returns 7 (from items[0] and items[1])
// // solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])

module.exports = solveKnapsack;
