// https://leetcode-cn.com/problems/shuffle-an-array/

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
  this.backup = [...nums];
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
