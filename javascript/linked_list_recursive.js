class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(val) {
    if (this.head === null) {
      this.head = new Node(val);
      return;
    }

    this._append(val, this.head);
  }

  _append(val, curr) {
    if (curr.next === null) {
      curr.next = new Node(val);
      return;
    }

    this._append(val, curr.next);
  }

  contains(val) {
    return this._contains(val, this.head);
  }

  _contains(val, curr) {
    if (curr === null) {
      return false;
    }

    if (curr.val === val){
      return true;
    }

    return this._contains(val, curr.next);
  }

}

const printLinked = (head) => {
  console.log(_printLinked(head));
}

const _printLinked = (head) => {
  if (head === null) return '';

  return head.val + '->' + _printLinked(head.next);
}

const list = new LinkedList();
list.append(11);
list.append(7);
list.append(10);
list.append(2);
console.log(list.head);

console.log(list.contains(11)); // true
console.log(list.contains(3)); // false

const sumList = (head) => {
  if (head === null) return 0;

  return head.val + sumList(head.next);
};
// O(n) time, O(n) space

console.log(sumList(list.head)); // 30

// Write a function, deleteValue(head, val), that accepts the head node of a linked list and a value as an argument
// The function should delete the node of the linked list that contains the given value.
// The function should return the head of the list.
// Assume that the linked list only contains unique values.
const deleteValue = (head, val) => {
  return _deleteValue(head, val);
};

const _deleteValue = (head, val) => {
  if (head === null) return null;

  if (head.val === val) {
    if (head.next === null) {
      return null;
    } else {
      return head.next;
    }
  }

  head.next = _deleteValue(head.next, val);

  return head;
};

const deletionList = new LinkedList();
deletionList.append(1);
deletionList.append(2);
deletionList.append(3);
deletionList.append(4);
deletionList.append(5);
deletionList.append(6);
printLinked(deleteValue(deletionList.head, 2));
// 11

// Write a function, reverseList, that accepts the head of a linked list as an argument
// The function should reverse the order of the nodes of the linked list in-place
// The function should return the new head of the linked list
const reverseList = (head) => {
  return _reverseList(head, null);
};

const _reverseList = (curr, prev) => {
  if (curr === null) return prev;
  
  const next = curr.next;
  
  curr.next = prev;

  return _reverseList(next, curr);
};
// O(n) time, O(n) space

const revList = new LinkedList();
revList.append(1);
revList.append(2);
revList.append(3);
revList.append(4);
revList.append(5);
revList.append(6);

printLinked(revList.head);

printLinked(reverseList(revList.head));
