// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  const queue = [[root, 0]],
    res = [];

  while (queue.length) {
    const [t, l] = queue.shift();
    res[l] = [...(res[l] || []), t.val];
    if (t.left) {
      queue.push([t.left, l + 1]);
    }
    if (t.right) {
      queue.push([t.right, l + 1]);
    }
  }

  return res;
};
