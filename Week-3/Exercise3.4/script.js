"use strict";
const createStack = function () {
  return {
    items: [],
    push(item) {
      this.items.push(item);
    },
    pop() {
      return this.items.pop();
    },
  };
};
const stack = createStack();
Object.freeze(stack);
console.log(stack);
stack.push(54);
stack.push(23);
stack.push(95);

console.log(stack.items);
