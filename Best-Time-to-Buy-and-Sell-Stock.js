/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  let min = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    //prices[i] is min or making me profit
    if (prices[i] < min) min = prices[i];
    else if (profit < prices[i] - min) profit = prices[i] - min;
  }
  return profit;
};
