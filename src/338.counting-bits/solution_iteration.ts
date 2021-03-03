/*
 * @lc app=leetcode.cn id=338 lang=typescript
 *
 * https://leetcode-cn.com/problems/counting-bits/
 */

// @lc code=start

function countOnes(num: number) {
  let count = 0;

  while (num > 0) {
    // n & (n - 1) can replace the last 1 (of binary n) with 0
    num &= num - 1;
    count += 1;
  }

  return count;
}

function countBits(num: number): number[] {
  const bits = [];

  for (let i = 0; i <= num; ++i) {
    bits.push(countOnes(i));
  }

  return bits;
}

// time: O(k * n). k: bits of `number` type.

// space: O(1).

// @lc code=end

export default countBits;
