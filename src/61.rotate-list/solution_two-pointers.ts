/*
 * @lc app=leetcode.cn id=61 lang=typescript
 *
 * https://leetcode-cn.com/problems/rotate-list/
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
// k >= 0, int
function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head) {
    return null;
  }

  const sentry = new ListNode(0, head);

  // resolved: original tail
  let p1 = sentry;
  // resolved: new tail
  let p2 = sentry;

  for (let i = 0; i < k; ++i) {
    p1 = p1.next as ListNode;

    // If p1 points to the original tail after this for-loop,
    // p2 will point to sentry node finally.
    // The sentry node cannot be the new tail node,
    // so we need to skip this case.
    if (!p1.next) {
      p1 = sentry;
    }
  }
  while (p1.next) {
    p1 = p1.next;
    p2 = p2.next as ListNode;
  }

  const answer = p2.next || head;

  p1.next = head;
  p2.next = null;

  return answer;
}
// @lc code=end

export default rotateRight;
