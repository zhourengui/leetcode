// https://leetcode-cn.com/problems/intersection-of-two-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set1 = new Set(),
    set2 = new Set();

  for (const item of nums1) {
    set1.add(item);
  }

  for (const item of nums2) {
    if (set1.has(item)) {
      set2.add(item);
    }
  }

  return [...set2];
};
