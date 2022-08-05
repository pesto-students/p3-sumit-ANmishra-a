"use strict";
const user1 = {
  //user1 object
  username: "sid",
  age: "24",
  place: "pune",
  profession: "Front end developer",
};

const user2 = {
  //user2 object
  username: "Atul",
  age: "30",
  place: "agra",
  profession: "Back end developer",
};
// description function returns a string
const description = function () {
  return `${this.username} is a ${this.age} year old ${this.profession}`;
};
const resultingFunction = description.bind(user1); //use bind method on description function that returns a function resultingFunction
const resultingFunction2 = description.bind(user2);

console.log(resultingFunction()); // calling the resultingFunction
console.log(resultingFunction2());

// *************use of call method *************************************************//

const multiply = function (a, b) {
  return `${this.username} owns ${a * b}.sq km of land in ${this.place} `;
};
console.log(multiply.call(user1, 10, 10));
console.log(multiply.call(user2, 30, 10));
//    using apply method to calculate total bank ballance
const bankBalance = function (args) {
  const total = args.reduce((accumulator, current) => accumulator + current, 0);
  //   console.log(total);
  return `${username} have ${accumulator} in his bank account`;
};
// console.log(bankBalance([1, 2, 3, 12, 5, 6]));
console.log(bankBalance.apply(user1, [1, 2, 3, 12, 5, 6]));
// console.log(bankBalance.apply(user2, [1, 12, 4, 12, 5, 6]));





function createIncrement(){
  let count = 0;
  function increment(){
      count++;
  }
  let message = {`Count is ${count}`;
  function log(){
      console.log(message);
  }
  return [increment,log];
}
const [increment,log]=createIncrement();
}