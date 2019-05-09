import Stack from "./Stack";

const num1 = "1265439545";
const num2 = "321465896021";

let stack1 = new Stack([...num1]);
let stack2 = new Stack([...num2]);
let stack3 = new Stack();

let temp1 = 0,
  temp2 = 0,
  carry = 0,
  sum = 0;

while (!stack1.isEmpty() || !stack2.isEmpty()) {
  temp1 = stack1.isEmpty() ? 0 : stack1.pop();
  temp2 = stack2.isEmpty() ? 0 : stack2.pop();
  sum = parseInt(temp1, 10) + parseInt(temp2, 10) + carry;

  if (sum > 10) {
    carry = 1;
    sum = sum - 10;
  }

  stack3.push(sum);
}

// Printing Result
let result = "";
while (!stack3.isEmpty()) {
  result += stack3.pop();
}
console.log(result);
