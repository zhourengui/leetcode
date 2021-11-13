// https://leetcode-cn.com/problems/subsets/

// 解题思路：
// 1. 使用递归，传入路径path，当前path有多少个元素（传入的数组有几位就遍历多少次）
// 2. 需要保证后面添加的数字在前一个数字的后面那些中寻找

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [];

  const rec = (path, l, s) => {
    if (l === path.length) {
      res.push(path);
      return;
    }

    for (let i = s; i < nums.length; i++) {
      rec([...path, nums[i]], l, i + 1);
    }
  };

  for (let i = 0; i <= nums.length; i++) {
    rec([], i, 0);
  }

  return res;
};
