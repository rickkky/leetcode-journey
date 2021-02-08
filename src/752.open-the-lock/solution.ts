/*
 * @lc app=leetcode.cn id=752 lang=typescript
 *
 * https://leetcode-cn.com/problems/open-the-lock/
 */

// @lc code=start

// index - int, [0, 3]
// operand - {-1, 1}
function getNextLockState(state: string, index: number, operand: number) {
  let numi = parseInt(state[index]) + operand;

  if (numi > 9) {
    numi = 0;
  } else if (numi < 0) {
    numi = 9;
  }

  return state.slice(0, index) + numi + state.slice(index + 1);
}

function openLock(deadends: string[], target: string): number {
  // an unordered set to store deadend states
  const deadendStates = new Set(deadends.values());
  // an unordered set to store visited states
  const visitedStates = new Set();
  // a queue to store unhandled states
  const states = [];

  states.push('0000');
  visitedStates.add('0000');

  let depth = 0;

  // while states is not empty
  while (states.length > 0) {
    // the states.length may change in the for-loop
    const len = states.length;

    for (let n = 0; n < len; ++n) {
      const state = states.shift() as string;

      if (state === target) {
        return depth;
      }

      // skip while it's a deadend
      if (deadendStates.has(state)) {
        continue;
      }

      for (let i = 0; i < 4; ++i) {
        for (let op = -1; op <= 1; op += 2) {
          const nextState = getNextLockState(state, i, op);

          // skip while nextState is visited
          if (visitedStates.has(nextState)) {
            continue;
          }

          states.push(nextState);
          visitedStates.add(nextState);
        }
      }
    }

    depth += 1;
  }

  return -1;
}

// @lc code=end

// export default openLock;
