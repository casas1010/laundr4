
// Doubly Linked Lists
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344220#questions/9167898
// - same linked list, exept there is a pointer to the previous node, 
// - it takes more space than single linked list



class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.tail = null;
    this.tail = null;
    this.length = 0;
  }
}
let list = new DoublyLinkedList();
console.log("jere3");
console.log(list);
let first = new Node(13);
