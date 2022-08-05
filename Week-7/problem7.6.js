/* Problem 7.6: Implement a Queue using 2 stack
Implement a Queue using 2 stacks s1 and s2 . A Query Q is of 2 Types (i) 1 x (a query of this type means pushing 'x' into the queue) (ii) 2 (a query of this type means to pop element from queue and print the popped element)Example 1:Input:51 2 1 3 2 1 4 2Output:2 3Explanation:In the first test case1 2 the queue will be {2}1 3 the queue will be {2 3}2   popped element will be 2 the queue will be {3}1 4 the queue will be {3 4}2   popped element will be 3.Example 2:Input:41 2 2 2 1 4Output:2 -1Explanation:In the second test case1 2 the queue will be {2}2   popped element will be 2 and then the queue will be empty 2 the queue is empty and hence -11 4 the queue will be {4}.Expected Time Complexity : O(1) for push() and O(N) for pop() or O(N) for push() andO(1) for pop()Expected Auxillary Space : O(1).Constraints: 1 <= Q <= 100 1 <= x <= 100 */

let Stack1 = [];
let Stack2 = [];

function enqueue(element) {
  Stack1.push(element);
}

function dequeue() {
  if (Stack2.length === 0) {
    if (Stack1.length === 0) {
      return "the Queue is empty";
    } else {
      while (Stack1.length > 0) {
        Stack2.push(Stack1.pop());
      }
      let result = Stack2.pop();
      while (Stack2.length > 0) {
        Stack2.push(Stack1.pop());
      }
      return result;
    }
  }
}

class MyQueue {
  constructor() {
    (this.Stack1 = []), (this.Stack2 = []);
  }
  enqueue(element) {
    this.Stack1.push(element);
  }
  dequeue() {
    if (this.Stack2.length === 0) {
      if (this.Stack1.length === 0) {
        return "the Queue is empty";
      } else {
        while (this.Stack1.length > 0) {
          this.Stack2.push(this.Stack1.pop());
        }
        let result = this.Stack2.pop();
        while (this.Stack2.length > 0) {
          this.Stack2.push(this.Stack1.pop());
        }
        return result;
      }
    }
  }
}
