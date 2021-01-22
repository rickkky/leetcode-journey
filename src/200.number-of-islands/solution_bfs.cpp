/*
 * @lc app=leetcode.cn id=200 lang=cpp
 *
 * https://leetcode-cn.com/problems/number-of-islands/
 */

#include <queue>
#include <utility>
#include <vector>

using namespace std;

// @lc code=start

class Solution {
 private:
  // grid is not empty
  // row, col are valid
  void resetIslandBfs(vector<vector<char>> &grid, int row, int col) {
    int row_num = grid.size();
    int col_num = grid[0].size();

    // a queue to store unhandled elements of the island
    queue<pair<int, int>> elms;

    // reset grid element and push it to queue
    grid[row][col] = '0';
    elms.push({row, col});

    while (!elms.empty()) {
      pair<int, int> rc = elms.front();
      elms.pop();
      int r = rc.first;
      int c = rc.second;

      // up
      if (r - 1 >= 0 && grid[r - 1][c] == '1') {
        grid[r - 1][c] = '0';
        elms.push({r - 1, c});
      }
      // down
      if (r + 1 < row_num && grid[r + 1][c] == '1') {
        grid[r + 1][c] = '0';
        elms.push({r + 1, c});
      }
      // left
      if (c - 1 >= 0 && grid[r][c - 1] == '1') {
        grid[r][c - 1] = '0';
        elms.push({r, c - 1});
      }
      // right
      if (c + 1 < col_num && grid[r][c + 1] == '1') {
        grid[r][c + 1] = '0';
        elms.push({r, c + 1});
      }
    }
  }

 public:
  int numIslands(vector<vector<char>> &grid) {
    // grid is empty
    if (grid.size() == 0 || grid[0].size() == 0) {
      return 0;
    }

    int row_num = grid.size();
    int col_num = grid[0].size();
    int island_num = 0;

    for (int row = 0; row < row_num; ++row) {
      for (int col = 0; col < col_num; ++col) {
        if (grid[row][col] == '1') {
          island_num += 1;
          resetIslandBfs(grid, row, col);
        }
      }
    }

    return island_num;
  }
};

// @lc code=end
