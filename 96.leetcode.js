/**
 * 数组的最大深度
 * 实现maxDeep()
 * maxDeep([1,2,3,4,5]) ---> 1
 * maxDeep([1,[2,3],4,[5,6],[7]]) ---> 2
 * maxDeep([1,[2,[3],4],[5,6],[7]]) ---> 3
 */

// 解法一：
// 解题思路：
// 数组一层一层遍历

/**
 * @param {number[]} arr
 * @returns {number}
 */
// function maxDeep(arr) {
//   let depth = 0;
//   let stack = [...arr];
//   while (stack.length) {
//     let tmp = [];
//     depth++;
//     while (stack.length) {
//       let top = stack.pop();
//       if (Array.isArray(top)) {
//         tmp.push(...top);
//       }
//     }
//     stack = tmp;
//   }
//   return depth;
// }

// 解法二
// 解题思路：
// 数左括号的数量
/**
 * @param {number[]} arr
 * @returns {number}
 */
function maxDeep(arr) {
  let p = 0;
  let str = JSON.stringify(arr);
  let len = str.length;
  let depth = 0;
  let count = 0;

  while (p <= len - 1) {
    if (str[p] === "[") {
      count++;
    } else if (str[p] === "]") {
      depth = Math.max(count, depth);
      count--;
    }
    p++;
  }

  return depth;
}
