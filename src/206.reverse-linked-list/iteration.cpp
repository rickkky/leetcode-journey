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
 public:
  ListNode *reverseList(ListNode *head) {
    ListNode *prev = nullptr;
    ListNode *curr = head;

    while (curr) {
      ListNode *next = curr->next;

      curr->next = prev;
      prev = curr;
      curr = next;
    }

    return prev;
  }
};

// @lc code=end

/**
 * time: O(n).
 *
 * space: O(1).
 */