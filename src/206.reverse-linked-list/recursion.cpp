/*
 * @lc app=leetcode.cn id=206 lang=cpp
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/
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

/**
 * time: O(n).
 *
 * space: O(n).
 */