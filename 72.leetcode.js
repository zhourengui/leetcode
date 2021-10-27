// https://leetcode-cn.com/problems/TVdhkn/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [];

  const rec = (path, start, len) => {
    if (path.length === len) {
      return res.push(path);
    }
    for (let i = start; i < nums.length; i++) {
      rec([...path, nums[i]], i + 1, len);
    }
  };

  for (let i = 0; i <= nums.length; i++) {
    rec([], 0, i);
  }

  return res;
};
