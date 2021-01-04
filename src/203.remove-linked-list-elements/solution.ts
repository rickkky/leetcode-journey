/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * https://leetcode-cn.com/problems/remove-linked-list-elements/
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
function removeElements(head: ListNode | null, val: number): ListNode | null {
  const sentry = new ListNode(0, head);
  let current: ListNode | null = sentry;

  while (current) {
    if (current.next && current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return sentry.next;
}
// @lc code=end

export default removeElements;
