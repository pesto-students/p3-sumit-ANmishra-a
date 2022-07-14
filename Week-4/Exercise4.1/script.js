class MyPromise {
  constructor(Resolved, Rejected, Fulfilled) {
    this.resolved = function () {
      return Resolved;
    };
    this.rejected = function () {
      return Rejected;
    };
    this.fulfilled = function () {
      return Fulfilled;
    };
  }
}

const getNumber = function () {
  return Math.floor(Math.random() * 100);
};
const promise = new MyPromise("Resolved", "Rejected", "Fulfilled");
const getNumberPromise = function () {
  const randomNumber = getNumber();
  console.log(randomNumber);
  setTimeout(() => promise.fulfilled, 5000);
  if (randomNumber % 5 === 0) {
    return promise.resolved();
  } else {
    return promise.rejected();
  }
};

const ans = getNumberPromise();
console.log(ans);
