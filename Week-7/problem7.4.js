/*Problem 7.4: Parenthesis CheckerGiven an expression string x. Examine whether the pairs and the orders of“{“,”}”,”(“,”)”,”[“,”]” are correct in exp.For example, the function should return 'true' for exp= “[()]{}{()()}” and 'false' for exp = “[(])”.Example 1:Input:{([])}Output:trueExplanation:{ ( [ ] ) }. Same colored brackets can form balanced pairs, with 0 number of unbalanced bracket.Example 2:Input:()Output:trueExplanation:(). Same bracket can form balanced pairs, and here only 1 type of bracket is present and in balanced way.Example 3:Input:([]Output:falseExplanation:([]. Here square bracket is balanced but the small bracket is not balanced and Hence , the output will be balanced. */
function Parenthesis(expression) {
  let stack = [];
  for (let i = 0; i < expression.length; i++) {
    let chr = expression[i];
    if (chr === "(" || chr === "[" || chr === "{") {
      stack.push(chr);
      continue;
    }
    if (stack.length === 0) {
      return false;
    }
    let popped;
    switch (chr) {
      case ")":
        popped = stack.pop();
        if (popped == "{" || popped == "[") return false;
        break;
      case "}":
        popped = stack.pop();
        if (popped == "(" || popped == "[") return false;
        break;
      case "]":
        popped = stack.pop();
        if (popped == "(" || popped == "{") return false;
        break;
    }
  }
  return stack.length === 0;
}
