// Problem 6.6 : 3 sumGiven an array S of n integers, find three integers in S such that the sum is closest to a given number, target.Return the sum of the three integers.Assume that there will only be one solutionExample: given array S = {-1 2 1 -4}, and target = 1. The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)Assignment Introduction:●Calculate the time and space complexity for the set of questions●A set of  Problem statement based on array that would help student how to iterate and process an arrayBenchmarks●All the problem should have an optimize solutions●All the problem statement should have the time and space complexity mention in the code comment●The code should be readable and must follow good coding practice.●Keep the code as modular as you can.
var threeSum = function (nums) {
  nums = mergeSort(nums);
  const result = [];

  if (nums.length < 3) return result;

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        let arr = [nums[i], nums[left], nums[right]];
        result.push(arr);
        left++;
        while (nums[left] === nums[left - 1] && left < right) left++;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return result;
};

function mergeSort(array) {
  let middle = Math.floor(array.length / 2);
  if (array.length <= 1) {
    return array;
  }
  let leftArr = array.slice(0, middle);
  let rightArr = array.slice(middle);

  let result = helper(mergeSort(leftArr), mergeSort(rightArr));
  return result;
}
function helper(arr1, arr2) {
  let i = 0;
  let j = 0;
  let aux = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      aux.push(arr1[i]);
      i++;
    } else {
      aux.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    aux.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    aux.push(arr2[j]);
    j++;
  }
  return aux;
}
