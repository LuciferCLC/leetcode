/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  const n = prices.length
  let [sell, buy] = [0, -prices[0]]
  for (let i = 1; i < n; i++) {
    [sell, buy] = [Math.max(sell, buy + prices[i] - fee), Math.max(buy, sell - prices[i])]
  }
  return sell
}

const prices = [1, 3, 5, 8, 4, 10, 11]
const fee = 2
console.log(maxProfit(prices, fee))
