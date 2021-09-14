// https://leetcode-cn.com/problems/c32eOV/

// 解题思路：
// 1. 使用快慢两个指针找到第一个相同的节点，这个节点并不是第一个相同的节点，记录为P节点
// 2. 然后让指针p1从头开始走，p2指针从P节点开始走，每个指针每次走一步，当遇到相同节点的时候就是第一个相同的节点

// 时间复杂度：O(n)

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (head === null) return null;

  let p1 = head,
    p2 = head;

  while (true) {
    if (p2.next === null) return null;
    p1 = p1.next;
    p2 = p2.next.next;
    if (p2 === null) return null;
    if (p1 === p2) break;
  }

  p1 = head;

  while (true) {
    if (p1 === p2) return p2;
    p1 = p1.next;
    p2 = p2.next;
  }
};
