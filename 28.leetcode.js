// https://leetcode-cn.com/problems/height-checker/

// 解题思路：
// 1. 对数组排序
// 2. 排好序的数组和元素组比较

function quickSort(arr) {
  const rec = (arr) => {
    if (arr.length <= 1) return arr;

    let l = [],
      r = [],
      m = arr[0],
      c = null;

    for (let i = 1; i < arr.length; i++) {
      c = arr[i];
      if (c > m) {
        r.push(c);
      } else {
        l.push(c);
      }
    }

    return [...rec(l), m, ...rec(r)];
  };

  return rec(arr);
}

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let t = quickSort(heights),
    c = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== t[i]) {
      c++;
    }
  }

  return c;
};

heightChecker([5, 1, 2, 3, 4]);
