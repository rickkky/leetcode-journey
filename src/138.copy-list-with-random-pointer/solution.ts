/*
 * @lc app=leetcode.cn id=138 lang=typescript
 *
 * https://leetcode-cn.com/problems/copy-list-with-random-pointer/
 */

/**
 * Definition for Node.
 */
class Node {
  val: number;
  next: Node | null;
  random: Node | null;
  constructor(val?: number, next?: Node, random?: Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

// @lc code=start
function copyRandomList(head: Node | null): Node | null {
  if (!head) {
    return null;
  }

  let curr: Node | null = head;

  // clone nodes and insert into original list
  while (curr) {
    const node: Node = new Node(curr.val);
    node.next = curr.next;
    curr.next = node;

    curr = node.next;
  }

  // get the head node of the copy list
  const answer = head.next;

  // reset current pointer
  curr = head;

  // copy random pointers
  while (curr) {
    const copy: Node = curr.next as Node;
    if (curr.random) {
      copy.random = curr.random.next;
    }

    curr = copy.next;
  }

  // reset current pointer
  curr = head;

  // set next pointers of all nodes
  while (curr.next) {
    const next: Node = curr.next;
    curr.next = next.next;

    curr = next;
  }

  return answer;
}
// @lc code=end

export default copyRandomList;
