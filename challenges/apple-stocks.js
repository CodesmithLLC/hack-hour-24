/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit(stock_prices_yesterday) {
  // Edge case - Argument is not an array
  if (!Array.isArray(stock_prices_yesterday)) return 0;
  // Edge case - Argument has no length
  if (!stock_prices_yesterday.length) return 0;
  // Set the opening price to min and max, profit to 0
  let min = stock_prices_yesterday[0];
  let max = stock_prices_yesterday[0];
  let profit = 0;
  // Loop through array, detecting a new min and max and calculating new profit
  for (let i = 1; i < stock_prices_yesterday.length; i += 1) {
    if (stock_prices_yesterday[i] < min) {
      // Case 1 - Stock went down, check if it went below min - reset min and max
      min = stock_prices_yesterday[i];
      max = stock_prices_yesterday[i];
    } else if (stock_prices_yesterday[i] > max) {
      // Case 2 - Stock went up and set new high - reset max
      max = stock_prices_yesterday[i];
    }
    // Recalculate profit if higher than current profit
    profit = Math.max(profit, max - min);
  }
  // Return final profit
  return profit;
}

module.exports = bestProfit;

// console.log('TESTING bestProfit');
// console.log(`bestProfit('hi'): expect -> 0: actual -> ${bestProfit('hi')}`);
// console.log(`bestProfit([0]): expect -> 0: actual -> ${bestProfit([0])}`);
// console.log(`bestProfit([50]): expect -> 0: actual -> ${bestProfit([50])}`);
// console.log(`bestProfit([50, 51]): expect -> 1: actual -> ${bestProfit([50, 51])}`);
// console.log(`bestProfit([50, 49]): expect -> 0: actual -> ${bestProfit([50, 49])}`);
// console.log(`bestProfit([50, 51, 52, 51, 50]): expect -> 2: actual -> ${bestProfit([50, 51, 52, 51, 50])}`);
// console.log(`bestProfit([50, 51, 52, 51, 50, 49, 48, 47]): expect -> 2: actual -> ${bestProfit([50, 51, 52, 51, 50, 49, 48, 47])}`);
// console.log(`bestProfit([50, 51, 52, 51, 50, 49, 48, 47, 48, 49, 50, 51, 52]): expect -> 5: actual -> ${bestProfit([50, 51, 52, 51, 50, 49, 48, 47, 48, 49, 50, 51, 52])}`);
