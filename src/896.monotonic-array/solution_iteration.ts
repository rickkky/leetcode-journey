/*
 * @lc app=leetcode.cn id=896 lang=typescript
 *
 * https://leetcode-cn.com/problems/monotonic-array/
 */

// @lc code=start

// return: -1 - decrease, 1 - increase, 0 - uncertain.
function trend(n1: number, n2: number): -1 | 0 | 1 {
  const n = n2 - n1;

  if (n === 0) {
    return 0;
  } else if (n > 0) {
    return 1;
  } else {
    return -1;
  }
}

// a.length >= 1
function isMonotonic(a: number[]): boolean {
  const length = a.length;

  if (length <= 1) {
    return true;
  }

  let flag = trend(a[0], a[1]);

  for (let i = 2; i < length; i++) {
    const tempFlag = trend(a[i - 1], a[i]);

    if (flag === 0) {
      flag = tempFlag;
    } else if (tempFlag !== 0 && tempFlag !== flag) {
      return false;
    }
  }

  return true;
}

// @lc code=end

export default isMonotonic;
