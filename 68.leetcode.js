// https://leetcode-cn.com/problems/reverse-vowels-of-a-string/
// 解题思路：
// 1. 将字符串转化成数组（如果不使用数组直接拼接字符串时间复杂度也是O(n)，因为js的字符串其实是封装过的）
// 2. 使用一前一后双指针，前指针先找到元音字母，找到之后后指针找元音字母，然后两者替换
// 时间复杂度：O(n), 空间复杂度O(n)

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let set = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let p1 = 0;
  let p2 = s.length - 1;
  let arr = s.split("");

  while (p1 < p2) {
    if (set.has(arr[p1])) {
      while (p1 < p2) {
        if (set.has(arr[p2])) {
          const tmp = arr[p2];
          arr[p2] = arr[p1];
          arr[p1] = tmp;
          p2--;
          break;
        }
        p2--;
      }
    }
    p1++;
  }

  return arr.join("");
};

console.log(reverseVowels("leetcode"));
