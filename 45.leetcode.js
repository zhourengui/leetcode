// https://leetcode-cn.com/problems/symmetric-tree/
// 解题思路：
// 1. 遍历树，判断左树和右树的值是否相等，同时也要满足左树的左树等于右树的右树，左树的右树等于右树的左树

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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) return true;

  const dfs = (l, r) => {
    if (l === null && r === null) return true;
    if (
      l !== null &&
      r !== null &&
      l.val === r.val &&
      dfs(l.left, r.right) &&
      dfs(l.right, r.left)
    ) {
      return true;
    }
    return false;
  };
  return dfs(root.left, root.right);
};
