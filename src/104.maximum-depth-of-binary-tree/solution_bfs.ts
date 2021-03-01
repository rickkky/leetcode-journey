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

  // a queue to store unhandled tree nodes
  const queue: TreeNode[] = [root];
  // record the depth of the tree
  let depth = 0;

  while (queue.length > 0) {
    const len = queue.length;

    for (let i = 0; i < len; ++i) {
      const node = queue.shift() as TreeNode;

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    depth += 1;
  }

  return depth;
}

// @lc code=end

export default maxDepth;
