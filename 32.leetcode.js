// https://leetcode-cn.com/problems/number-of-recent-calls/
// 解题思路：
// 1. 使用队列，先进来的请求放入，第二个请求进来的时候判断第一个是否超过了3000，如果是将第一个出栈，然后继续
// 2. 如果第一个在范围内说明，后面的都在范围内

var RecentCounter = function () {
  this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.queue.push(t);
  while (this.queue[0] < t - 3000) {
    this.queue.shift();
  }
  return this.queue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
