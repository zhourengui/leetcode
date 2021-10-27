// https://leetcode-cn.com/problems/TVdhkn/

// 解题思路：
// 例子[1, 2, 3]
// 1. 所有子集，子集的长度包括0， 1， 2， 3
// 2. 定义一个rec的递归方法
// 3. 方法判断path的长度是否等于传入的长度，如果等于直接退出即可
// 4. 否则遍历数组比如长度为2的时候，有1-2，1-3，2-3，所以可以在遍历的时候，如果我们的第一项选择的是1，那么他递归遍历的只需要是2，3项即可，所以这个方法还需要一个遍历的起始值

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [];

  const rec = (path, start, len) => {
    if (path.length === len) {
      return res.push(path);
    }
    for (let i = start; i < nums.length; i++) {
      rec([...path, nums[i]], i + 1, len);
    }
  };

  for (let i = 0; i <= nums.length; i++) {
    rec([], 0, i);
  }

  return res;
};
