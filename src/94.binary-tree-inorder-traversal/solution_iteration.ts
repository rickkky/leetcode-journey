/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
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

function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  // the answer
  const sequences: number[] = [];
  // a stack to store unhandled left child node
  const stack: TreeNode[] = [];

  let node: TreeNode | null = root;

  while (node || stack.length > 0) {
    while (node) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop() as TreeNode;
    sequences.push(node.val);
    node = node.right;
  }

  return sequences;
}

// @lc code=end

export default inorderTraversal;
