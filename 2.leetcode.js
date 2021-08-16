// https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/
// 解题思路：
// 1.f(n) = f(n - 1) + f(n + 2)
// 时间复杂度：O(n)

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let f0 = 0,
    f1 = 1,
    f2,
    p = 2;

  if (n === 0) return f0;

  while (p <= n) {
    f2 = (f0 + f1) % 1000000007;
    f0 = f1;
    f1 = f2;
    p++;
  }

  return f1;
};
