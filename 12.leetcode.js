// https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof/

// 解题思路：
// 1. 使用二分法
// 2. 如果中间的数字等于对应的数字说明缺失的数字在右边

// 时间复杂度O(logn)

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let l = 0,
    h = nums.length - 1,
    c,
    m;

  while (l <= h) {
    m = ((l + h) / 2) | 0;
    c = nums[m];
    if (m === c) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }

  return l;
};
