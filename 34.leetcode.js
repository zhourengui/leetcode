// https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
// 解题思路：
// 1. 使用深度优先遍历

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
var maxDepth = function (root) {
  let maxDeepth = 0;

  const dfs = (root, deepth) => {
    if (root === null) return;

    if (root.left === null && root.right === null) {
      maxDeepth = Math.max(maxDeepth, deepth);
    }

    dfs(root.left, deepth + 1);
    dfs(root.right, deepth + 1);
  };

  dfs(root, 1);

  return maxDeepth;
};

// 解题思路：
// 1. 非递归遍历，使用中序遍历

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
var maxDepth = function (root) {
  if (!root) return 0;
  let maxDeepth = 0;
  let stack = [];
  let p = [root, 1];
  while (stack.length || p) {
    while (p) {
      const [current, depth] = p;
      stack.push(p);
      if (current.left) {
        p = [current.left, depth + 1];
      } else {
        p = null;
      }
    }
    const [current, depth] = stack.pop();
    if (!current.left && !current.right) {
      maxDeepth = Math.max(maxDeepth, depth);
    }
    if (current.right) {
      p = [current.right, depth + 1];
    }
  }
  return maxDeepth;
};
