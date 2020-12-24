/*
 * @lc app=leetcode.cn id=141 lang=cpp
 *
 * [141] 环形链表
 */

#include <stdlib.h>

/**
 * Definition for singly-linked list.
 */
struct ListNode {
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};

// @lc code=start
class Solution {
 public:
  bool hasCycle(ListNode *head) {
    if (!head) {
      return false;
    }

    ListNode *slower = head;
    ListNode *faster = head;

    while (faster) {
      slower = slower->next;
      faster = faster->next ? faster->next->next : nullptr;

      if (slower && slower == faster) {
        return true;
      }
    }

    return false;
  }
};
// @lc code=end
