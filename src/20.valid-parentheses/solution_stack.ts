/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * https://leetcode-cn.com/problems/valid-parentheses/
 */

// @lc code=start

const pairs = new Map<string, string>([
  ['(', ')'],
  ['{', '}'],
  ['[', ']'],
]);

function isValid(s: string): boolean {
  // a stack to store left parentheses
  const stack: string[] = [];

  for (let i = 0; i < s.length; ++i) {
    const c = s.charAt(i);

    // push left parenthesis to stack
    if (pairs.has(c)) {
      stack.push(c);
    } else if (stack.length === 0 || c !== pairs.get(stack.pop() as string)) {
      return false;
    }
  }

  return stack.length === 0;
}

// @lc code=end

export default isValid;
