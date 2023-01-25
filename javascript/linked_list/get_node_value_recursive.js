// Write a function, getNodeValue, that takes in the head of a linked list and an index.
// The function should return the value of the linked list at the specified index.

// If there is no node at the given index, then return null.

// Approach:
// You shouldn't pass a variable that keeps track of where you are in the Linked List
// The simpliest case is when the Linked List is null
// The next case is when the Linked List contains 1 item
// The simpliest case of the index is when it is 0, i.e when you are trying to find the first item in the Linked List
// therefore, make the index variable smaller and smaller until it reaches 0
const getNodeValue = (head, index) => {
  if (head === null) return null;
  if (index === 0) return head.val;
  
  return getNodeValue(head.next, index - 1);
};


const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

getNodeValue(a, 2); // 'c'