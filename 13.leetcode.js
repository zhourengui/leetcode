// https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/
// 解题思路：
// 1. 定义两个指针p1、p2
// 2. 移动p2指针，如果当前字符串在set中没有，说明没有重复，计算最大长度的字符串
// 3. 移动p2指针的时候，如果当前的字符串set中存在，说明字符串重复了，移动p1指针，直到字符串没有出现重复为止

// 时间复杂度：O(n)
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let p1 = 0,
    p2 = 0,
    l = s.length,
    m = 0,
    set = new Set(),
    c1,
    c2;

  while (p2 < l) {
    c1 = s[p2];
    if (set.has(c1)) {
      while (p1 < p2) {
        c2 = s[p1];
        if (c2 === c1) {
          p1++;
          break;
        }
        set.delete(c2);
        p1++;
      }
    } else {
      set.add(c1);
      m = Math.max(p2 - p1 + 1, m);
    }
    p2++;
  }

  return m;
};

console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
