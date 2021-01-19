/*
 * @lc app=leetcode.cn id=142 lang=cpp
 *
 * https://leetcode-cn.com/problems/linked-list-cycle-ii/
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
  ListNode *findFirstEncounter(ListNode *head) {
    if (!head) {
      return nullptr;
    }

    ListNode *slower = head;
    ListNode *faster = head;

    while (faster) {
      slower = slower->next;
      faster = faster->next ? faster->next->next : nullptr;

      if (faster && faster == slower) {
        return faster;
      }
    }

    return nullptr;
  }

  ListNode *findCycleEntry(ListNode *head) {
    ListNode *encounter = findFirstEncounter(head);

    if (!encounter) {
      return nullptr;
    }

    ListNode *slower = head;
    ListNode *faster = encounter;

    while (faster) {
      if (faster == slower) {
        return faster;
      }

      slower = slower->next;
      faster = faster->next;
    }

    return nullptr;
  }

 public:
  ListNode *detectCycle(ListNode *head) { return findCycleEntry(head); }
};

// @lc code=end
