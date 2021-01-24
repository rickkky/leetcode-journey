/*
 * @lc app=leetcode.cn id=200 lang=cpp
 *
 * https://leetcode-cn.com/problems/number-of-islands/
 */

#include <stack>
#include <utility>
#include <vector>

using namespace std;

// @lc code=start

class Solution {
 private:
  // grid is not empty
  // row, col are valid
  void clearIslandDfsRecursive(vector<vector<char>> &grid, int row, int col) {
    int row_num = grid.size();
    int col_num = grid[0].size();

    // clear current element
    grid[row][col] = '0';

    // up
    if (row - 1 >= 0 && grid[row - 1][col] == '1') {
      grid[row - 1][col] = '0';
      clearIslandDfsRecursive(grid, row - 1, col);
    }
    // down
    if (row + 1 < row_num && grid[row + 1][col] == '1') {
      grid[row + 1][col] = '0';
      clearIslandDfsRecursive(grid, row + 1, col);
    }
    // left
    if (col - 1 >= 0 && grid[row][col - 1] == '1') {
      grid[row][col - 1] = '0';
      clearIslandDfsRecursive(grid, row, col - 1);
    }
    // right
    if (col + 1 < col_num && grid[row][col + 1] == '1') {
      grid[row][col + 1] = '0';
      clearIslandDfsRecursive(grid, row, col + 1);
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
          clearIslandDfsRecursive(grid, row, col);
        }
      }
    }

    return island_num;
  }
};

// @lc code=end
