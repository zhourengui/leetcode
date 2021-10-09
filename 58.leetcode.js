// https://leetcode-cn.com/problems/count-primes/
// 解题思路：
// 1. 质数的数量需要算 n%2、n%3.....n%n-1
// 2. 但是不需要这样做，只需要标记n的倍数不是质数即可

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const isPrime = new Array(n).fill(1);
  let count = 0;
  for (let i = 2; i < n; ++i) {
    if (isPrime[i]) {
      count++;
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = 0;
      }
    }
  }

  console.log(isPrime);

  return count;
};

countPrimes(10);
