/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/
 */

// @lc code=start

function lengthOfLIS(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  // the i-th element is the LTS length of array [nums[0], ... , nums[i]]
  const lengthList: number[] = [1];
  // record the longest length
  let maxLength = 1;

  for (let i = 1; i < nums.length; ++i) {
    lengthList[i] = 1;

    for (let j = 0; j < i; ++j) {
      if (nums[i] > nums[j]) {
        lengthList[i] = Math.max(lengthList[i], lengthList[j] + 1);
      }
    }

    maxLength = Math.max(maxLength, lengthList[i]);
  }

  return maxLength;
}

/*
 * time: O(n ^ 2).
 *
 * space: O(n).
 */

// @lc code=end

export default lengthOfLIS;
