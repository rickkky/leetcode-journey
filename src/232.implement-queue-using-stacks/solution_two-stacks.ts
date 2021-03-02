/*
 * @lc app=leetcode.cn id=232 lang=typescript
 *
 * https://leetcode-cn.com/problems/implement-queue-using-stacks/
 */

// @lc code=start

class MyQueue {
  // stack
  private s1: number[] = [];

  // stack
  private s2: number[] = [];

  private front: number | undefined;

  push(val: number): void {
    if (this.s1.length === 0) {
      this.front = val;
    }

    this.s1.push(val);
  }

  // the queue is not empty
  pop(): number {
    if (this.s2.length === 0) {
      while (this.s1.length > 0) {
        this.s2.push(this.s1.pop() as number);
      }

      this.front = undefined;
    }

    return this.s2.pop() as number;
  }

  // the queue is not empty
  peek(): number {
    if (this.s2.length > 0) {
      return this.s2[this.s2.length - 1];
    } else {
      return this.front as number;
    }
  }

  empty(): boolean {
    return this.s1.length === 0 && this.s2.length === 0;
  }
}

// @lc code=end

export default MyQueue;
