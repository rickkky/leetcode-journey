/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * https://leetcode-cn.com/problems/number-of-islands/
 */

// @lc code=start

// grid is not empty
// row, col are valid
function clearIslandDfsRecursive(grid: string[][], row: number, col: number) {
  const rowNum = grid.length;
  const colNum = grid[0].length;

  // reset current element
  grid[row][col] = '0';

  // up
  if (row - 1 >= 0 && grid[row - 1][col] === '1') {
    grid[row - 1][col] = '0';
    clearIslandDfsRecursive(grid, row - 1, col);
  }
  // down
  if (row + 1 < rowNum && grid[row + 1][col] === '1') {
    grid[row + 1][col] = '0';
    clearIslandDfsRecursive(grid, row + 1, col);
  }
  // left
  if (col - 1 >= 0 && grid[row][col - 1] === '1') {
    grid[row][col - 1] = '0';
    clearIslandDfsRecursive(grid, row, col - 1);
  }
  // right
  if (col + 1 < colNum && grid[row][col + 1] === '1') {
    grid[row][col + 1] = '0';
    clearIslandDfsRecursive(grid, row, col + 1);
  }
}

function numIslands(grid: string[][]): number {
  // grid is empty
  if (grid.length === 0 || grid[0].length === 0) {
    return 0;
  }

  const rowNum = grid.length;
  const colNum = grid[0].length;
  let islandNum = 0;

  for (let row = 0; row < rowNum; ++row) {
    for (let col = 0; col < colNum; ++col) {
      if (grid[row][col] === '1') {
        islandNum += 1;
        clearIslandDfsRecursive(grid, row, col);
      }
    }
  }

  return islandNum;
}

// @lc code=end

export default numIslands;
