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
 public:
  Node *flatten(Node *head) {
    if (!head) {
      return nullptr;
    }

    // store unhandled nodes
    stack<Node *> nodes;
    nodes.push(head);

    Node *sentry = new Node();
    Node *prev = sentry;

    while (!nodes.empty()) {
      Node *curr = nodes.top();
      nodes.pop();

      prev->next = curr;
      curr->prev = prev;
      prev = curr;

      if (curr->next) {
        nodes.push(curr->next);
      }

      if (curr->child) {
        nodes.push(curr->child);
        curr->child = nullptr;
      }
    }

    // free sentry
    head->prev = nullptr;
    delete sentry;

    return head;
  }
};
// @lc code=end
