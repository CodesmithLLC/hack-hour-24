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
    if (!Array.isArray(stock_prices_yesterday) || stock_prices_yesterday.length === 0)
        return 0;

    let res = stock_prices_yesterday.reduce((res, price) => {
        if (price < res.minPrice)
            res.minPrice = price;
        let currentProfit = price - res.minPrice;
        if (currentProfit > res.maxProfit)
            res.maxProfit = currentProfit;
        return res;
    }, { minPrice: Number.POSITIVE_INFINITY, maxProfit: 0 });

    return res.maxProfit;
}

let stock_prices_yesterday = [10, 20, 30, 5, 10];
console.log(bestProfit(stock_prices_yesterday));
stock_prices_yesterday = [10, 12, 5, 8];
console.log(bestProfit(stock_prices_yesterday));
stock_prices_yesterday = [10, 7, 5, 3];
console.log(bestProfit(stock_prices_yesterday));
module.exports = bestProfit;
