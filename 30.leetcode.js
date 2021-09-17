// https://leetcode-cn.com/problems/ba-zi-fu-chuan-zhuan-huan-cheng-zheng-shu-lcof/

// 解题思路：
// 1. 使用双指针，p1指针先找到第一个能成为数字的+/-/0-9，如果遇到字符串直接返回0，如果遍历结束后p1等于str的长度，说明没有找到有效的字符，返回0
// 2. 赋值p2等于p1，移动p2指针，找到非数字的位置的上一个索引即可，遍历结束后，如果p2等于p1说明只有一个有效的字符，如果为数字返回数字就行，否则返回0
// 3. 截取字符串

// 时间复杂度：O(n)

/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function (str) {
  let l = str.length,
    p1 = 0,
    p2 = 0,
    isN = false,
    isS = false,
    c = null,
    res = 0;

  while (p1 < l) {
    c = str[p1];
    isN = /[0-9]{1}/.test(c);
    isS = c === "-" || c === "+";

    if (isN || isS) break;

    if (c === " ") p1++;

    if (!isN && !isS && c !== " ") return res;
  }

  if (l === p1) return res; // 输入一个空格

  p2 = p1;

  while (p2 < l) {
    p2++;
    c = str[p2];
    isN = /[0-9]{1}/.test(c);
    if (!isN) {
      p2--;
      break;
    }
  }

  if (p2 === p1 && (str[p1] === "-" || str[p1] === "+")) return res;

  res = Number(str.substring(p1, p2 + 1));

  if (res < -(2 ** 31)) return -(2 ** 31);

  if (res > 2 ** 31 - 1) return 2 ** 31 - 1;

  return res;
};
