// https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/

// 解题思路
// 1. 使用二分法
// 2. 如果中间位置元素大于末尾元素，说明最小值在右边，让low = mid + 1即可
// 3. 如果中间位置元素小于末尾元素，说明最小值在左边，让high = mid即可
// 4. 如果相等，让high = high - 1即可

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] < nums[high]) {
      high = mid;
    } else if (nums[mid] > nums[high]) {
      low = mid + 1;
    } else {
      high--;
    }
  }

  return nums[low];
};
