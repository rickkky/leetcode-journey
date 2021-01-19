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
    ListNode *prev;
    ListNode *next;
  };

  ListNode *head;

  ListNode *tail;

  int length;

  // Get the index-th node in the linked list.
  ListNode *getNode(int index) {
    if (index < 0 || index > length - 1) {
      return nullptr;
    }

    // determine traverse ascending or descending
    return index < length / 2 ? getNodeAsc(index) : getNodeDesc(index);
  }

  // index is valid
  ListNode *getNodeAsc(int index) {
    ListNode *curr = head;

    for (int i = 0; i < index; ++i) {
      if (!curr->next) {
        return nullptr;
      }

      curr = curr->next;
    }

    return curr;
  }

  // index is valid
  ListNode *getNodeDesc(int index) {
    ListNode *curr = tail;

    for (int i = 0; i < length - 1 - index; ++i) {
      if (!curr->prev) {
        return nullptr;
      }

      curr = curr->prev;
    }

    return curr;
  }

 public:
  // Initialize your data structure here.
  MyLinkedList() {
    head = nullptr;
    tail = nullptr;
    length = 0;
  }

  // Get the value of the index-th node in the linked list.
  // If the index is invalid, return -1.
  int get(int index) {
    ListNode *node = getNode(index);
    return node ? node->val : -1;
  }

  // Add a node of value val before the first element of the linked list.
  // After the insertion,
  // the new node will be the first node of the linked list.
  void addAtHead(int val) {
    ListNode *old_head = head;

    head = new ListNode({val, nullptr, old_head});

    if (old_head) {
      old_head->prev = head;
    } else {
      tail = head;
    }

    length += 1;
  }

  // Append a node of value val to the last element of the linked list.
  void addAtTail(int val) {
    ListNode *old_tail = tail;

    tail = new ListNode({val, old_tail, nullptr});

    if (old_tail) {
      old_tail->next = tail;
    } else {
      head = tail;
    }

    length += 1;
  }

  // Add a node of value val before the index-th node in the linked list.
  // If index equals to the length of linked list,
  // the node will be appended to the end of linked list.
  // If index is greater than the length, the node will not be inserted.
  void addAtIndex(int index, int val) {
    if (index < 0 || index > length) {
      return;
    } else if (index == 0) {
      return addAtHead(val);
    } else if (index == length) {
      return addAtTail(val);
    }

    ListNode *next_node = getNode(index);
    ListNode *prev_node = next_node->prev;
    ListNode *node = new ListNode({val, prev_node, next_node});
    next_node->prev = node;
    prev_node->next = node;

    length += 1;
  }

  // Delete the index-th node in the linked list, if the index is valid.
  void deleteAtIndex(int index) {
    if (index < 0 || index > length - 1) {
      return;
    } else if (index == 0) {
      // delete head
      ListNode *target = head;
      head = target->next;
      delete target;
      if (head) {
        head->prev = nullptr;
      } else {
        tail = nullptr;
      }
    } else if (index == length - 1) {
      // delete tail
      ListNode *target = tail;
      tail = target->prev;
      delete target;
      if (tail) {
        tail->next = nullptr;
      } else {
        head = nullptr;
      }
    } else {
      ListNode *target = getNode(index);
      ListNode *prev_node = target->prev;
      ListNode *next_node = target->next;
      prev_node->next = next_node;
      next_node->prev = prev_node;
      delete target;
    }

    length -= 1;
  }
};

// @lc code=end
