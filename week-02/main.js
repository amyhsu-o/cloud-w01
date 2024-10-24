import Stack from "./stack.js";

let stack = new Stack();

// [Test]

// check: .peek()、.isEmpty()、.size()、.print()
function stackInfo(stack) {
    console.log(`peek: ${stack.peek()}`);
    console.log(`isEmpty: ${stack.isEmpty()}`);
    console.log(`size: ${stack.size()}`);
    console.log("stack:");
    stack.print();
    console.log();
}

// check: constructor，初始狀態
stackInfo(stack);

// check: .push(element)
stack.push(5);
stack.push(8);
stackInfo(stack);

// check: .pop()
console.log(`pop ${stack.pop()}`);
stackInfo(stack);

// check: .pop()，當 pop 次數超過元素個數
console.log(`pop ${stack.pop()}`);
console.log(`pop ${stack.pop()}`);
stackInfo(stack);

stack.push(1);
stack.push(3);
stackInfo(stack);

// check: .clear()
stack.clear();
stackInfo(stack);

stack.push(2);
stackInfo(stack);
