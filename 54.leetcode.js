// https://leetcode-cn.com/problems/swap-nodes-in-pairs/

// 解题思路：
// 1. 遍历链表，让第一个节点指向第二个节点，让第二个节点指向第一个节点，并且保留第一个节点，目的是在下一个节点替换后将上一个节点指向下一个新的节点

// 时间复杂度：O(n)，空间复杂度O(1)

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
var swapPairs = function (head) {
  if (head === null || head.next === null) return head;

  let p1 = head,
    p2 = null,
    res = head.next,
    tmp = null;

  while (p1 != null && p1.next !== null) {
    p2 = p1.next.next;
    p1.next.next = p1;
    if (tmp !== null) {
      tmp.next = p1.next;
    }
    p1.next = p2;
    tmp = p1;
    p1 = p2;
  }

  return res;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
n1.next = n2;
n2.next = n3;
n3.next = n4;

swapPairs(n1);
