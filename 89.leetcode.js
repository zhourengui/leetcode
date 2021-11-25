// https://leetcode-cn.com/problems/random-pick-with-weight/

// 解题思路：[1, 2] ===> [1, 2, 2]，然后取随机数

/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.w = w;
  this.sum = w.reduce((prev, next) => prev + next, 0);
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  let random = Math.floor(Math.random() * this.sum);
  let sum = 0;
  let i = 0;
  for (i = 0; i < this.w.length; i++) {
    if (sum > random) return i - 1;
    sum += this.w[i];
    if (sum === random) return i;
  }
  return i - 1;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
