/*
 * @lc app=leetcode.cn id=160 lang=cpp
 *
 * https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
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
  ListNode *getIntersectionNode(ListNode *l1, ListNode *l2) {
    if (!l1 || !l2) {
      return nullptr;
    }

    ListNode *p1 = l1;
    ListNode *p2 = l2;

    while (p1 != p2) {
      p1 = p1 ? p1->next : l2;
      p2 = p2 ? p2->next : l1;
    }

    return p1;
  }
};

// @lc code=end
