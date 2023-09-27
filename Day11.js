// Part of Monkey Constructor
let addOperation = (operator, value) => {
  if (value === null) {
    return (input) => {
      return input * input;
    };
  }
  if (operator === "+") {
    return (input) => {
      return value + input;
    };
  }
  if (operator === "*") {
    return (input) => {
      return value * input;
    };
  }
};
// Monkey Constructor
function Monkey(items, operator, opValue, divisible, monkeyA, monkeyB) {
  this.items = [...items];
  this.operation = addOperation(operator, opValue);
  this.test = (input) => {
    if (input % divisible === 0) {
      return monkeyA;
    } else {
      return monkeyB;
    }
  };
}

// Monkey Objects
let monkey0 = new Monkey([79, 98], "*", 19, 23, 2, 3);
let monkey1 = new Monkey([54, 65, 75, 74], "+", 6, 19, 2, 0);
let monkey2 = new Monkey([79, 60, 97], "*", null, 13, 1, 3);
let monkey3 = new Monkey([74], "+", 3, 17, 0, 1);

// Monkey Objects Placed in Array
let monkeyArray = [monkey0, monkey1, monkey3];

// Round Simulator
