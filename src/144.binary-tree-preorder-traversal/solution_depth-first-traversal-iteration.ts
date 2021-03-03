/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
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

function preorderTraversal(root: TreeNode | undefined): number[] {
  if (!root) {
    return [];
  }

  const sequences: number[] = [];
  // a stack to store unhandled tree nodes
  const stack: TreeNode[] = [root];

  while (stack.length > 0) {
    const node = stack.pop() as TreeNode;

    sequences.push(node.val);

    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);
    }
  }

  return sequences;
}

// time: O(n).

// space: O(n).

// @lc code=end

export default preorderTraversal;
