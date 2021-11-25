// a、自定义多叉树节点node结构（只需要定义节点结构即可，无需构建树）
// b、按照广度优先查找符合要求的节点（没有符合要求的节点返回null），比如查找电话号码为 phone的用户信息，调用如下：
// let node = wideTraversal(node,(e)=>e.phone===phone)

/**
 * Definition for multiple tree.
 * function Tree(value) {
 *    this.value = value
 *    this.children = []
 * }
 */

/**
 * @param {Tree} node
 * @param {Function} callback
 * @returns {Tree}
 */
function wideTraversal(node, callback) {
  const queue = [node];
  while (queue.length) {
    const head = queue.shift();
    if (callback(head)) {
      return head;
    }
    if (head.children) {
      queue.push(...head.children);
    }
  }
  return null;
}

wideTraversal(
  {
    value: 1,
    children: [
      { value: 2, children: [{ value: 3, children: [] }] },
      { value: 4, children: [{ value: 5, children: [] }] },
    ],
  },
  (node) => node.value === 4
);
// { value: 4, children: [ { value: 5, children: [] } ] }
