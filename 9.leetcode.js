// 求掷 n 个骰子的每个点数和的概率
// 解题思路：
// 1. n个骰子有6**n种情况
// 2. 每一个点数的概率为出现的次数/6**
// 3. 使用递归，每种情况都走一遍

// 时间复杂度：O(6**n), 空间复杂度：O(n)
/**
 * @param {number} n
 * @returns {number[]}
 */
function diceProbability(n) {
  const res = new Array(6 * n),
    map = new Map();

  const recursion = (level, sum) => {
    if (level === n) {
      return map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1);
    }
    for (let i = 1; i <= 6; i++) {
      recursion(level + 1, sum + i);
    }
  };

  recursion(0, 0);

  for (const [sum, count] of [...map]) {
    res[sum] = count / 6 ** n;
  }

  return res;
}

console.log(diceProbability(10));
