// https://leetcode-cn.com/problems/find-peak-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  const len = nums.length;

  if (len === 1) return 0;

  let p = 1;

  while (p < len) {
    if (p + 1 < len) {
      if (nums[p] > nums[p + 1] && nums[p] > nums[p - 1]) {
        return p;
      }
    } else {
      if (nums[p] > nums[p - 1]) {
        return p;
      }
    }
    p++;
  }

  return 0;
};
