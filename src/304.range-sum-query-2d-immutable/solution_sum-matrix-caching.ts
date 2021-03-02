/*
 * @lc app=leetcode.cn id=304 lang=typescript
 *
 * https://leetcode-cn.com/problems/range-sum-query-2d-immutable/
 */

// @lc code=start

class NumMatrix {
  private sumMatrix: number[][] = [];

  constructor(matrix: number[][]) {
    const rows = matrix.length;

    if (rows === 0) {
      return;
    }

    const cols = matrix[0].length;

    // initialize the sum matrix with 0
    this.sumMatrix = new Array(rows + 1)
      .fill([])
      .map(() => new Array(cols + 1).fill(0));

    for (let r = 0; r < rows; ++r) {
      for (let c = 0; c < cols; ++c) {
        this.sumMatrix[r + 1][c + 1] =
          this.sumMatrix[r][c + 1] +
          this.sumMatrix[r + 1][c] -
          this.sumMatrix[r][c] +
          matrix[r][c];
      }
    }
  }

  // args are valid and row1 <= row2 && col1 <= col2
  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return (
      this.sumMatrix[row2 + 1][col2 + 1] -
      this.sumMatrix[row1][col2 + 1] -
      this.sumMatrix[row2 + 1][col1] +
      this.sumMatrix[row1][col1]
    );
  }
}

// @lc code=end

export default NumMatrix;
