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
  if (!head) {
    return false;
  }

  let slower: ListNode | null = head;
  let faster: ListNode | null = head.next;

  while (faster) {
    if (slower === faster) {
      return true;
    }

    slower = (slower as ListNode).next;
    faster = faster.next ? faster.next.next : null;
  }

  return false;
}
// @lc code=end

export default hasCycle;
