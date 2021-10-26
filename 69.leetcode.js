// https://leetcode-cn.com/problems/minimum-operations-to-reduce-x-to-zero/

// 解题思路：
// 1. 反向思维，题目是说从两边依次剔除，我们可以使用nums的总数减去x得出一个差值
// 2. 如果说这个差值小于0说明根本找不到元素刚好相同的
// 3. 使用两个指针p1、p2都指向数组的开头
// 4. 如果说这个差值大于0，我们使用p2指针从左边开始遍历，p2指针左边所有元素相加，如果加到大于差值的地方就停止了，然后遍历p1, 用刚刚相加的数依次减去p1指针对应的值，如果在某个过程中差值和计算的值相等，计算Math.max(p2 - p1 + 1, max)
// 时间复杂度：O(n)

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  let p1 = 0;
  let p2 = 0;
  let diff = nums.reduce((prev, next) => prev + next, 0) - x;
  let sum = 0;
  let len = nums.length;
  let max = -1;

  if (diff < 0) return -1;

  while (p2 < len) {
    sum += nums[p2];

    while (sum > diff) {
      sum -= nums[p1];
      p1++;
    }

    if (sum === diff) {
      max = Math.max(max, p2 - p1 + 1);
    }
    p2++;
  }

  return max === -1 ? max : len - max;
};
