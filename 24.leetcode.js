// https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/
// 解题思路：
// 1. 前提条件：必须两个数以上并且，是连续的，所有直接取一半，遍历一半就行
// 时间复杂度：O(n**2)

/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  let res = [],
    tmp = [],
    p1 = 0,
    p2 = 0,
    m = Math.ceil(target / 2),
    t = 0;

  if (target === 0 || target === 1 || target === 2) return [];

  while (p1 < m) {
    tmp = [];
    p1++;
    p2 = p1;
    t = 0;

    while (p2 <= m) {
      t += p2;

      if (t === target) {
        tmp.push(p2);
        res.push(tmp);
        break;
      }

      if (t < target) {
        tmp.push(p2);
      }

      if (t > target) {
        break;
      }

      p2++;
    }
  }

  return res;
};

console.log(findContinuousSequence(9));
