/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/
 */

// @lc code=start

function lengthOfLIS(nums: number[]): number {
  // tails[i]: the minimum value of the last element
  //           of increasing subsequence with length `i`
  const tails: number[] = new Array(nums.length + 1).fill(
    Number.MIN_SAFE_INTEGER,
  );
  // record the longest length
  let maxLength = 0;

  for (let num of nums) {
    if (num > tails[maxLength]) {
      maxLength += 1;
      tails[maxLength] = num;
      continue;
    }

    let left = 1;
    let right = maxLength;
    let pos = 0;

    while (left <= right) {
      const middle = Math.floor((left + right) / 2);

      if (num > tails[middle]) {
        pos = middle;
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }

    tails[pos + 1] = num;
  }

  return maxLength;
}

/*
 * time: O(n * log(n)).
 *
 * space: O(n).
 */

// @lc code=end

export default lengthOfLIS;
