//  https://leetcode-cn.com/problems/sqrtx/

// 解题思路：
// 例子，100的平方根
// 1. 使用二分法
// 2. 使用二分第一次是50，然后算出他的平方，并取整数
// 3. 如果这个整数大于100，说明目标值在左边，如果这个整数小于100，说明目标值在右边

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let low = 0;
  let high = x;

  while (low < high) {
    const mid = (low + high) / 2;
    const square = Math.floor(mid * mid);
    if (square === x) {
      return Math.floor(mid);
    } else if (square > x) {
      high = mid;
    } else {
      low = mid;
    }
  }

  return low;
};
