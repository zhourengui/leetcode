// https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/

// 解题思路：
// 1. 因为数组是有序的所以考虑二分
// 2. 首先找到左边第一个，使用二分，如果中间的数小于target，说明元素在后边，如果大于或等于的时候，记录当前的索引让high = mid - 1
// 3. 然后找到最右边靠近target的第一个元素

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const search = (low, high, arr, lower, ret = arr.length) => {
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if ((lower && arr[mid] >= target) || arr[mid] > target) {
        ret = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return ret;
  };
  const left = search(0, nums.length - 1, nums, true);
  const right = search(0, nums.length - 1, nums, false);

  if (nums[left] === target && nums[right - 1] === target) {
    return [left, right - 1];
  }

  return [-1, -1];
};
