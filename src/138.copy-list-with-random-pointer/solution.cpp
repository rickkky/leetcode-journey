/*
 * @lc app=leetcode.cn id=138 lang=cpp
 *
 * https://leetcode-cn.com/problems/copy-list-with-random-pointer/
 */

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

    Node *curr = head;

    // clone nodes and insert into original list
    while (curr) {
      Node *node = new Node(curr->val);
      node->next = curr->next;
      curr->next = node;

      curr = node->next;
    }

    // get the head pointer of the copy list
    Node *answer = head->next;

    // reset current pointer
    curr = head;

    // clone random pointers
    while (curr) {
      Node *copy = curr->next;
      if (curr->random) {
        copy->random = curr->random->next;
      }

      curr = copy->next;
    }

    // reset current pointer
    curr = head;

    // set next pointers of all nodes
    while (curr->next) {
      Node *next = curr->next;
      curr->next = next->next;

      curr = next;
    }

    return answer;
  }
};
// @lc code=end
