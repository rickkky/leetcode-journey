/*
 * @lc app=leetcode.cn id=494 lang=typescript
 *
 * https://leetcode-cn.com/problems/target-sum/
 */

// @lc code=start

// `nums` is not empty and it's elements are non-negative
// the sum of elements in `nums` will not exceed 1000
function findTargetSumWays(nums: number[], target: number): number {
  // indicates that we have `schemes[sum + 1000]` ways to get `sum`
  let schemes = new Array(2001).fill(0);

  schemes[nums[0] + 1000] += 1;
  schemes[-nums[0] + 1000] += 1;

  for (let i = 1; i < nums.length; ++i) {
    const nextSchemes = new Array(2001).fill(0);

    for (let sum = -1000; sum <= 1000; ++sum) {
      if (nums[i] + sum + 1000 <= 2000) {
        nextSchemes[nums[i] + sum + 1000] += schemes[sum + 1000];
      }
      if (-nums[i] + sum + 1000 >= 0) {
        nextSchemes[-nums[i] + sum + 1000] += schemes[sum + 1000];
      }
    }

    schemes = nextSchemes;
  }

  return Math.abs(target) > 1000 ? 0 : schemes[target + 1000];
}

// time: O(sum * n).
// - sum: the maximum sum of elements in `nums`.

// space: O(sum).

// @lc code=end

export default findTargetSumWays;
