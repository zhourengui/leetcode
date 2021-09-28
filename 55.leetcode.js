// https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/submissions/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  let p = head,
    tmp = null;

  if (head.val === val) return head.next;

  while (p) {
    if (p.next.val === val) {
      tmp = p.next;
      p.next = p.next.next;
      tmp.next = null;
      break;
    }
    p = p.next;
  }

  return head;
};
