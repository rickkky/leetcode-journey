/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/
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
function reverseList(head: ListNode | null) {
  let curr = head;
  let prev: ListNode | null = null;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

function isPalindrome(head: ListNode | null): boolean {
  if (!head || !head.next) {
    return true;
  }

  // resolved: first node of right part (list length is even)
  //           or middle node of the list (odd)
  let slower: ListNode = head;
  // resolved: null (list length is even) or tail (odd)
  let faster: ListNode | null = head;

  // find the right part of the linked list
  while (faster && faster.next) {
    slower = slower.next as ListNode;
    faster = faster.next.next;
  }

  // reverse right part of the list and get the original tail
  const tail = reverseList(slower);
  let left: ListNode | null = head;
  let right = tail;
  let answer = true;

  while (left && right) {
    if (left.val !== right.val) {
      answer = false;
      break;
    }

    left = left.next;
    right = right.next;
  }

  // restore the list
  reverseList(tail);

  return answer;
}
// @lc code=end

export default isPalindrome;
