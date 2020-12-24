/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
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
function detectCycle(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  const set = new Set<ListNode>();
  let current: ListNode | null = head;

  while (current) {
    if (set.has(current)) {
      return current;
    }

    set.add(current);
    current = current.next;
  }

  return null;
}
// @lc code=end

export default detectCycle;
