class Calculator {
  constructor() {
    this.result = 0;
  }
  add(num) {
    if (typeof num === "number") {
      this.result += num;
    } else {
      throw new Error("Invalid number");
    }
  }
  subtract(num) {
    if (typeof num === "number") {
      this.result -= num;
    } else {
      throw new Error("Invalid number");
    }
  }
  multiply(num) {
    if (typeof num === "number") {
      this.result *= num;
    } else {
      throw new Error("Invalid number");
    }
  }
  divide(num) {
    if (typeof num === "number" && num !== 0) {
      this.result /= num;
    } else {
      throw new Error("Invalid number");
    }
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  calculate(expression) {
    this.result = eval(expression.replace(/\s+/g, " "))
    if (this.result === Infinity) {
      throw new Error("Infinity")
    }
    return this.result;

  }

module.exports = Calculator;