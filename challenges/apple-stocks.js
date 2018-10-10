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
  let profit = 0;

  // // Brute force.
  // for (let i = 0; i < stock_prices_yesterday.length; i += 1) {
  //   for (let j = i + 1; j < stock_prices_yesterday.length; j += 1) {
  //     if (stock_prices_yesterday[j] - stock_prices_yesterday[i] > profit) { profit = stock_prices_yesterday[j] - stock_prices_yesterday[i]; }
  //   }
  // }

  let current = 0;
  for (let i = 1; i < stock_prices_yesterday.length; i += 1) {
    if (stock_prices_yesterday[current] > stock_prices_yesterday[i]) {
      while (stock_prices_yesterday[current] > stock_prices_yesterday[i] && current < i) {
        current += 1;
      }
    }

    if (stock_prices_yesterday[i] - stock_prices_yesterday[current] > profit) {
      profit = stock_prices_yesterday[i] - stock_prices_yesterday[current];
    }
  }

  return profit;
}

// const stock_prices_yesterday = [1, 50, 25, 75, 10, 5, 100];
console.log(bestProfit(stock_prices_yesterday));

module.exports = bestProfit;
