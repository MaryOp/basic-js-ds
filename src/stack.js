const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  
  constructor() {
    this.array = [];
  }

  push(element) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
   
    this.array.push(element);
    return stack;
    // return this.push(element);
    
  }

  pop() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // if (this.array[(this.array.length -1)] == element) {
      // this.array.pop(element)
      this.array.pop(this.array[(this.array.length - 1)])
    // }
  }

  peek() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // this.array.find(element)
    let result;
    result = this.array[(this.array.length - 1)];
    return result;
     
  }
}

module.exports = {
  Stack
};

const stack = new Stack();
// stack.push(5);
// stack.push(6);
// stack.push(7);
// stack.pop();
// // stack.pop()
// stack.peek()
// console.log(stack.peek())
// console.log(stack)
