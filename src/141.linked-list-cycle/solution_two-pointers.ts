/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * https://leetcode-cn.com/problems/linked-list-cycle/
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

function hasCycle(head: ListNode | null): boolean {
  if (!head) {
    return false;
  }

  let slower: ListNode | null = head;
  let faster: ListNode | null = head;

  while (faster) {
    slower = (slower as ListNode).next;
    faster = faster.next ? faster.next.next : null;

    if (slower && slower === faster) {
      return true;
    }
  }

  return false;
}

// @lc code=end

export default hasCycle;
