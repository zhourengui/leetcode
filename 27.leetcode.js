// https://leetcode-cn.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || x > 2 ** 32 - 1) return false;
  if (x < 10) return true;

  let c = x,
    t = 0;

  while (true) {
    t = t * 10 + (c % 10);
    c = parseInt(c / 10);
    if (c === 0) break;
  }

  return t === x;
};

console.log(isPalindrome(11));
