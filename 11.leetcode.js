// https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof/ß

// 1. 遍历字符串，遇到0跳过
// 2. 找到一个最大值(max)，一个最小值(min)，在遍历过程中遇到出现过的数字返回false，使用set记录出现过的数字
// 3. 如果最大值和最小值的差值>=数组的长度返回true
// 时间复杂度：O(n)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  let min,
    max,
    s = new Set(),
    p = 0,
    c,
    l = nums.length;

  if (nums.length === 0) return true;

  while (p < l) {
    c = nums[p];

    if (s.has(c)) return false;

    if (c !== 0) {
      min = min ? Math.min(min, c) : c;
      max = max ? Math.max(max, c) : c;
      s.add(c);
    }
    p++;
  }

  return max - min <= l - 1;
};

console.log(isStraight([0, 0, 1, 2, 4]));
console.log(isStraight([0, 0, 4, 3, 2, 1]));
console.log(isStraight([]));
console.log(isStraight([1, 2, 4, 5, 6]));
console.log(isStraight([1, 2, 3, 4, 4, 5, 6]));

// 解法二：
// 1. 对数组进行排序
