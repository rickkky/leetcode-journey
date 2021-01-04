/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * https://leetcode-cn.com/problems/two-sum/
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  // unorder map
  const map: { [prop: number]: number } = {};

  for (let [i, num] of nums.entries()) {
    const patch = target - num;

    if (map[patch] !== undefined) {
      return [map[patch], i];
    }

    map[num] = i;
  }

  return [];
}
// @lc code=end

export default twoSum;
