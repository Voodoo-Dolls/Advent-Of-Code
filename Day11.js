let addOperation = (operator) => {
  if (operator === "+") {
    return (value, input) => {
      return value + input;
    };
  }
  if (operator === "*") {
    return (value, input) => {
      return value * input;
    };
  }
};

function Monkey(items, operator, divisible, monkeyA, monkeyB) {
  this.items = [...items];
  this.operation = addOperation(operator);
  this.test = (input) => {
    if (input % divisible === 0) {
      return monkeyA;
    } else {
      return monkeyB;
    }
  };
}

let monkey0 = new Monkey([79, 98], "*", 23, 2, 3);
