// https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/
// f(n) = f(n - 1) + f(n + 2)

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
