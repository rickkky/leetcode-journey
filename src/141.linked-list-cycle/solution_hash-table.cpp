/*
 * @lc app=leetcode id=141 lang=cpp
 *
 * [141] Linked List Cycle
 */

#include <unordered_set>

using namespace std;

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
    unordered_set<ListNode *> dict;
    ListNode *curr = head;

    while (curr) {
      if (dict.find(curr) != dict.end()) {
        return true;
      }

      dict.insert(curr);
      curr = curr->next;
    }

    return false;
  }
};
// @lc code=end
