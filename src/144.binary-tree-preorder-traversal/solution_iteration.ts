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
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// @lc code=start

function preorderTraversal(root: TreeNode | null): number[] {
  // the answer
  const sequences: number[] = [];
  // a stack to store unhandled right child node
  const stack: TreeNode[] = [];

  let node: TreeNode | null = root;

  while (node) {
    sequences.push(node.val);

    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      node = node.left;
    } else if (stack.length > 0) {
      node = stack.pop() as TreeNode;
    } else {
      node = null;
    }
  }

  return sequences;
}

// @lc code=end

export default preorderTraversal;
