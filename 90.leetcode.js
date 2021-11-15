// https://leetcode-cn.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0];
  let sum = 0;
  for (const num of nums) {
    if (sum < 0) {
      sum = num;
    } else {
      sum += num;
    }
    max = Math.max(sum, max);
  }
  return max;
};
