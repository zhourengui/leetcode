// 给定一个随机数组，类似于[1,3,4,9,19]，数组数量不定，找出最接近平均数的数字

// 解题思路：
// 1. 计算出平均数average
// 2. 对数组进行排序
// 3. 用二分法找到比平均数大（high）比平均数小的两个数（low）
// 4. 如果在二分法的过程中遇到大小与平均数相等的直接返回即可
// 5. 最后如果average-low<high-average的情况返回low，因为low更接近平均数，相反返回high

/**
 * @param {number[]} arr
 * @returns {number}
 */
function findNumberOfTheClosestAverage(arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];

  arr.sort((a, b) => a - b);

  let len = arr.length;
  let low = 0;
  let high = len - 1;
  let average = arr.reduce((prev, next) => prev + next, 0) / len;

  while (high - low !== 1) {
    const mid = Math.floor((high + low) / 2);
    const current = arr[mid];
    if (current > average) {
      high = mid;
    } else if (current < average) {
      low = mid;
    } else {
      return current;
    }
  }

  low = arr[low];
  high = arr[high];

  return average - low < high - average ? low : high;
}
