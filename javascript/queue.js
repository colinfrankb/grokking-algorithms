// Queue implemented using Array
// const queue = [];
// queue.push('a');
// queue.push('b');
// queue.push('c');
// queue.push('d');
// console.log(queue);
// queue.shift();
// console.log(queue);

// An array dequeues at O(n) because the array must shift all items in the array 1 index forward
// Maximally Efficient Queue should have O(1) time complexity for enqueue and dequeue

// Queue implemented using Linked List
class QueueNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  enqueue(val) {
    const node = new QueueNode(val);
    
    if (this.size === 0) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }

    this.size++;
  }

  dequeue() {
    if (this.size === 0) return null;

    const frontNode = this.front;

    this.front = this.front.next;

    if (this.front === null) {
      this.back = null;
    }

    this.size--;
    return frontNode.val;
  }
}

const queue = new Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');

console.log(queue.front.val);
console.log(queue.back.val);
// a, b, c

console.log(queue.dequeue());
console.log(queue.size);
console.log(queue.front);
console.log(queue.back);