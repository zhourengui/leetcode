// https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/

// 解法一：
// 解题思路：
// 1. 使用某个数字做位运算，然后往左移或者往右移
// 时间复杂度：O(32)
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let c = 0;
  while (n) {
    if ((n & 1) === 1) {
      c++;
    }
    n = n >> 1;
  }

  return c;
};

// 解法二：
// 解题思路：
// 1. n = n & n - 1，当n等于0的时候退出
// 时间复杂度：O(32)
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let c = 0;
  while (n) {
    n &= n - 1;
    c++;
  }
  return c;
};
