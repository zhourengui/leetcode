// https://leetcode-cn.com/problems/house-robber/

// 解题思路：
// 动态规划思想
// 1. 从第三项开始，每一项加上第前n-2项和n-1项比较，每一项都是在这之前的最大金额

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let f0 = nums[0],
    f1 = nums[1],
    p = 2,
    l = nums.length;

  if (l === 0) return 0;

  if (l === 1) return f0;

  f1 = Math.max(f0, f1);

  while (p < l) {
    tmp = Math.max(nums[p] + f0, f1);
    f0 = f1;
    f1 = tmp;
    console.log(f0, f1);
    p++;
  }

  return f1;
};
