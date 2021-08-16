// https://leetcode-cn.com/problems/valid-number/
// 解题思路：
// 1. 可以根据有效数字画个图
// 2. 遍历字符串如果在有效的状态返回true
// 3. 思想有点像有限状态机
// 时间复杂度：O(n)
// 空间复杂度：O(n)

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  const graph = {
    0: { black: 0, sign: 1, dot: 2, number: 6 },
    1: { number: 6, dot: 2 },
    2: { number: 3 },
    3: { e: 4, number: 3 },
    4: { sign: 7, number: 5 },
    5: { number: 5 },
    6: { number: 6, dot: 3, e: 4 },
    7: { number: 5 },
  };

  const map = new Map([
    [".", "dot"],
    ["e", "e"],
    ["E", "e"],
    ["+", "sign"],
    ["-", "sign"],
    ["0", "number"],
    ["1", "number"],
    ["2", "number"],
    ["3", "number"],
    ["4", "number"],
    ["5", "number"],
    ["6", "number"],
    ["7", "number"],
    ["8", "number"],
    ["9", "number"],
  ]);

  let p = 0,
    l = s.length,
    state = 0,
    c;

  while (p < l) {
    c = s[p];
    state = graph[state][map.get(c)];
    if (!state) return false;
    p++;
  }

  if (state === 3 || state === 5 || state === 6) return true;

  return false;
};
