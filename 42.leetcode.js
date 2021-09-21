// https://leetcode-cn.com/problems/top-k-frequent-elements/

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
      this.heap[leftIndex].count < this.heap[index].count
    ) {
      this.swap(index, leftIndex);
      this.shiftDown(leftIndex);
    }
    if (
      this.heap[rightIndex] &&
      this.heap[rightIndex].count < this.heap[index].count
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
      this.heap[parentIndex].count > this.heap[index].count
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
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let heap = new MiniHeap(),
    map = new Map();

  for (const item of nums) {
    map.set(item, (map.get(item) || 0) + 1);
  }

  for (const [value, count] of map) {
    heap.insert({ value, count });
    if (heap.size() > k) {
      heap.pop();
    }
  }

  return heap.heap.map((item) => item.value);
};
