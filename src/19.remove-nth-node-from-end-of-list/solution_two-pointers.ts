/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
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

// n is valid - [1, len]
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // Use a sentry node to make sure
  // we have a previous node of head.
  const sentry = new ListNode(0, head);

  // resolved: left = target.prev
  let left = sentry;
  // resolved: right = tail
  let right = sentry;

  // find target.prev
  for (let i = 0; i < n; ++i) {
    right = right.next as ListNode;
  }
  while (right.next) {
    right = right.next;
    left = left.next as ListNode;
  }

  // delete target
  left.next = (left.next as ListNode).next;

  return sentry.next;
}

// @lc code=end

export default removeNthFromEnd;
