/*
 * @lc app=leetcode.cn id=138 lang=cpp
 *
 * https://leetcode-cn.com/problems/copy-list-with-random-pointer/
 */

#include <unordered_map>

using namespace std;

/**
 * Definition for a Node.
 */
class Node {
 public:
  int val;
  Node *next;
  Node *random;

  Node(int _val) {
    val = _val;
    next = nullptr;
    random = nullptr;
  }
};

// @lc code=start
class Solution {
 public:
  Node *copyRandomList(Node *head) {
    if (!head) {
      return nullptr;
    }

    unordered_map<Node *, Node *> dict = {{head, new Node(head->val)}};
    Node *curr = head;

    while (curr) {
      Node *node = dict.find(curr)->second;

      if (curr->random) {
        if (dict.find(curr->random) == dict.end()) {
          dict[curr->random] = new Node(curr->random->val);
        }
        node->random = dict[curr->random];
      }

      if (curr->next) {
        if (dict.find(curr->next) == dict.end()) {
          dict[curr->next] = new Node(curr->next->val);
        }
        node->next = dict[curr->next];
      }

      curr = curr->next;
    }

    return dict.find(head)->second;
  }
};
// @lc code=end
