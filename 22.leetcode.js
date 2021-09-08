// https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/

// 解题思路：
// 1. 前提条件：不能修改传入的链表，然后next指针不能有环
// 2. 遍历传入的链表，复制一份，并用 map保存原来的和复制的映射
// 3. 再次遍历传入的链表，设置复制那份的random指针，直接从map中取即可

// 时间复杂度：O(n)，空间复杂度O(n）

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let p1 = new Node(null, null, null),
    p2 = head,
    map = new Map(),
    n = p1,
    tmp;

  if (head === null) return null;

  while (p2) {
    tmp = new Node(p2.val, null, null);
    n.next = tmp;
    map.set(p2, tmp);
    p2 = p2.next;
    n = n.next;
  }

  p2 = head;
  n = p1.next;

  while (p2) {
    n.random = map.get(p2.random);
    p2 = p2.next;
    n = n.next;
  }

  return p1.next;
};

function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}
const node5 = new Node(5, null, null);
const node4 = new Node(4, node5, null);
const node3 = new Node(3, node4, null);
const node2 = new Node(2, node3, null);
const node1 = new Node(1, node2, null);

console.log(copyRandomList(node1));
