export class Solution {
  /**
   * buyPasses
   *
   * @param arr: the line
   * @param k: Alex place
   * @return: the time when Alex requires to buy all passes
   */
  buyPasses(arr, k) {
    // Write your code here.
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (i <= k) {
        count += Math.min(arr[i], arr[k]);
      } else {
        count += Math.min(arr[k] - 1, arr[i]);
      }
    }

    return count;
  }
}
