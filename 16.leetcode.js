/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

// https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/

// 解题思路：
// 1. 初始化两个栈，记录栈的size
// 2. push方法将数据push到stack1，并记录size++
// 3. pop方法，如果size等于0，返回-1，如果stack2为空的时候才需要从stack1中取元素，size--，并从stack2推出一个元素
// 时间复杂度：O(n)，空间复杂度：O(n)

// 写法一：
var CQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
  this.size = 0;
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stack1.push(value);
  this.size++;
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.size === 0) return -1;

  this.size--;

  if (this.stack2.length === 0) {
    while (this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop());
    }
  }

  return this.stack2.pop();
};

// 写法二：
class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
    this.size = 0;
  }

  push(data) {
    this.stack1.push(data);
    this.size++;
  }

  pop() {
    if (this.size === 0) return -1;

    this.size--;

    if (this.stack2.length === 0) {
      while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop();
  }
}
