/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
 */

/**
 * Definition for singly-linked list.
 */
interface ListNode {
  val: number;
  next: ListNode | null;
}

// @lc code=start
function hasCycle(head: ListNode | null): boolean {
  const set = new Set<ListNode>();
  let current = head;

  while (current) {
    if (set.has(current)) {
      return true;
    }

    set.add(current);
    current = current.next;
  }

  return false;
}
// @lc code=end

export default hasCycle;
