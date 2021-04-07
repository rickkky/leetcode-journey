/*
 * @lc app=leetcode.cn id=92 lang=typescript
 *
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/
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

/**
 * `left` and `right` are integers
 * 0 <= `left` <= `right` <= list length
 */
function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number,
): ListNode | null {
  let curr: ListNode | null = head;
  let prev: ListNode | null = null;

  // find sub-list head
  for (let i = 1; i < left; ++i) {
    prev = curr;
    curr = (curr as ListNode).next;
  }

  const subPrev = prev;
  const subHead = curr;

  prev = null;

  // reverse sub-list
  for (let i = left; i <= right; ++i) {
    const next = (curr as ListNode).next;

    (curr as ListNode).next = prev;
    prev = curr;
    curr = next;
  }

  if (subPrev) {
    subPrev.next = prev;
  }

  (subHead as ListNode).next = curr;

  return left === 1 ? prev : head;
}

// @lc code=end

/**
 * time: O(n).
 *
 * space: O(1).
 */

export default reverseBetween;
