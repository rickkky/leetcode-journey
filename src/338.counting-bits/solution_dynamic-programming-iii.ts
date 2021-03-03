/*
 * @lc app=leetcode.cn id=338 lang=typescript
 *
 * https://leetcode-cn.com/problems/counting-bits/
 */

// @lc code=start

function countBits(num: number): number[] {
  const bits: number[] = [0];

  for (let i = 1; i <= num; ++i) {
    // i >> 1 = Math.floor(i / 2)
    bits[i] = bits[i >> 1] + (i & 1);
  }

  return bits;
}

// time: O(n).

// space: O(1).

// @lc code=end

export default countBits;
