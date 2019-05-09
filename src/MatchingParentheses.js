import Stack from "./Stack";

const openers = "({[";
const closers = ")}]";

const str = "(test{again}[maybe/*this is a comment */])";

function isValidString(str) {
  let stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    let c = str[i];

    if (openers.includes(c)) {
      stack.push(c);
    }
    // Handle Opening Multi-line Comment
    else if (c === "/" && str[i + 1] === "*") {
      stack.push(c);
    }
    //
    else if (closers.includes(c)) {
      if (stack.isEmpty() || c !== counterPart(stack.peek())) {
        return false;
      } else {
        stack.pop();
      }
    }
    // Handle Closing Multi-line Comment
    else if (c === "*" && str[i + 1] === "/") {
      if (stack.isEmpty()) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.isEmpty();
}

function counterPart(ch) {
  switch (ch) {
    case "(":
      return ")";
    case "{":
      return "}";
    case "[":
      return "]";
    default:
      return "";
  }
}

// Testing
if (isValidString(str)) {
  console.log("Result => Valid Pattern");
} else {
  console.log("Result => Invalid Pattern");
}
