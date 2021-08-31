// https://leetcode-cn.com/problems/UHnkqh/

// 解题思路：
// 1. 定义一前一后两个指针
// 2. 让后面的指针指向前面的指针
// 时间复杂度：O(n), 空间复杂度O(1)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let p1 = null,
    p2 = head;

  while (p2) {
    const tmp = p2.next;
    p2.next = p1;
    p1 = p2;
    p2 = tmp;
  }

  return p1;
};
