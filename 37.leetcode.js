// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/

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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) return [];

  let stack = [],
    p = root,
    res = [];

  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    const t = stack.pop();
    res.push(t.val);
    p = t.right;
  }

  return res;
};
