// https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/

// 解题思路：
// 1. 使用广度优先遍历
// 2. 当遇到第一个left和right节点都为空的时候返回深度即可

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
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) return 0;
  const queue = [[root, 1]];
  while (queue.length > 0) {
    const [t, l] = queue.shift();
    if (t.left === null && t.right === null) {
      return l;
    }
    if (t.left !== null) {
      queue.push([t.left, l + 1]);
    }
    if (t.right !== null) {
      queue.push([t.right, l + 1]);
    }
  }
};
