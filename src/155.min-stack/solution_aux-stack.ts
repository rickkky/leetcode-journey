/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * https://leetcode-cn.com/problems/min-stack/
 */

// @lc code=start

class MinStack {
  private dataList: number[] = [];

  private minList: number[] = [];

  push(x: number): void {
    this.dataList.push(x);

    if (this.minList.length === 0) {
      this.minList.push(x);
    } else {
      this.minList.push(Math.min(x, this.minList[this.minList.length - 1]));
    }
  }

  // stack is not empty
  pop(): void {
    this.dataList.pop();
    this.minList.pop();
  }

  // stack is not empty
  top(): number {
    return this.dataList[this.dataList.length - 1];
  }

  // stack is not empty
  getMin(): number {
    return this.minList[this.minList.length - 1];
  }
}

// @lc code=end

export default MinStack;
