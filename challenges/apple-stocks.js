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
  // declare maxProfit = 0;
  let maxProfit = 0;
  // set opening value to lowVal
  let lowVal = stock_prices_yesterday[0];
  // iterate thru array
  for (let i = 0; i < stock_prices_yesterday.length; i += 1) {
    // if value decreases below lowVal reset lowVal
    if (stock_prices_yesterday[i] < lowVal) {
      lowVal = stock_prices_yesterday[i];
    }
    // if value increases calculate profit from lowVal, if greater than maxProfit set as new maxProfit
    if (stock_prices_yesterday[i] > lowVal) {
      const currProfit = stock_prices_yesterday[i] - lowVal;
      if (currProfit > maxProfit) {
        maxProfit = currProfit;
      }
    }
  }
  // return maxProfit
  return maxProfit;
}


// test:
// stock_prices_yesterday1 = [100, 80, 150, 50, 140]
// let result = bestProfit(stock_prices_yesterday1);
// console.log('result: ', result);
module.exports = bestProfit;
