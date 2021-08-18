// https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/submissions/
// 解题思路：
// 1. 由于数组原先是有序的，虽然进行移位后认为还是有序的，所以考虑使用二分法
// 2. 如果中间位置的值大于最后的那项，说明最小值在右边
// 3. 如果中间位置的值小于最后的那项，说明最小值在左边
// 4. 等于的情况下，往左走一步
// 时间复杂度：O(n)

/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let n = numbers.length,
    l = 0,
    h = n - 1,
    c,
    m;

  if (numbers.length === 1) return numbers[0];

  while (true) {
    m = ((l + h) / 2) | 0;
    c = numbers[m];

    if (c > numbers[h]) {
      l = m;
    } else if (c < numbers[h]) {
      h = m;
    } else {
      h -= 1;
    }

    if (h - l === 1 || h === l) {
      break;
    }
  }
  return Math.min(numbers[l], numbers[h]);
};
