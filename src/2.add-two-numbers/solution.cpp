/*
 * @lc app=leetcode.cn id=2 lang=cpp
 *
 * https://leetcode-cn.com/problems/add-two-numbers/
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
  ListNode *addTwoNumbers(ListNode *l1, ListNode *l2) {
    ListNode *sentry = new ListNode(0);
    ListNode *curr = sentry;
    ListNode *p1 = l1;
    ListNode *p2 = l2;

    // carry - {0, 1}
    int carry = 0;

    while (p1 || p2 || carry > 0) {
      int num1 = p1 ? p1->val : 0;
      int num2 = p2 ? p2->val : 0;
      int sum = num1 + num2 + carry;

      carry = static_cast<int>(sum / 10);
      curr->next = new ListNode(sum % 10);
      curr = curr->next;
      p1 = p1 ? p1->next : nullptr;
      p2 = p2 ? p2->next : nullptr;
    }

    ListNode *ans = sentry->next;
    delete sentry;
    return ans;
  }
};
// @lc code=end
