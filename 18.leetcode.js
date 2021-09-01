// https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/

// 解题思路：
// 定义一前一后两个指针，让后面的指针先走k步，直到后面的指针为null
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
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let p1 = head,
    p2 = head,
    p = 1;

  while (p < k && p2) {
    p2 = p2.next;
    p++;
  }

  if (p2 === null) return null;

  while (p2.next) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
};

const l1 = new ListNode(1);
const l2 = new ListNode(2);
const l3 = new ListNode(3);
const l4 = new ListNode(4);
const l5 = new ListNode(5);
const l6 = new ListNode(6);
const l7 = new ListNode(7);

l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;
l5.next = l6;
l6.next = l7;

console.log(getKthFromEnd(l1, 3));
