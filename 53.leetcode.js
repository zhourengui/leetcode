// https://leetcode-cn.com/problems/bulls-and-cows/

// 解题思路：
// 1. 将secret用map记录key和出现的次数
// 2. 遍历guess，如果位置一样bullsCount加1，map中的这个数字减1，如果位置不一样但是数字在secret出现了，cowsCount加1，map中的这个数字减1
// 3. 最后遍历map如果有几位出现负数的说明重复计算了cowsCount减去对应数字即可

// 时间复杂度: O(n)，空间复杂度O(1)

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let map = new Map(),
    bullsCount = 0,
    cowsCount = 0;

  for (const item of secret) {
    map.set(item, (map.get(item) || 0) + 1);
  }

  for (let i = 0; i < guess.length; i++) {
    const curr = guess[i];
    if (secret[i] === curr) {
      bullsCount++;
      map.set(curr, map.get(curr) - 1);
    } else {
      if (map.get(curr) >= 1) {
        cowsCount++;
        map.set(curr, map.get(curr) - 1);
      }
    }
  }

  for (const [_, val] of map) {
    if (val < 0) {
      cowsCount = cowsCount + val;
    }
  }

  return `${bullsCount}A${cowsCount}B`;
};
