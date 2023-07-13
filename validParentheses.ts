function validParentheses(s: string): boolean {
  let parenthesesArray: string[] = [];
  for (let char of s) {
    if (char == "[" || char == "(" || char == "{") {
      parenthesesArray.push(char);
    } else {
      if (parenthesesArray.length === 0) {
        return false;
      }
      if (
        (char == "]" && parenthesesArray[parenthesesArray.length - 1] == "[") ||
        (char == "}" && parenthesesArray[parenthesesArray.length - 1] == "{") ||
        (char == ")" && parenthesesArray[parenthesesArray.length - 1] == "(")
      ) {
        parenthesesArray.pop();
      } else {
        return false;
      }
    }
  }

  return parenthesesArray.length === 0;
}
console.log(validParentheses("(])"));
