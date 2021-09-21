// https://leetcode-cn.com/problems/merge-k-sorted-lists/

// 解题思路：
// 1. 链表数组不知道有多少个链表
// 2. 使用最小堆

class MiniHeap {
  constructor() {
    this.heap = [];
  }

  getLeftIndex(index) {
    return (index << 1) + 1;
  }

  getRightIndex(index) {
    return (index << 1) + 2;
  }

  getParentIndex(index) {
    return (index - 1) >> 1;
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  pop() {
    if (this.size() === 1) {
      return this.heap.pop();
    }
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }

  insert(target) {
    this.heap.push(target);
    this.shiftUp(this.size() - 1);
  }

  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (
      this.heap[leftIndex] &&
      this.heap[leftIndex].val < this.heap[index].val
    ) {
      this.swap(index, leftIndex);
      this.shiftDown(leftIndex);
    }
    if (
      this.heap[rightIndex] &&
      this.heap[rightIndex].val < this.heap[index].val
    ) {
      this.swap(index, rightIndex);
      this.shiftDown(rightIndex);
    }
  }

  shiftUp(index) {
    if (index === 0) return;
    const parentIndex = this.getParentIndex(index);
    if (
      this.heap[parentIndex] &&
      this.heap[parentIndex].val > this.heap[index].val
    ) {
      this.swap(index, parentIndex);
      this.shiftUp(parentIndex);
    }
  }

  swap(i1, i2) {
    const tmp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = tmp;
  }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let heap = new MiniHeap(),
    node = new ListNode(null, null),
    curr = null,
    p = node;

  for (const list of lists) {
    if (list) {
      heap.insert(list);
    }
  }

  while (heap.size() !== 0) {
    curr = heap.peek();
    p.next = curr;
    p = p.next;
    heap.pop();

    if (curr.next) {
      heap.insert(curr.next);
    }
  }

  return node.next;
};
