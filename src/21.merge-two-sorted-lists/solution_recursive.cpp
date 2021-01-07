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
 private:
  ListNode *mergeTwoListsRecursive(ListNode *p1, ListNode *p2) {
    if (!p1) {
      return p2;
    } else if (!p2) {
      return p1;
    }

    if (p1->val <= p2->val) {
      p1->next = mergeTwoListsRecursive(p1->next, p2);
      return p1;
    } else {
      p2->next = mergeTwoListsRecursive(p1, p2->next);
      return p2;
    }
  }

 public:
  ListNode *mergeTwoLists(ListNode *l1, ListNode *l2) {
    return mergeTwoListsRecursive(l1, l2);
  }
};
// @lc code=end
