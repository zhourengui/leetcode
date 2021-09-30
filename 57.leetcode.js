// https://leetcode-cn.com/problems/sorted-merge-lcci/

// 解决思路：
// 1. 从数组的右边判断起，如果大的放在A数组的最右边，重复这个操作
/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function (A, m, B, n) {
  let p = m + n - 1,
    aCurr = null,
    bCurr = null;

  while (m > 0 || n > 0) {
    aCurr = A[m - 1];
    bCurr = B[n - 1];

    if (n > 0 && m > 0) {
      if (aCurr > bCurr) {
        A[p] = aCurr;
        m--;
      } else {
        A[p] = bCurr;
        n--;
      }
    } else if (n > 0) {
      A[p] = bCurr;
      n--;
    } else {
      break;
    }
    p--;
  }
};
