"use strict";
/* Exercise5.2:Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.Guidelines:1.JS function should have Map API implemented.2.Map’s set functionality should have been used.3.Bonus - if space and time complexity is taken care.4.Reference:*/
const map = new Map();
map.set("a", 0);
map.set("e", 0);
map.set("i", 0);
map.set("o", 0);
map.set("u", 0);
// map.set("a", map.get("a") + 1);
function vowelCount(str) {
  str = str.toLowerCase();
  for (const chr of str) {
    if (map.has(chr)) {
      map.set(chr, map.get(chr) + 1);
    }
  }
  return map;
}
console.log(vowelCount("aaaeiou"));
