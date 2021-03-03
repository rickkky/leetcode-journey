/*
 * @lc app=leetcode.cn id=338 lang=typescript
 *
 * https://leetcode-cn.com/problems/counting-bits/
 */

// @lc code=start

function countBits(num: number): number[] {
  const bits: number[] = [0];

  for (let i = 1; i <= num; ++i) {
    // n & (n - 1) can replace the last 1 (of binary n) with 0
    bits[i] = bits[i & (i - 1)] + 1;
  }

  return bits;
}

// time: O(n).

// space: O(1).

// @lc code=end

export default countBits;
