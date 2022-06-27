// Create a memoize function that remembers previous inputs and stores them in cache so that it won’t have to compute the same inputs more than once. The function will take an unspecifiednumber of integer inputs and a reducer method

const memoize = function (reducer) {
  //     1)Create a method called memoize such that
  const cache = new Map();

  return function memoizeFun(...inputs) {
    const key = inputs.join("-"); // returns a string with - in between
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const result = reducer(inputs);
      cache.set(key, result);
      return result;
    }
  };

  //     2) memoizeAdd(inputs){
  //        . check if those arguments are present in  the cache.
  //        . if the arg is present then return the result associated with the argument
  //        . if the arg is not present then compute the value using reducer
  //        . set the value in cache . and return the result.
};

// have to create a function that can receive any number of arguments and check if those arguments are present in  the cache
// if the arg is present then return the value associated with the argument
// if the arg is not present then compute the value using the given function and set the value in cache . and return the result.
//  cache should be a map because it will have a "key : value" property we can iterate or use .has() method to check the presence of arguments in keys. key is going to be a string and the value will be a number.
// we can use .get method on map() to get a value from the cache
// we can use .set method on map() to set the value in the cache

// reducer function
function add(args) {
  return args.reduce((acc, current) => (acc += current), 0);
}
function multiply(args) {
  return args.reduce((acc, current) => (acc *= current), 1);
}
const memoizeAdd = memoize(add);
console.log(memoizeAdd(1, 2, 3, 4));
console.log(memoizeAdd(1, 2, 3, 4));
console.log(memoizeAdd(1, 2, 3, 7));
console.log(memoizeAdd(1, 2, 3, 4));
console.log(memoizeAdd(4, 3, 2, 1));
const memoizeMultiply = memoize(multiply);
console.log(memoizeMultiply(1, 2, 3, 4));
console.log(memoizeMultiply(1, 2, 3, 4));
console.log(memoizeMultiply(1, 2, 3, 7));
console.log(memoizeMultiply(1, 2, 3, 4));
console.log(memoizeMultiply(4, 3, 2, 1));
