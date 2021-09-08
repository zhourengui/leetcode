// https://leetcode-cn.com/problems/merge-two-sorted-lists/

// 解题思路：
// 1. 前提条件：有序
// 2. 同时遍历两个链表，比较头谁小就指向谁，如果有一个为空了退出

// 时间复杂度：O(N+M)，空间复杂度：O(1)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let n = new ListNode(null, null),
    p = n;
  while (l1 || l2) {
    if (l1 && l2) {
      if (l1.val <= l2.val) {
        p.next = l1;
        l1 = l1.next;
      } else {
        p.next = l2;
        l2 = l2.next;
      }
      p = p.next;
    }

    if (l1 && !l2) {
      p.next = l1;
      break;
    }

    if (!l1 && l2) {
      p.next = l2;
      break;
    }
  }

  return n.next;
};
