// https://leetcode-cn.com/problems/integer-break/

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  let thridCount = 0,
    t = n,
    s = 0;

  if (n === 1 || n === 2) return 1;

  if (n === 3) return 2;

  while (t >= 3) {
    thridCount += 1;
    t -= 3;
  }

  s = 3 ** thridCount * (t || 1);

  if (t === 1) {
    s = (s / 3) * 4;
  }

  return s;
};

console.log(integerBreak(9));
