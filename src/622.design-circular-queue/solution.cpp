/*
 * @lc app=leetcode.cn id=622 lang=cpp
 *
 * https://leetcode-cn.com/problems/design-circular-queue/
 */

#include <vector>

using namespace std;

// @lc code=start

class MyCircularQueue {
 private:
  int capacity;

  vector<int> list;

  int front;

  int rear;

 public:
  // Initialize your data structure here.
  MyCircularQueue(int k) {
    capacity = k + 1;
    list.assign(capacity, 0);
    front = 0;
    rear = 0;
  }

  // Insert an element into the circular queue.
  // Return true if the operation is successful.
  bool enQueue(int value) {
    if (isFull()) {
      return false;
    }

    list[rear] = value;
    rear = (rear + 1) % capacity;

    return true;
  }

  // Delete an element from the circular queue.
  // Return true if the operation is successful.
  bool deQueue() {
    if (isEmpty()) {
      return false;
    }

    front = (front + 1) % capacity;

    return true;
  }

  // Get the front item from the queue.
  // If the queue is empty, return -1.
  int Front() {
    if (isEmpty()) {
      return -1;
    }

    return list[front];
  }

  // Get the last item from the queue.
  // If the queue is empty, return -1.
  int Rear() {
    if (isEmpty()) {
      return -1;
    }

    return list[(rear - 1 + capacity) % capacity];
  }

  // Checks whether the circular queue is empty or not.
  bool isEmpty() { return front == rear; }

  // Checks whether the circular queue is full or not.
  bool isFull() { return (rear + 1) % capacity == front; }
};

// @lc code=end
