/*
 * @lc app=leetcode.cn id=328 lang=cpp
 *
 * https://leetcode-cn.com/problems/odd-even-linked-list/
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
  ListNode *oddEvenList(ListNode *head) {
    if (!head) {
      return nullptr;
    }

    ListNode *odd = head;
    ListNode *even = head->next;
    ListNode *even_head = even;

    while (even && even->next) {
      odd->next = even->next;
      odd = odd->next;
      even->next = odd->next;
      even = even->next;
    }

    odd->next = even_head;

    return head;
  }
};
// @lc code=end
