// https://leetcode-cn.com/problems/climbing-stairs/

// 解题思路：
// 动态规划思想
// 1. f(1) = 1
// 2. f(2) = 2
// 3. f(3) = 3
// 4. f(4) = 5
// 5. f(n) = (n - 1) + f(n - 1)

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let f0 = 1,
    f1 = 2,
    tmp = 0,
    p = 3;

  if (n === 1) return f0;

  if (n === 2) return f1;

  while (p <= n) {
    tmp = f0 + f1;
    f0 = f1;
    f1 = tmp;
    p++;
  }

  return f1;
};
