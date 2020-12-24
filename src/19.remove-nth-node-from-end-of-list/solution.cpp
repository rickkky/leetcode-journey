/*
 * @lc app=leetcode.cn id=19 lang=cpp
 *
 * [19] 删除链表的倒数第N个节点
 */

/**
 * Definition for singly-linked list.
 */
struct ListNode {
  int val;
  ListNode *next;
  ListNode() : val(0), next(nullptr) {}
  ListNode(int x) : val(x), next(nullptr) {}
  ListNode(int x, ListNode *next) : val(x), next(next) {}
};

// @lc code=start
class Solution {
 public:
  // n is valid - [1, len]
  ListNode *removeNthFromEnd(ListNode *head, int n) {
    // Use a sentry node to make sure
    // we have a previous node of head.
    ListNode *sentry = new ListNode(0, head);

    // resolved: left = target->prev
    ListNode *left = sentry;
    // resolved: right = tail
    ListNode *right = sentry;

    // find target->prev
    for (int i = 0; i < n; ++i) {
      right = right->next;
    }
    while (right->next) {
      right = right->next;
      left = left->next;
    }

    // delete target
    ListNode *target = left->next;
    left->next = target->next;
    delete target;

    ListNode *ans = sentry->next;
    delete sentry;
    return ans;
  }
};
// @lc code=end
