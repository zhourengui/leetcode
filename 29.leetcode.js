// https://leetcode-cn.com/problems/isomorphic-strings/

// 解题思路：
// 1. 遍历字符串，获取s->t的映射和t->s的映射,在遍历过程中，如果s的字符串出现过，并且对应的t字符串的映射不一样直接返回false
// 2. 最终通过判断两个map的长度是否相等即可，因为相同的key会被覆盖（举个例子：badc和baba，s产生的map长度为4，t产生的map长度为2，明显长度都不符，所以不是同构）

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  let s2t = new Map(),
    t2s = new Map(),
    sc = null,
    tc = null,
    len = s.length;

  for (let i = 0; i < len; i++) {
    sc = s[i];
    tc = t[i];

    if (s2t.has(sc) && s2t.get(sc) !== tc) return false;

    s2t.set(sc, tc);
    t2s.set(tc, sc);
  }

  return s2t.size === t2s.size;
};
