// https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/

// 解法一：
// 解题思路：
// 1. 摩尔投票法
// 2. 定义当前数字r、次数t
// 3. 如果t等于0，t+1，r等于当前
// 4. 如果t不等于零并且r等于当前，t+1
// 5. 如果t不等于零并且r不等于当前，t-1
// 时间复杂度：O(n)，空间复杂度：O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let t = 0,
    r,
    p = 0,
    l = nums.length,
    c;

  while (p < l) {
    c = nums[p];
    if (t === 0) {
      r = c;
      t++;
    } else {
      if (r === c) {
        t++;
      } else {
        t--;
      }
    }
    p++;
  }

  return r;
};

// 解法二：
// 解题思路：
// 1. 定义map，记录每一个数字出现的次数，当发现某个数字超过了数组的一半的时候退出即可
// 时间复杂度：O(n)，空间复杂度：O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let p = 0,
    m = new Map(),
    l = nums.length,
    c,
    t = 0;

  while (p < l) {
    c = nums[p];
    t = (m.get(c) || 0) + 1;
    if (t > ((l / 2) | 0)) {
      return c;
    } else {
      m.set(c, t);
    }
    p++;
  }
};
