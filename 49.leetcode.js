// https://leetcode-cn.com/problems/assign-cookies/

// 解题思路：
// 1. 贪心算法
// 2. 先从胃口小的分配起

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let p1 = 0,
    p2 = 0,
    count = 0,
    han = (a, b) => a - b;

  g.sort(han);
  s.sort(han);

  while (p1 < s.length && p2 < g.length) {
    if (s[p1] >= g[p2]) {
      count++;
      p2++;
      p1++;
    } else {
      p1++;
    }
  }

  return count;
};
