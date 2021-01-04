/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * https://leetcode-cn.com/problems/linked-list-cycle-ii/
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
function findFirstEncounter(head: ListNode | null) {
  if (!head) {
    return null;
  }

  let slower: ListNode | null = head;
  let faster: ListNode | null = head;

  while (faster) {
    slower = (slower as ListNode).next;
    faster = faster.next ? faster.next.next : null;

    if (slower && slower === faster) {
      return slower;
    }
  }

  return null;
}

function findCycleEntry(head: ListNode | null) {
  const encounter = findFirstEncounter(head);

  if (!encounter) {
    return null;
  }

  let first = head as ListNode;
  let second: ListNode | null = encounter;

  while (second) {
    if (first === second) {
      return first;
    }

    first = first.next as ListNode;
    second = second.next;
  }

  return null;
}

function detectCycle(head: ListNode | null): ListNode | null {
  return findCycleEntry(head);
}
// @lc code=end

export default detectCycle;
