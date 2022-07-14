"use strict";
// implementation on Fibonacci Series using iterables
const fib = {
  _n: 5,
  // should have a Symbol.iterator method
  [Symbol.iterator]: function () {
    // it should return an object
    let i = 1;
    let old = 0,
      new1 = 0;
    return {
      //the object should have a next method
      next: () => {
        //the next method should return an object with field 'value' and 'done'
        if (i++ <= this._n) {
          [old, new1] = [new1, old + new1 || 1];
          return { value: old, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};
// console.log(...fib);
fib._n = 25;
for (let count of fib) {
  console.log(count);
}
