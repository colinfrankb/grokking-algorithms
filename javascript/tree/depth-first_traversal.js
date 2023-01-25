class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

const depthFirstPrint = (root) => {
  const stack = [root];

  while (stack.length > 0) {
    // important to only perform operations on a node after popping it
    // also called "visited"
    const curr = stack.pop();

    console.log(curr.val);

    if (curr.right !== null) stack.push(curr.right);
    if (curr.left !== null) stack.push(curr.left);
  }
}; // O(n) time, O(n) space

depthFirstPrint(a);

const depthFirstRecursivePrint = (root) => {
  // the tree is empty
  if (root === null) return null;

  console.log(root.val);

  depthFirstRecursivePrint(root.left);
  depthFirstRecursivePrint(root.right);
}; // O(n) time, O(n) space

depthFirstRecursivePrint(a);

// pre-order: self, left, right
// post-order: left, right, self
// in-order: left, self, right

// ----------------------------------------------------------------

// Write a function, sumTree(root), that takes in the root
// of a binary tree as an argument
//
// The function should return the total sum of all values
// in the tree. You can assume that the tree only contains
// number values.

const g = new Node(3);
const h = new Node(2);
const i = new Node(7);
const j = new Node(4);
const k = new Node(-2);
const l = new Node(5);

g.left = h;
g.right = i;
h.left = j;
h.right = k;
i.right = l;

//      3
//    /   \
//   2     7
//  / \     \
// 4   -2    5

const sumTree = (root) => {
  if (root === null) return 0;

  return root.val + sumTree(root.left) + sumTree(root.right);
}; // O(n) time, O(n) space

console.log(sumTree(g));
