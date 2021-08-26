// https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/
// 解题思路：
// 1. 创建一个网格(g)，记录走过的路径，遍历过程中已经走过的路径不重复走
// 2. 从每一步的上下左右四个格子进行遍历，如果格子符合在网格中，并且没有走过的路径，进行判断位和，如果位和小于等于k才递归，否则不递归
// 时间复杂度：O(m*n)，空间复杂度O(m * n)

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  if (m === 0 || n === 0) return 0;

  let g = Array.from({ length: n }, () =>
      Array.from({ length: m }).fill(false)
    ),
    c = 1,
    sum = ([x, y]) => {
      let s = 0;
      while (x > 0 || y > 0) {
        if (x > 0) {
          s += x % 10;
        }
        if (y > 0) {
          s += y % 10;
        }
        x = Math.floor(x / 10);
        y = Math.floor(y / 10);
      }

      return s;
    };

  g[0][0] = true;

  const rec = (x, y) => {
    [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ].forEach(([cx, cy]) => {
      if (cx >= 0 && cy >= 0 && cx < n && cy < m && !g[cx][cy]) {
        g[cx][cy] = true;
        if (sum([cx, cy]) <= k) {
          c++;
          rec(cx, cy);
        }
      }
    });
  };

  rec(0, 0);

  return c;
};

console.log(movingCount(5, 4, 0));
