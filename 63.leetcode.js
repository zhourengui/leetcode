// https://leetcode-cn.com/problems/remove-element/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let p1 = 0;
  let p2 = 0;
  let len = nums.length;

  while (p2 < len) {
    if (nums[p2] !== val) {
      nums[p1] = nums[p2];
      p1++;
    }
    p2++;
  }

  nums.length = p1;

  return p1;
};

console.log(removeElement([2, 3, 2, 5], 3));
