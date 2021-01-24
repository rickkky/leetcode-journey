/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * https://leetcode-cn.com/problems/number-of-islands/
 */

// @lc code=start

class UnionFind {
  private allies: number[] = [];

  private count: number = 0;

  // grid is not empty
  constructor(grid: string[][]) {
    const rowNum = grid.length;
    const colNum = grid[0].length;

    for (let row = 0; row < rowNum; ++row) {
      for (let col = 0; col < colNum; ++col) {
        if (grid[row][col] === '1') {
          this.allies.push(row * colNum + col);
          this.count += 1;
        } else {
          this.allies.push(-1);
        }
      }
    }
  }

  find(i: number): number {
    if (this.allies[i] !== i) {
      // compress path
      this.allies[i] = this.find(this.allies[i]);
    }

    return this.allies[i];
  }

  unite(elm1: number, elm2: number): void {
    const root1 = this.find(elm1);
    const root2 = this.find(elm2);

    if (root1 === root2) {
      return;
    }

    this.allies[root2] = root1;
    this.count -= 1;
  }

  getCount(): number {
    return this.count;
  }
}

function numIslands(grid: string[][]): number {
  // grid is empty
  if (grid.length === 0 || grid[0].length === 0) {
    return 0;
  }

  const rowNum = grid.length;
  const colNum = grid[0].length;
  const uf = new UnionFind(grid);

  for (let row = 0; row < rowNum; ++row) {
    for (let col = 0; col < colNum; ++col) {
      if (grid[row][col] === '0') {
        continue;
      }

      // clear island element
      grid[row][col] = '0';

      // down
      if (row + 1 < rowNum && grid[row + 1][col] === '1') {
        uf.unite(row * colNum + col, (row + 1) * colNum + col);
      }
      // right
      if (col + 1 < colNum && grid[row][col + 1] === '1') {
        uf.unite(row * colNum + col, row * colNum + col + 1);
      }
    }
  }

  return uf.getCount();
}

// @lc code=end

export default numIslands;
