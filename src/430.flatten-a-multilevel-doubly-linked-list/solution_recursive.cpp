/*
 * @lc app=leetcode.cn id=430 lang=cpp
 *
 * https://leetcode-cn.com/problems/flatten-a-multilevel-doubly-linked-list/
 */

#include <stack>

using namespace std;

/**
 * Definition for a Node.
 */
class Node {
 public:
  int val;
  Node *prev;
  Node *next;
  Node *child;
};

// @lc code=start

class Solution {
 private:
  Node *flattenRecursive(Node *prev, Node *curr) {
    if (!curr) {
      return prev;
    }

    curr->prev = prev;
    prev->next = curr;

    // store next node
    Node *next = curr->next;
    // resolve child list first
    Node *tail = flattenRecursive(curr, curr->child);

    curr->child = nullptr;

    return flattenRecursive(tail, next);
  }

 public:
  Node *flatten(Node *head) {
    if (!head) {
      return nullptr;
    }

    Node *sentry = new Node();
    flattenRecursive(sentry, head);

    // free sentry
    head->prev = nullptr;
    delete sentry;

    return head;
  }
};

// @lc code=end
