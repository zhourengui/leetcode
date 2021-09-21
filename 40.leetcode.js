// https://leetcode-cn.com/problems/clone-graph/

// 解题思路：
// 1. 广度或者深度遍历图，将原始的和复制的做映射

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return;

  const visited = new Map(),
    queue = [node];

  visited.set(node, new Node(node.val, undefined));

  while (queue.length) {
    const t = queue.pop();
    (t.neighbors || []).forEach((n) => {
      if (!visited.has(n)) {
        queue.push(n);
        visited.set(n, new Node(n.val, undefined));
      }
      visited.get(t).neighbors.push(visited.get(n));
    });
  }

  return visited.get(node);
};
