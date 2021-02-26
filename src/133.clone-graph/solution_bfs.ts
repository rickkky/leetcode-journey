/*
 * @lc app=leetcode.cn id=133 lang=typescript
 *
 * https://leetcode-cn.com/problems/clone-graph/
 */

/**
 * Definition for Node.
 */
class Node {
  val: number;
  neighbors: Node[];
  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

// @lc code=start

function cloneGraph(node: Node | null): Node | null {
  if (!node) {
    return null;
  }

  // an unordered map to store <original node, cloned node>
  const map = new Map<Node, Node>([[node, new Node(node.val)]]);
  // a queue to store unhandled nodes
  const queue: Node[] = [node];

  while (queue.length > 0) {
    const currNode = queue.shift() as Node;
    const clonedNode = map.get(currNode) as Node;

    for (let neighbor of currNode.neighbors) {
      if (!map.has(neighbor)) {
        map.set(neighbor, new Node(neighbor.val));
        queue.push(neighbor);
      }

      clonedNode.neighbors.push(map.get(neighbor) as Node);
    }
  }

  return map.get(node) as Node;
}

// @lc code=end

export default cloneGraph;
