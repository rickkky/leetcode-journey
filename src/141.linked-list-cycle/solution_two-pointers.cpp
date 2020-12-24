/*
 * @lc app=leetcode.cn id=141 lang=cpp
 *
 * [141] 环形链表
 */

struct ListNode {
  int val;
  ListNode *next;
};

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *   int val;
 *   ListNode *next;
 *   ListNode(int x) : val(x), next(NULL) {}
 * };
 */

class Solution {
 public:
  bool hasCycle(ListNode *head) {
    if (!head) {
      return false;
    }

    ListNode *slower = head;
    ListNode *faster = head->next;

    while (faster) {
      if (slower == faster) {
        return true;
      }

      slower = slower->next;
      faster = faster->next ? faster->next->next : nullptr;
    }

    return false;
  }
};
// @lc code=end
