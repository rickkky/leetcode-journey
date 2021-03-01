/*
 * @lc app=leetcode.cn id=150 lang=typescript
 *
 * https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/
 */

// @lc code=start

// the given RPN expression is always valid
function evalRPN(tokens: string[]): number {
  // a stack to store numbers
  const nums: number[] = [];

  for (let token of tokens) {
    if (token === '+' || token === '-' || token === '*' || token === '/') {
      const num1 = nums.pop() as number;
      const num2 = nums.pop() as number;

      if (token === '+') {
        nums.push(num2 + num1);
      } else if (token === '-') {
        nums.push(num2 - num1);
      } else if (token === '*') {
        nums.push(num2 * num1);
      } else if (token === '/') {
        nums.push(parseInt((num2 / num1).toString()));
      }
    } else {
      nums.push(parseInt(token));
    }
  }

  return nums.pop() as number;
}

// @lc code=end

export default evalRPN;
