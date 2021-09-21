// https://leetcode-cn.com/problems/kth-largest-element-in-an-array/

// 解题思路：
// 1. 构建一个最小堆，依次将数字insert到堆中，如果堆的数量大于k个，就使用pop

// 时间复杂度：O(n*logn) 堆排序的复杂度

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
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(index, leftIndex);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(index, rightIndex);
      this.shiftDown(rightIndex);
    }
  }

  shiftUp(index) {
    if (index === 0) return;
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
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
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let heap = new MiniHeap(),
    l = nums.length,
    p = 0,
    c = null;

  while (p < l) {
    c = nums[p];
    heap.insert(c);
    if (heap.size() > k) {
      heap.pop();
    }
    p++;
  }

  console.log(heap);

  return heap.peek();
};
