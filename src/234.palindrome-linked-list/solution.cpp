/*
 * @lc app=leetcode.cn id=234 lang=cpp
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/
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
  ListNode *reverseList(ListNode *head) {
    ListNode *prev = nullptr;
    ListNode *curr = head;

    while (curr) {
      ListNode *temp = curr->next;
      curr->next = prev;
      prev = curr;
      curr = temp;
    }

    return prev;
  }

 public:
  bool isPalindrome(ListNode *head) {
    if (!head || !head->next) {
      return true;
    }

    // resolved: first node of right part (list length is even)
    //           or middle node of the list (odd)
    ListNode *slower = head;
    // resolved: null (list length is even) or tail (odd)
    ListNode *faster = head;

    // find the right part of the linked list
    while (faster && faster->next) {
      slower = slower->next;
      faster = faster->next->next;
    }

    // reverse right part of the list and get the original tail
    ListNode *tail = reverseList(slower);
    ListNode *left = head;
    ListNode *right = tail;
    bool ans = true;

    while (left && right) {
      if (left->val != right->val) {
        ans = false;
        break;
      }

      left = left->next;
      right = right->next;
    }

    // restore the list
    reverseList(tail);

    return ans;
  }
};

// @lc code=end
