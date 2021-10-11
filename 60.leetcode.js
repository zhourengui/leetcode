// https://leetcode-cn.com/problems/rotate-array/
// 解题思路：
// 1. 先翻转全部元素
// 2. 然后反转[0, k]元素
// 3. 然后反转[k, len]元素

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const len = nums.length;
  const count = k % len;

  const reverse = (start, end) => {
    if (start > end) return;
    [nums[start], nums[end]] = [nums[end], nums[start]];
    reverse(start + 1, end - 1);
  };

  reverse(0, len - 1);
  reverse(0, (count % len) - 1);
  reverse(count, len - 1);

  return nums;
};
