// https://leetcode-cn.com/problems/happy-number/
// 解题思路：
// 1. 如果数字小于10，并且不是1或者7返回false
// 2. 如果数字大于10就正常计算，数字肯定会回到个位数，如果数字是10的倍数也是快乐数

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  while (true) {
    if (n === 1 || n === 7) return true;
    if (n < 10) return false;
    const tmp = String(n);
    n = 0;
    for (const m of tmp) {
      n += m ** 2;
    }
  }
};
