/*
 * @lc app=leetcode.cn id=739 lang=typescript
 *
 * https://leetcode-cn.com/problems/daily-temperatures/
 */

// @lc code=start

function dailyTemperatures(temperatures: number[]): number[] {
  const answer: number[] = [];
  // a stack to store unhandled temperature indices
  const stack: number[] = [];

  for (let [i, t] of temperatures.entries()) {
    while (stack.length > 0) {
      const i0 = stack[stack.length - 1];
      const t0 = temperatures[i0];

      if (t <= t0) {
        break;
      }

      stack.pop();
      answer[i0] = i - i0;
    }

    stack.push(i);
  }

  while (stack.length > 0) {
    const i = stack.pop() as number;
    answer[i] = 0;
  }

  return answer;
}

// @lc code=end

export default dailyTemperatures;
