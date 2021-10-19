// https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/

// 解题思路：
// 1. 使用双指针，长度为单词数量*单词数
// 2. 使用map记录次数，如果次数为0或者获取不到说明字符串不满足，直接跳过即可

// 时间复杂度：O(n)

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (words.length === 0 || words[0].length === 0) return [];

  const wordsLen = words.length;
  const singleWordsLen = words[0].length;
  const wordsMap = new Map();
  const res = [];

  let p1 = 0;
  let p2 = wordsLen * singleWordsLen - 1;

  for (let i = 0; i < wordsLen; i++) {
    wordsMap.set(words[i], (wordsMap.get(words[i]) || 0) + 1);
  }

  while (p2 < s.length) {
    let count = 1;
    const map = new Map([...wordsMap]);
    while (count <= wordsLen) {
      const str = s.substring(
        p1 + (count - 1) * singleWordsLen,
        p1 + count * singleWordsLen
      );
      if (!map.has(str) || map.get(str) === 0) {
        break;
      }
      map.set(str, map.get(str) - 1);
      count++;
    }

    if (count === wordsLen + 1) {
      res.push(p1);
    }

    p2++;
    p1++;
  }

  return res;
};
