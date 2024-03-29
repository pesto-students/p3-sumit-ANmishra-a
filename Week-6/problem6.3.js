// Problem 6.3 Sort array of 0's,1's and 2'sGiven an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order. Example 1:Input:N = 5arr[]= {0 2 1 2 0}Output:0 0 1 2 2Explanation: 0's 1's and 2's are segregated into ascending order.Example 2:Input:N = 3arr[] = {0 1 0}Output:0 0 1Explanation: 0s 1s and 2s are segregated into ascending order. Time Complexity: O(N)Expected Auxiliary Space: O(1)Constraints: 1 <= N <= 10^6 0 <= A[i]
function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let red = i - 1;
    while (temp < arr[red] && red >= 0) {
      arr[red + 1] = arr[red];
      red--;
    }
    arr[red + 1] = temp;
  }
  return arr;
}
console.log(insertionSort([0, 2, 1, 2, 0]));
