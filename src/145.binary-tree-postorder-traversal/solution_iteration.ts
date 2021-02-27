/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
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

function postorderTraversal(root: TreeNode | null): number[] {
  // the answer
  const sequences: number[] = [];
  // a stack to store unhandled left child node
  const stack: TreeNode[] = [];

  // store the last node(.val) pushed to the sequences
  let prev: TreeNode | null = null;
  let node: TreeNode | null = root;

  while (node || stack.length > 0) {
    while (node) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop() as TreeNode;

    if (!node.right || node.right === prev) {
      sequences.push(node.val);
      prev = node;
      node = null;
    } else {
      stack.push(node);
      node = node.right;
    }
  }

  return sequences;
}

// @lc code=end

export default postorderTraversal;
