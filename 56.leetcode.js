// https://leetcode-cn.com/problems/nim-game/

// 解题思路：
// 1. 自己拿的石头之后如果剩余的石头等于4就赢了，如果对方拿了石头到你拿石头的时候是4就你输了

/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  return n % 4 !== 0;
};
