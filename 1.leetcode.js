// https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
// 解题思路，从左下角的点开始，如果值大于目标值往上找，否则往右找
// 边界：
// 1. (0,0)大于目标值和(matrix.length-1, matrix[0].length-1)小于目标值都是false
// 2. 列在往上走，所以列要大于0
// 3. 行在往右走，所以要小于matrix[0].length

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  if (
    !matrix.length ||
    matrix[0][0] > target ||
    matrix[matrix.length - 1][matrix[matrix.length - 1].length - 1] < target
  ) {
    return false;
  }

  let cl = matrix.length,
    rl = matrix[0].length,
    c = cl - 1,
    r = 0;

  while (c >= 0 && r < rl) {
    if (matrix[c][r] > target) {
      c--;
    } else if (matrix[c][r] < target) {
      r++;
    } else {
      return true;
    }
  }

  return false;
};
