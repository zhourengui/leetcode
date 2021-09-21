// https://leetcode-cn.com/problems/invert-binary-tree/
// 解题思路：
// 1. 分治思想
// 2. 使用递归，左子树等于右子树，右子树等于左子树

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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root === null) return root;
  return {
    val: root.val,
    left: invertTree(root.right),
    right: invertTree(root.left),
  };
};
