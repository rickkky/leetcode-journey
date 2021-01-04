/*
 * @lc app=leetcode.cn id=203 lang=cpp
 *
 * https://leetcode-cn.com/problems/remove-linked-list-elements/
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
  ListNode *removeElements(ListNode *head, int val) {
    ListNode *sentry = new ListNode(0, head);
    ListNode *curr = sentry;

    while (curr) {
      if (curr->next && curr->next->val == val) {
        ListNode *target = curr->next;
        curr->next = target->next;
        delete target;
      } else {
        curr = curr->next;
      }
    }

    ListNode *ans = sentry->next;
    delete sentry;
    return ans;
  }
};
// @lc code=end
