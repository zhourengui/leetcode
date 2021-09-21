// https://leetcode-cn.com/problems/same-tree/

// 解题思路：
// 1. 使用分治，判断根节点是否相同、左树是否相同、右树是否相同

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (q === null && p === null) return true;

  if (q === null && p !== null) return false;

  if (p === null && q !== null) return false;

  if (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  ) {
    return true;
  }

  return false;
};
