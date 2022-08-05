"use strict";
/*Problem 6.1: Max Sum Contiguous SubarrayFind the contiguous subarray within an array, A of length N which has the largest sum.Input Format:The first and the only argument contains an integer array, A. Output Format: Return an integer representing the maximum possible sum of the contiguous subarray.Constraints: 1 <= N <= 1e6 -1000 <= A[i] <= 1000 For example:Input 1: A = [1, 2, 3, 4, -10]Output 1: 10Explanation 1: The subarray [1, 2, 3, 4] has the maximum possible sum of 10.Input 2: A = [-2, 1, -3, 4, -1, 2, 1, -5, 4] Output 2: 6Explanation 2: The subarray [4,-1,2,1] has the maximum possible sum of 6. */
//! method 1 [not working]
// function maxSum(arr) {
//   let globalMax = arr[0];
//   //   debugger;
//   for (let i = 1; i < arr.length; i++) {
//     arr[i] += arr[i - 1];
//     if (arr[i] > globalMax) {
//       globalMax = arr[i];
//     }
//   }
//   console.log(arr);
//   return globalMax;
// }
// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maxSum(arr));
// ! method 2 kadane's algorithm
function maxSum(arr) {
  let globalMax = -Infinity;
  let currentMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > currentMax) {
      currentMax = arr[i];
    } else if (currentMax < currentMax + arr[i]) {
      currentMax += arr[i];
    }
    globalMax = Math.max(globalMax, currentMax);
    if (currentMax < globalMax) {
      currentMax = 0;
    }
  }
  return globalMax;
}
let arr = [-5, 4, -1, 7, 8, -21];
console.log(maxSum(arr));

// Problem 6.5: Pair With Given Difference Given an one-dimensional unsorted array A containing N integers.You are also given an integer B, find if there exists a pair of elements in the array whose difference is B.Return1 if any such pair exists else return 0. Problem Constraints 1 <= N <= 105 -103 <= A[i]<= 103 -105 <= B <= 105 Input Format First argument is an integer array A of size N. Second argument is an integer B.Output Format Return 1 if any such pair exists else return 0.Example Input Input 1: A = [5, 10, 3, 2, 50, 80] B = 78 Input 2: A = [-10, 20] B = 30Example Output Output 1: 1 Output 2: 1Example Explanation Explanation 1: Pair (80, 2) gives a difference of 78. Explanation 2:Pair (20, -10) gives a difference of 30 i.e 20 - (-10) => 20 + 10 => 30
