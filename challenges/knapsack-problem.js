/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

const solveKnapsack = (items, weightAvailable) => {
  // Sort items by weight/value ratio
  items.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));

  // Helper function for recursive calls
  const innerKnapsack = (sortedItems, innerWeightAvailable, value = 0) => {
    // If no weight available or no items left to add, return value
    if (!innerWeightAvailable || !sortedItems.length) return value;

    // Remove first item from sortedItems
    const currItem = sortedItems[0];
    const newSortedItems = sortedItems.slice(1);

    // Case 1: Skip over item
    const skipItem = innerKnapsack(newSortedItems, innerWeightAvailable, value);

    // If first item doesn't fit in knapsack, return Case 1
    if (currItem.weight > innerWeightAvailable) {
      return skipItem;
    }

    // Case 2: Add item
    const newWeightAvailable = innerWeightAvailable - currItem.weight;
    const newValue = value + currItem.value;
    const addItem = innerKnapsack(newSortedItems, newWeightAvailable, newValue);

    // Return the max of the two cases
    return Math.max(skipItem, addItem);
  };

  return innerKnapsack(items, weightAvailable);
};

module.exports = solveKnapsack;

// console.log('-- Testing solveKnapsack --');
// const items = [{ weight: 1, value: 3 }, { weight: 2, value: 4 }, { weight: 3, value: 5 }];
// console.log(`solveKnapsack(items, 3): expect -> 7: actual -> ${solveKnapsack(items, 3)}`);
// console.log(`solveKnapsack(items, 5): expect -> 9: actual -> ${solveKnapsack(items, 5)}`);
