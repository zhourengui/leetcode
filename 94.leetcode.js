// https://leetcode-cn.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  let len = nums.length;
  let twoNums = {};
  let result = [];

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const a = nums[i];
      const b = nums[j];
      const l = nums[len - 1];
      if (!twoNums[`${a},${b}`] && a + b <= 0 && a + b + l >= 0) {
        twoNums[`${a},${b}`] = `${i},${j}`;
      }
    }
  }

  for (const key in twoNums) {
    const [i1, i2] = twoNums[key].split(",");
    const a = nums[i1];
    const b = nums[i2];
    const c = 0 - a - b;
    for (let j = 0; j < len; j++) {
      const target = nums[j];
      if (j !== i1 && j > i2 && target === c) {
        result.push([a, b, c]);
        break;
      }
    }
  }

  return result;
};
