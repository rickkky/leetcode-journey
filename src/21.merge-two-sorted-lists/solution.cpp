/*
 * @lc app=leetcode.cn id=21 lang=cpp
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 */

/**
 * Definition for singly-linked list.
 */
struct ListNode {
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(nullptr) {}
};

// @lc code=start

class Solution {
 public:
  ListNode *mergeTwoLists(ListNode *l1, ListNode *l2) {
    ListNode *sentry = new ListNode(0);
    ListNode *curr = sentry;
    ListNode *p1 = l1;
    ListNode *p2 = l2;

    while (p1 && p2) {
      if (p1->val <= p2->val) {
        curr->next = p1;
        p1 = p1->next;
      } else {
        curr->next = p2;
        p2 = p2->next;
      }
      curr = curr->next;
    }

    if (p1) {
      curr->next = p1;
    } else {
      curr->next = p2;
    }

    ListNode *ans = sentry->next;
    delete sentry;
    return ans;
  }
};

// @lc code=end
