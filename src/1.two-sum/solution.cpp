/*
 * @lc app=leetcode.cn id=1 lang=cpp
 *
 * [1] 两数之和
 */

// @lc code=start
#include <unordered_map>
#include <vector>

using namespace std;

class Solution {
 public:
  vector<int> twoSum(vector<int> &nums, int target) {
    unordered_map<int, int> dict;

    for (int i = 0; i < nums.size(); ++i) {
      int patch = target - nums[i];

      if (dict.find(patch) != dict.end()) {
        return {dict[patch], i};
      }

      dict[nums[i]] = i;
    }

    return {};
  }
};
// @lc code=end
