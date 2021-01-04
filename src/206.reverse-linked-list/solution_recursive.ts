/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
 */

/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// @lc code=start
function reverseListRecursive(node: ListNode | null): ListNode | null {
  if (!node || !node.next) {
    return node;
  }

  const head = reverseListRecursive(node.next);

  node.next.next = node;
  node.next = null;

  return head;
}

function reverseList(head: ListNode | null): ListNode | null {
  return reverseListRecursive(head);
}
// @lc code=end

export default reverseList;
