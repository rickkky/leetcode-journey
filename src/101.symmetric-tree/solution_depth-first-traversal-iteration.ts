/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * https://leetcode-cn.com/problems/symmetric-tree/
 */

/**
 * Definition for a binary tree node.
 */
class TreeNode {
  val: number;
  left: TreeNode | undefined;
  right: TreeNode | undefined;
  constructor(val?: number, left?: TreeNode, right?: TreeNode) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? undefined : left;
    this.right = right === undefined ? undefined : right;
  }
}

// @lc code=start

function isSymmetric(root: TreeNode | undefined): boolean {
  if (!root) {
    return true;
  }

  // a stack to store unhandled tree nodes of left-first traversal
  const stack1: (TreeNode | undefined)[] = [root.left];
  // a stack to store unhandled tree nodes of right-first traversal
  const stack2: (TreeNode | undefined)[] = [root.right];

  while (stack1.length > 0 && stack2.length > 0) {
    const node1 = stack1.pop();
    const node2 = stack2.pop();

    if (!node1 && !node2) {
      continue;
    } else if (!node1 || !node2 || node1.val !== node2.val) {
      return false;
    }

    stack1.push(node1.left);
    stack2.push(node2.right);

    stack1.push(node1.right);
    stack2.push(node2.left);
  }

  return true;
}

// time: O(n).

// space: O(n).

// @lc code=end

export default isSymmetric;
