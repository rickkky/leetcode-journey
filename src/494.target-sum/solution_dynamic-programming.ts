/*
 * @lc app=leetcode.cn id=494 lang=typescript
 *
 * https://leetcode-cn.com/problems/target-sum/
 */

// @lc code=start

function findTargetSumWays(nums: number[], sum: number): number {
  // indicates that we have dp[n] ways to get n
  let dp = new Array(2001).fill(0);

  dp[nums[0] + 1000] += 1;
  dp[-nums[0] + 1000] += 1;

  for (let i = 1; i < nums.length; ++i) {
    const next = new Array(2001).fill(0);

    for (let s = -1000; s <= 1000; ++s) {
      if (dp[s + 1000] > 0) {
        next[nums[i] + s + 1000] += dp[s + 1000];
        next[-nums[i] + s + 1000] += dp[s + 1000];
      }
    }

    dp = next;
  }

  return sum > 1000 ? 0 : dp[sum + 1000];
}

// @lc code=end

export default findTargetSumWays;
