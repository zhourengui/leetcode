// https://leetcode-cn.com/problems/SsGoHC/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] > b[0]);

  console.log(intervals);
};

merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]);
