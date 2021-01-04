/*
 * @lc app=leetcode.cn id=206 lang=cpp
 *
 * [206] 反转链表
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
  ListNode *reverseListRecursive(ListNode *node) {
    if (!node || !node->next) {
      return node;
    }

    ListNode *head = reverseListRecursive(node->next);

    node->next->next = node;
    node->next = nullptr;

    return head;
  }

 public:
  ListNode *reverseList(ListNode *head) { return reverseListRecursive(head); }
};
// @lc code=end
