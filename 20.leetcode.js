// https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/

// 时间复杂度：O(n), 空间复杂度O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let p1 = 0,
    p2 = nums.length - 1,
    c,
    tmp;

  while (p1 < p2) {
    c = nums[p1];
    if (c % 2 === 0) {
      while (p1 < p2) {
        tmp = nums[p2];
        if (tmp % 2 === 0) {
          p2--;
        } else {
          break;
        }
      }
      tmp = nums[p2];
      nums[p2] = nums[p1];
      nums[p1] = tmp;
    }
    p1++;
  }

  return nums;
};
