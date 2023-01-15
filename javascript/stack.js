// Implemented using Linked List data structure
class StackNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// O(1) time for pop and push
// O(n) space for the n amount of items you want to store
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(val) {
    if (this.top === null) {
      this.top = new StackNode(val);
    } else {
      const pushedNode = new StackNode(val);
      pushedNode.next = this.top;
      this.top = pushedNode;
    }

    this.size++;
  }

  pop() {
    if (this.top === null) return null;
    const poppedNode = this.top;
    this.top = this.top.next;
    this.size--;
    return poppedNode;
  }

}

const stack = new Stack();

stack.push(1);
stack.push(2);

console.log(stack);
// 2, 1

stack.pop();

console.log(stack);
// 1
