/*
 * @lc app=leetcode.cn id=338 lang=typescript
 *
 * https://leetcode-cn.com/problems/counting-bits/
 */

// @lc code=start

function countBits(num: number): number[] {
  const bits: number[] = [0];

  // e.g binary: 10, 100, 1000...
  let highBit = 0;

  for (let i = 1; i <= num; ++i) {
    // if i is n-th power of 2
    if ((i & (i - 1)) === 0) {
      highBit = i;
    }

    bits[i] = bits[i - highBit] + 1;
  }

  return bits;
}

// time: O(n).

// space: O(1).

// @lc code=end

export default countBits;
