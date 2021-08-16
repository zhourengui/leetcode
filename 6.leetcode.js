// https://leetcode-cn.com/problems/permutations/
// 解题思路：
// 1. 回溯法
// 时间复杂度：O(n*n!), 空间复杂度：O(n) n是传入字符串的长度

/**
 * @param {string} s
 * @return {string[]}
 */
var permute = function (s) {
  let r = [];
  const backtrack = (t) => {
    if (t.length === s.length) {
      return r.push(t);
    }
    for (const i of s) {
      if (t.indexOf(i) === -1) {
        backtrack(t + i);
      }
    }
  };
  backtrack("");
  return r;
};
