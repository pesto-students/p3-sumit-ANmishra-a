"use strict";
class Person {
  constructor(name) {
    this.name = name;
  }
  teach = function (subject) {
    return `${this.name} is teaching ${subject}`;
  };
}
const teacher = new Person();

const anuj = new Person("anuj");
console.log(anuj.teach("science"));
