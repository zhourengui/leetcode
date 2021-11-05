// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
// 解题思路：
// 1. 双指针
// 2. 使用Map记录一个元素的位置
// 3. 如果遇到相同的就让p1移动到非相同字符串的位置
// 4. 每次遍历都去计算长度

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let p1 = 0;
  let p2 = 0;
  let len = s.length;
  let map = new Map();
  let max = 0;

  while (p2 < len) {
    if (map.has(s[p2]) && map.get(s[p2]) >= p1) {
      p1 = map.get(s[p2]) + 1;
    }
    max = Math.max(max, p2 - p1 + 1);
    map.set(s[p2], p2);
    p2++;
  }

  return max;
};
