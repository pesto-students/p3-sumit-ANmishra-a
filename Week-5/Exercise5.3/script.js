/*Exercise5.3:Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate Guidelines:JS function should have Set API implemented.3.Bonus - if space and time complexity is taken care.
 */
function hasDuplicate(arr) {
  const hasDuplicateMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (hasDuplicateMap.has(arr[i])) {
      return true;
    } else {
      hasDuplicateMap.set(arr[i], 0);
    }
  }
  return false;
}
console.log(hasDuplicate([1, 2, 3, 1, 4]));
