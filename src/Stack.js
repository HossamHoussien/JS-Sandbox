/*
 * @Author Hossam Houssien
 * @Date   2019
 */

export default class Stack {
  constructor(initData = []) {
    this._data = initData.slice(0);
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Cannot call peek on an empty stack");
    }
    return this._data[this._data.length - 1];
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Cannot call pop on an empty stack");
    }
    let poppedItem = this.peek(); // Can be removed if pop() method doesn't require to return the popped item
    this._data.pop();
    return poppedItem;
  }

  push(value) {
    this._data.push(value);
  }

  isEmpty() {
    return this._data.length === 0;
  }

  size() {
    return this._data.length;
  }
}
