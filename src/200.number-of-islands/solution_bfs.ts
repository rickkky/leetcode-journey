/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * https://leetcode-cn.com/problems/number-of-islands/
 */

// @lc code=start

// grid is not empty
// row, col are valid
function clearIslandBfs(grid: string[][], row: number, col: number) {
  const rowNum = grid.length;
  const colNum = grid[0].length;

  // a queue to store unhandled elements of the island
  // queue element: [rowIndex, colIndex]
  const queue: [number, number][] = [];

  // clear grid element and push it to queue
  grid[row][col] = '0';
  queue.push([row, col]);

  while (queue.length > 0) {
    const rc = queue.shift() as [number, number];
    const r = rc[0];
    const c = rc[1];

    // up
    if (r - 1 >= 0 && grid[r - 1][c] === '1') {
      grid[r - 1][c] = '0';
      queue.push([r - 1, c]);
    }
    // down
    if (r + 1 < rowNum && grid[r + 1][c] === '1') {
      grid[r + 1][c] = '0';
      queue.push([r + 1, c]);
    }
    // left
    if (c - 1 >= 0 && grid[r][c - 1] === '1') {
      grid[r][c - 1] = '0';
      queue.push([r, c - 1]);
    }
    // right
    if (c + 1 < colNum && grid[r][c + 1] === '1') {
      grid[r][c + 1] = '0';
      queue.push([r, c + 1]);
    }
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
        clearIslandBfs(grid, row, col);
      }
    }
  }

  return islandNum;
}

// @lc code=end

export default numIslands;
