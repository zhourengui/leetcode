// 在有序的数组中统计一个数字出现的次数

// 解法一：
// 解题思路：
// 1. 使用二分法找到第一个出现的位置
// 2. 使用二分法找到第二个出现的位置
// 时间复杂度：O(lgn**2)

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
function bs(arr, target, l, h) {
  let m, c;

  while (l <= h) {
    m = ((l + h) / 2) | 0;
    c = arr[m];
    if (c === target) {
      return m;
    } else if (c < target) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }

  return -1;
}

function bsl(arr, target) {
  let l = 0,
    h = arr.length - 1,
    r = -1;

  while (l <= h) {
    r = bs(arr, target, l, h);
    if (r === -1 || arr[r - 1] !== target) break;
    h = (((l + h) / 2) | 0) - 1;
  }

  return r;
}

function bsr(arr, target) {
  let l = 0,
    h = arr.length - 1,
    r = -1;

  while (l <= h) {
    r = bs(arr, target, l, h);
    if (r === -1 || arr[r + 1] !== target) break;
    l = (((l + h) / 2) | 0) + 1;
  }

  return r;
}

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
function numberOfK(arr, target) {
  const lr = bsl(arr, target);
  const rr = bsr(arr, target);

  if (lr === -1 && rr === -1) return 0;

  return rr - lr + 1;
}

// 解法二：
// 解题思路：
// 1. 从左右两边一起遍历
// 时间复杂度O(n/2)
function numberOfKOther(arr, target) {
  let p0 = 0,
    p1 = arr.length - 1,
    c = 0;

  while (p0 <= p1) {
    if (p0 === p1 && arr[p0] === target) {
      c++;
    }

    if (arr[p0] === target) {
      c++;
    }

    if (arr[p1] === target) {
      c++;
    }
    p0++;
    p1--;
  }

  return c;
}
