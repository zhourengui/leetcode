// https://leetcode-cn.com/problems/aMhZSa/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let stack = [];
  let p1 = head;

  while (p1 !== null) {
    stack.push(p1.val);
    p1 = p1.next;
  }

  p1 = head;

  while (stack.length) {
    if (stack.pop() !== p1.val) {
      return false;
    }
    p1 = p1.next;
  }
  return true;
};
