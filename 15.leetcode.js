// https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/

// 解题思路：
// 1. 插入排序的思想
// 2. 遍历数组，每一项都与前面一项做对比，如果后者+前者小于前者+后者，换位置，反之，遍历下一位
// 时间复杂度：O(n^2), 空间复杂度：O(n)

/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  let tmp = String(nums[0]),
    arr = [tmp],
    l = nums.length,
    prev,
    p;

  for (let i = 1; i < l; i++) {
    tmp = String(nums[i]);
    arr.push(tmp);
    p = i;
    while (p > 0) {
      prev = arr[p - 1];
      if (Number(tmp + prev) < Number(prev + tmp)) {
        arr[p] = arr[p - 1];
        p--;
      } else {
        break;
      }
    }

    if (p !== i) {
      arr[p] = tmp;
    }
    continue;
  }

  return arr.join("");
};
