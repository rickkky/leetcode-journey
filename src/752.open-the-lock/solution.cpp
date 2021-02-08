/*
 * @lc app=leetcode.cn id=752 lang=cpp
 *
 * https://leetcode-cn.com/problems/open-the-lock/
 */

#include <queue>
#include <string>
#include <unordered_set>
#include <vector>

using namespace std;

// @lc code=start

class Solution {
 private:
  // index - int, [0, 3]
  // operand - {-1, 1}
  string getNextLockState(string state, int index, int operand) {
    state[index] = state[index] + operand;

    if (state[index] > '9') {
      state[index] = '0';
    } else if (state[index] < '0') {
      state[index] = '9';
    }

    return state;
  }

 public:
  int openLock(vector<string> &deadends, string target) {
    // an unordered set to store deadend states
    unordered_set<string> deadend_states(deadends.begin(), deadends.end());
    // an unordered set to store visited states
    unordered_set<string> visited_states;
    // a queue to store unhandled states
    queue<string> states;

    states.push("0000");
    visited_states.insert("0000");

    int depth = 0;

    // while states is not empty
    while (!states.empty()) {
      // the size of states may change in the for-loop
      int len = states.size();

      for (int n = 0; n < len; ++n) {
        string state = states.front();
        states.pop();

        if (state == target) {
          return depth;
        }

        // skip while it's a deadend
        if (deadend_states.find(state) != deadend_states.end()) {
          continue;
        }

        for (int i = 0; i < 4; ++i) {
          for (int op = -1; op <= 1; op += 2) {
            string next_state = getNextLockState(state, i, op);

            // skip while nextState is visited
            if (visited_states.find(next_state) != visited_states.end()) {
              continue;
            }

            states.push(next_state);
            visited_states.insert(next_state);
          }
        }
      }

      depth += 1;
    }

    return -1;
  }
};

// @lc code=end
