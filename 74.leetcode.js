// https://leetcode-cn.com/problems/SsGoHC/

// 解题思路：
// 1. 排序，根据第一个元素排序
// 2. 使用临时变量记录，如果遍历的当前元素的第一位大于临时变量的第二位，说明区间没有重合
// 3. 相反就是有重合，第一位取两个的最小值，第二位取两个的最大值

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let len = intervals.length;
  let res = [];
  let temp = intervals[0];

  if (len === 0) return res;

  for (let i = 1; i < len; i++) {
    const current = intervals[i];
    if (current[0] > temp[1]) {
      res.push(temp);
      temp = current;
    } else {
      temp = [Math.min(temp[0], current[0]), Math.max(temp[1], current[1])];
    }
  }

  res.push(temp);

  return res;
};
