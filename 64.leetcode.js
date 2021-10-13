// https://leetcode-cn.com/problems/excel-sheet-column-title/
// 解题思路：
// 1. 求余数但是因为26刚好是Z不是进一所以在求余的时候减去1，然后加上A
// 2. 传入的值等于原始值除以26

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  const res = [];
  while (columnNumber > 0) {
    columnNumber--;
    res.push(String.fromCharCode((columnNumber % 26) + "A".charCodeAt()));
    columnNumber = Math.floor(columnNumber / 26);
  }
  return res.reverse().join("");
};
