/* Week 7Linked ListProblem 7.1 :

 Reverse the Linked list Given a linked list of N nodes. The task is to reverse this list.Example 1:Input:LinkedList: 1->2->3->4->5->6Output: 6 5 4 3 2 1
 Explanation: After reversing the list,elements are 6->5->4->3->2->1.
 Example 2:Input:LinkedList: 2->7->8->9->10Output: 10 9 8 7 2
 Explanation: After reversing the list,elements are 10->9->8->7->2.Expected Time Complexity: O(N).
Expected Auxiliary Space: O(1).
 Constraints: 1 <= N <= 104 */
class MyLinkedList {
  constructor() {
    this.head = {
      value: null,
      next: null,
    };
    this.tail = this.head;
    this.length = 0;
  }

  addAtTail(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  addAtHead(value) {
    if (this.head.value === null) {
      this.head.value = value;
      this.length++;
    } else {
      const newNode = {
        value: value,
        next: null,
      };
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
  }
  print() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr);
  }
}
function reverseList(node) {
  let current = node;
  let next = null;
  let previous = null;
  while (current != null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  node = previous;
  return node;
}
const myList = new MyLinkedList();
