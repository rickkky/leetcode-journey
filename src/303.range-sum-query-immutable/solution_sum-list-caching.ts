/*
 * @lc app=leetcode.cn id=303 lang=typescript
 *
 * https://leetcode-cn.com/problems/range-sum-query-immutable/
 */

// @lc code=start

class NumArray {
  private nums: number[];

  private sums: number[];

  constructor(nums: number[]) {
    this.nums = nums;
    this.sums = [0];

    for (let [i, n] of nums.entries()) {
      if (i === 0) {
        this.sums[i + 1] = n;
      } else {
        this.sums[i + 1] = this.sums[i] + n;
      }
    }
  }

  // 0 <= i <= j < nums.length
  sumRange(i: number, j: number): number {
    return this.sums[j + 1] - this.sums[i];
  }
}

// @lc code=end
