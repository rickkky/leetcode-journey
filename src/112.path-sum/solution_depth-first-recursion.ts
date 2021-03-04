/*
 * @lc app=leetcode.cn id=112 lang=typescript
 *
 * https://leetcode-cn.com/problems/path-sum/
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

function hasPathSumRecursive(node: TreeNode | undefined, sum: number): boolean {
  if (!node) {
    return false;
  }

  if (!node.left && !node.right) {
    return node.val === sum;
  }

  return (
    hasPathSum(node.left, sum - node.val) ||
    hasPathSum(node.right, sum - node.val)
  );
}

function hasPathSum(root: TreeNode | undefined, targetSum: number): boolean {
  return hasPathSumRecursive(root, targetSum);
}

/*
 * time: O(n).
 *
 * space: O(h). h: the height of the tree. worst: O(n). average: O(log(n)).
 */

// @lc code=end

export default hasPathSum;
