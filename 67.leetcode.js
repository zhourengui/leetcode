// https://leetcode-cn.com/problems/implement-strstr/

// 解题思路：
// 1. 使用滑动窗口双指针，指针间距是needle的长度
// 2. 移动滑动窗口，窗口内的内容与needle相等就返回p1
// 3. 这种做法的空间复杂度相对较高，substring会在底层创建字符串数组

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let len = haystack.length;
  let p1 = 0;
  let p2 = needle.length;

  if (needle === "") return 0;

  while (p2 <= len) {
    if (needle === haystack.substring(p1, p2)) {
      return p1;
    }
    p1++;
    p2++;
  }

  return -1;
};
