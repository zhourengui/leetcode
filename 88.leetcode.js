// https://leetcode-cn.com/problems/shuffle-an-array/

// 解题思路：洗牌算法、fisher-yates

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = [...nums];
  this.backup = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.nums = [...this.backup];
  return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  let len = this.nums.length;
  while (len > 0) {
    const random = Math.floor(Math.random() * len);
    [this.nums[len - 1], this.nums[random]] = [
      this.nums[random],
      this.nums[len - 1],
    ];
    len--;
  }
  return this.nums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

var solution = new Solution([1, 2, 3]);
console.log(solution);
solution.shuffle(); // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。例如，返回 [3, 1, 2]
console.log(solution);
solution.reset(); // 重设数组到它的初始状态 [1, 2, 3] 。返回 [1, 2, 3]
console.log(solution);
solution.shuffle(); // 随机返回数组 [1, 2, 3] 打乱后的结果。例如，返回 [1, 3, 2]
console.log(solution);
