// https://leetcode-cn.com/problems/maximum-subarray/

// 解题思路：
// 1. 如果和小于0的时候，让sum等于当前，因为负数的时候加负数会更小，负数加正数的时候会影响后面的大小
// 2. 如果和大雨0的时候就可以继续加了
// 3. 每次处理完sum都进行比较

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
