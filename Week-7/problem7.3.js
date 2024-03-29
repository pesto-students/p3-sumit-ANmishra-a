/* Problem 7.3: Detect loop in a linked listGiven a linked list of N nodes. The task is to check if the linked list has a loop. Linked list can contain self loop.Example 1:Input:N = 3value[] = {1,3,4}x = 2Output: TrueExplanation: In above test case N = 3.The linked list with nodes N = 3 is given. Then value of x=2 is given which means last node is connected with xth node of linked list. Therefore, there exists a loop.Example 2:Input:N = 4value[] = {1,8,3,4}x = 0
Output: FalseExplanation: For N = 4 ,x = 0 means then lastNode->next = NULL, then the Linked list does not containsany loop.Expected Time Complexity: O(N) Expected Auxiliary Space: O(1)Constraints: 1 ≤ N ≤ 104 1 ≤ Data on Node ≤ 10 */
var hasCycle = function (head) {
  if (!head) {
    return false;
  } else {
    let fastPointer = head;
    let slowPointer = head;
    while (head.next) {
      if (fastPointer.next) {
        fastPointer = fastPointer.next;
        fastPointer = fastPointer.next;

        if ((slowPointer = fastPointer)) {
          return true;
        }
        slowPointer = slowPointer.next;
        head = head.next;
      }
    }
    return false;
  }
};
