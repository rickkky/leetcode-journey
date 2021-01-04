/*
 * @lc app=leetcode.cn id=707 lang=cpp
 *
 * https://leetcode-cn.com/problems/design-linked-list/
 */

// @lc code=start
class MyLinkedList {
 private:
  struct ListNode {
    int val;
    ListNode *next;
  };

  ListNode *head;

 public:
  // Initialize your data structure here.
  MyLinkedList() { head = nullptr; }

  // Get the value of the index-th node in the linked list.
  // If the index is invalid, return -1.
  int get(int index) {
    if (index < 0 || !head) {
      return -1;
    }

    ListNode *curr = head;

    // find the target node
    for (int i = 0; i < index; ++i) {
      if (!curr->next) {
        return -1;
      }

      curr = curr->next;
    }

    return curr->val;
  }

  // Add a node of value val before the first element of the linked list.
  // After the insertion,
  // the new node will be the first node of the linked list.
  void addAtHead(int val) { head = new ListNode({val, head}); }

  // Append a node of value val to the last element of the linked list.
  void addAtTail(int val) {
    if (!head) {
      return addAtHead(val);
    }

    ListNode *curr = head;

    // find the tail node
    while (curr->next) {
      curr = curr->next;
    }

    curr->next = new ListNode({val, nullptr});
  }

  // Add a node of value val before the index-th node in the linked list.
  // If index equals to the length of linked list,
  // the node will be appended to the end of linked list.
  // If index is greater than the length, the node will not be inserted.
  void addAtIndex(int index, int val) {
    if (index == 0) {
      return addAtHead(val);
    } else if (index < 0 || !head) {
      return;
    }

    ListNode *curr = head;

    // find the (index - 1)-th node
    for (int i = 0; i < index - 1; ++i) {
      if (!curr->next) {
        return;
      }

      curr = curr->next;
    }

    curr->next = new ListNode({val, curr->next});
  }

  // Delete the index-th node in the linked list, if the index is valid.
  void deleteAtIndex(int index) {
    if (index < 0 || !head) {
      return;
    } else if (index == 0) {
      head = head->next;
      return;
    }

    ListNode *curr = head;

    // find the (index - 1)-th node
    for (int i = 0; i < index - 1; ++i) {
      if (!curr->next) {
        return;
      }

      curr = curr->next;
    }

    ListNode *target = curr->next;

    if (!target) {
      return;
    }

    curr->next = target->next;
    delete target;
  }
};
// @lc code=end
