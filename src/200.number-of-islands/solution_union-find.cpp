/*
 * @lc app=leetcode.cn id=200 lang=cpp
 *
 * https://leetcode-cn.com/problems/number-of-islands/
 */

#include <utility>
#include <vector>

using namespace std;

// @lc code=start

class UnionFind {
 private:
  vector<int> allies;

  int count;

 public:
  // grid is not empty
  UnionFind(vector<vector<char>> &grid) {
    int row_num = grid.size();
    int col_num = grid[0].size();

    count = 0;

    for (int row = 0; row < row_num; ++row) {
      for (int col = 0; col < col_num; ++col) {
        if (grid[row][col] == '1') {
          allies.push_back(row * col_num + col);
          count += 1;
        } else {
          allies.push_back(-1);
        }
      }
    }
  }

  int find(int i) {
    if (allies[i] != i) {
      // compress path
      allies[i] = find(allies[i]);
    }

    return allies[i];
  }

  void unite(int elm1, int elm2) {
    int root1 = find(elm1);
    int root2 = find(elm2);

    if (root1 == root2) {
      return;
    }

    allies[root2] = root1;
    count -= 1;
  }

  int getCount() { return count; }
};

class Solution {
 public:
  int numIslands(vector<vector<char>> &grid) {
    // grid is empty
    if (grid.size() == 0 || grid[0].size() == 0) {
      return 0;
    }

    int row_num = grid.size();
    int col_num = grid[0].size();
    UnionFind uf(grid);

    for (int row = 0; row < row_num; ++row) {
      for (int col = 0; col < col_num; ++col) {
        if (grid[row][col] == '0') {
          continue;
        }

        // clear island element
        grid[row][col] = '0';

        // down
        if (row + 1 < row_num && grid[row + 1][col] == '1') {
          uf.unite(row * col_num + col, (row + 1) * col_num + col);
        }
        // right
        if (col + 1 < col_num && grid[row][col + 1] == '1') {
          uf.unite(row * col_num + col, row * col_num + col + 1);
        }
      }
    }

    return uf.getCount();
  }
};

// @lc code=end
