// https://leetcode-cn.com/problems/intersection-of-two-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set1 = new Set(),
    res = [];

  for (let i = 0; i < nums1.length; i++) {
    set1.add(nums1[i]);
  }

  for (let i = 0; i < nums2.length; i++) {
    if (set1.has(nums2[i])) {
      res.push(nums2[i]);
    }
  }

  return [...new Set(res)];
};
