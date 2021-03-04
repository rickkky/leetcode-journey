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

function hasPathSum(root: TreeNode | undefined, targetSum: number): boolean {
  if (!root) {
    return false;
  }

  // a stack to store unhandled tree nodes
  const nodeStack: TreeNode[] = [root];
  // a stack to store patch numbers
  // for the corresponding nodes in the nodeStack
  const patchStack: number[] = [targetSum];

  while (nodeStack.length > 0) {
    const node = nodeStack.pop() as TreeNode;
    const patch = patchStack.pop() as number;

    if (!node.left && !node.right && node.val === patch) {
      return true;
    }

    if (node.left) {
      nodeStack.push(node.left);
      patchStack.push(patch - node.val);
    }

    if (node.right) {
      nodeStack.push(node.right);
      patchStack.push(patch - node.val);
    }
  }

  return false;
}

/*
 * time: O(n).
 *
 * space: O(h). h: the height of the tree. worst: O(n). average: O(log(n)).
 */

// @lc code=end

export default hasPathSum;
