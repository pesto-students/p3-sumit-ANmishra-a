"use strict";
// fibonacci serious using generators
function* fibGeneratorFunction() {
  let previous = 0;
  let next = 1;
  yield previous;
  yield next;
  while (true) {
    const newly = previous + next;
    yield newly;
    previous = next;
    next = newly;
  }
}
