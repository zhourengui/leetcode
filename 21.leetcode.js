// https://leetcode-cn.com/problems/3u1WK4/
// 解题思路：
// 1. 两个链表有可能是不同长度的所以我们找到重复节点非常的难，我们可以让两个相同长度的链表进行遍历比较是否是重复的节点
// 2. 遍历两个节点获取两个链表的长度，然后让更长的链表先走两个链表的长度差值，这样就让两个链表相同的长度，这样就很容易遍历比较了

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let p1 = headA,
    p2 = headB,
    l1 = 0,
    l2 = 0,
    d = 0;

  while (p1 || p2) {
    if (p1) {
      l1++;
      p1 = p1.next;
    }

    if (p2) {
      l2++;
      p2 = p2.next;
    }
  }

  d = Math.abs(l1 - l2);

  if (l1 >= l2) {
    p1 = headA;
    p2 = headB;
  } else if (l2 > l1) {
    p1 = headB;
    p2 = headA;
  }

  console.log(p1, p2);

  while (d) {
    p1 = p1.next;
    d--;
  }

  while (p1 && p2) {
    if (p1 === p2) {
      return p1;
    }
    p1 = p1.next;
    p2 = p2.next;
  }

  return null;
};
