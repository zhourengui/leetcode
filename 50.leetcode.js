// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/

// 解题思路：
// 1. 贪心算法
// 2. 比较当前是否大于前一个值，如果符合就加上他们的差值

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let p1 = 0,
    p2 = 1,
    c1 = 0,
    c2 = 0,
    sum = 0,
    len = prices.length;

  if (prices.length === 1) return 0;

  while (p2 < len) {
    c1 = prices[p1];
    c2 = prices[p2];
    if (c1 < c2) {
      sum += c2 - c1;
    }
    p1++;
    p2++;
  }

  return sum;
};
