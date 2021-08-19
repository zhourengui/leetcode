// https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/submissions/
// 解题思路：
// 1. 遍历，但是不能在原来的字符串中直接操作，因为字符串是线性结构
// 时间复杂度：O(n), 空间复杂度O(1)
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  let r = "",
    l = s.length,
    p = 0,
    c;

  while (p < l) {
    c = s[p];
    if (c === " ") {
      r += "%20";
    } else {
      r += c;
    }
    p++;
  }

  return r;
};
