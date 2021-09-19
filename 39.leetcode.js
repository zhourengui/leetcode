// https://leetcode-cn.com/problems/pacific-atlantic-water-flow/
// 解题思路：
// 1. 创建两个相同的矩阵，初始化都为false
// 2. 从太平洋和大西洋两边开始遍历，如果都能走到的地方代表符合要求

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  if (!heights || !heights[0]) return [];

  const c = heights.length,
    r = heights[0].length;
  const marix1 = Array.from({ length: c }, () =>
    Array.from({ length: r }).fill(false)
  );
  const marix2 = Array.from({ length: c }, () =>
    Array.from({ length: r }).fill(false)
  );
  const res = [];

  const dfs = (x, y, marix) => {
    marix[x][y] = true;
    [
      [x - 1, y],
      [x, y + 1],
      [x, y - 1],
      [x + 1, y],
    ].forEach(([cx, cy]) => {
      if (
        cx >= 0 &&
        cx < c &&
        cy >= 0 &&
        cy < r &&
        !marix[cx][cy] &&
        heights[x][y] <= heights[cx][cy]
      ) {
        dfs(cx, cy, marix);
      }
    });
  };

  for (let x = 0; x < c; x++) {
    dfs(x, 0, marix1);
    dfs(x, r - 1, marix2);
  }

  for (let y = 0; y < r; y++) {
    dfs(0, y, marix1);
    dfs(c - 1, y, marix2);
  }

  for (let x = 0; x < c; x++) {
    for (let y = 0; y < r; y++) {
      if (marix1[x][y] && marix2[x][y]) {
        res.push([x, y]);
      }
    }
  }

  return res;
};
