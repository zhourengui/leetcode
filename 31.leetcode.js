// https://leetcode-cn.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let len = digits.length,
    p1 = len - 1,
    extra = 0,
    curr = digits[p1] + 1;

  while (p1 >= 0) {
    extra = Math.floor(curr / 10);
    digits[p1] = curr % 10;
    p1--;
    curr = digits[p1] + extra;
  }

  p1 = len - 1;
  if (extra === 1) {
    while (p1 >= 0) {
      [digits[p1 + 1], digits[p1]] = [digits[p1], digits[p1 + 1]];
      p1--;
    }
    digits[0] = extra;
  }

  return digits;
};

console.log(plusOne([4, 3, 2, 1]));
