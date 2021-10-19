// https://leetcode-cn.com/problems/4sum/

// 解题思路：
// 1. 拆解问题，拆成两个数的两数之和
// 2. 先确定两个数为基准值，然后就可以通过两数之和的问题解决

// 时间复杂度：O(n**3)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const twoNums = [];
  const res = [];
  const numsSort = nums.sort((a, b) => a - b);

  for (let i = 0; i < numsSort.length; i++) {
    for (let j = i + 1; j < numsSort.length; j++) {
      twoNums.push([i, j]);
    }
  }

  for (let i = 0; i < twoNums.length; i++) {
    for (let j = i + 1; j < twoNums.length; j++) {
      if (
        (numsSort[twoNums[i][0]] === numsSort[twoNums[j][0]] &&
          numsSort[twoNums[i][1]] === numsSort[twoNums[j][1]]) ||
        (numsSort[twoNums[i][1]] === numsSort[twoNums[j][0]] &&
          numsSort[twoNums[i][0]] === numsSort[twoNums[j][1]])
      ) {
        twoNums.splice(j, 1);
        j--;
      }
    }
  }

  for (let i = 0; i < twoNums.length; i++) {
    const [a, b] = twoNums[i];
    for (let c = 0; c < numsSort.length; c++) {
      if (c !== a && c !== b) {
        const aNum = numsSort[a];
        const bNum = numsSort[b];
        const cNum = numsSort[c];
        const num = target - aNum - bNum - cNum;
        let high = numsSort.length;
        let low = 0;

        while (low <= high) {
          const mid = Math.floor((high + low) / 2);
          const dNum = numsSort[mid];

          if (mid !== a && mid !== b && mid !== c && num === dNum) {
            res.push([aNum, bNum, cNum, dNum]);
            break;
          }

          if (num > dNum) {
            low = mid + 1;
          } else if (num < dNum) {
            high = mid - 1;
          } else {
            low = low + 1;
          }
        }
      }
    }
  }

  return Object.values(
    res.reduce((prev, next) => ({ ...prev, [next.sort()]: next }), {})
  );
};
