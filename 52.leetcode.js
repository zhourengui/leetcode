// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/

// 解题思路：
// 1. 原地删除重复，重点在原地
// 2. 不能导致数组元素的频繁移动，也不能创建一个数组来存储

// 时间复杂度：O(n)，空间复杂必须是O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 1,
    len = nums.length,
    p1 = 0,
    p2 = 1,
    p3 = 1;

  if (len === 0) return 0;
  if (len === 1) return 1;

  while (p2 < len) {
    if (nums[p1] !== nums[p2]) {
      count++;
      nums[p3] = nums[p2];
      p3++;
      p1 = p2;
      p2++;
      continue;
    }
    p2++;
  }

  while (p3 < len) {
    nums[p3] = undefined;
    p3++;
  }

  return count;
};
