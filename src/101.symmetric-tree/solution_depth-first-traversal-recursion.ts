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

function compare(
  node1: TreeNode | undefined,
  node2: TreeNode | undefined,
): boolean {
  if (!node1 && !node2) {
    return true;
  } else if (!node1 || !node2 || node1.val !== node2.val) {
    return false;
  }

  return compare(node1.left, node2.right) && compare(node1.right, node2.left);
}

function isSymmetric(root: TreeNode | undefined): boolean {
  if (!root) {
    return true;
  }

  return compare(root.left, root.right);
}

// time: O(n).

// space: O(n).

// @lc code=end

export default isSymmetric;
