/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
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

function maxDepth(root: TreeNode | undefined): number {
  if (!root) {
    return 0;
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

// @lc code=end

export default maxDepth;
