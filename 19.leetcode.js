// https://leetcode-cn.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let m = new Map(),
    p = 0,
    l = nums.length,
    c,
    r;

  while (p < l) {
    c = nums[p];
    r = m.get(target - c);
    if (r || r === 0) {
      return [p, r];
    }
    m.set(c, p);
    p++;
  }

  return [];
};
