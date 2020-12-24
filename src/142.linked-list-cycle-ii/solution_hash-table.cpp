/*
 * @lc app=leetcode.cn id=142 lang=cpp
 *
 * [142] 环形链表 II
 */

#include <unordered_set>

using namespace std;

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
  ListNode *detectCycle(ListNode *head) {
    if (!head) {
      return nullptr;
    }

    unordered_set<ListNode *> dict;
    ListNode *curr = head;

    while (curr) {
      if (dict.find(curr) != dict.end()) {
        return curr;
      }

      dict.insert(curr);
      curr = curr->next;
    }

    return nullptr;
  }
};
// @lc code=end
