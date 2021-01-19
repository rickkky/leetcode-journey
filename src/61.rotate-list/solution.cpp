/*
 * @lc app=leetcode.cn id=61 lang=cpp
 *
 * https://leetcode-cn.com/problems/rotate-list/
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
  // k >= 0
  ListNode *rotateRight(ListNode *head, int k) {
    if (!head) {
      return nullptr;
    }

    ListNode *curr = head;
    int count = 1;

    // find tail node and count length
    while (curr->next) {
      curr = curr->next;
      count += 1;
    }

    // make list cycle
    curr->next = head;

    // reset current pointer
    curr = head;

    // the index of the new tail node from head
    int index = count - 1 - (k % count);

    // find the new tail node
    for (int i = 0; i < index; ++i) {
      curr = curr->next;
    }

    // get new head node
    ListNode *ans = curr->next;

    // break the cycle list
    curr->next = nullptr;

    return ans;
  }
};
// @lc code=end
