// Problem 6.2 Spiral Order Matrix IIProblem Description Given a matrix of m * n elements (m rows, n columns), return all elements of the matrix in spiral order.Example: Given the following matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] You should return[1, 2, 3, 6, 9, 8, 7, 4, 5]

// JavaScript program for the above approach

// Function to print in spiral order

// Driver Code
let a = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
var spiralOrder = function (matrix) {
  let start = 0;
  let answerArr = [];
  let end = matrix.length * matrix[0].length;
  for (let i = 0; i < end; i++) {
    if (i == matrix[start].length - 1) {
      start++;
    }
    answerArr.push(matrix[start][i]);
  }
};
spiralOrder(a);
