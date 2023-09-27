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
  this.inspect = 0;
  this.divisibleValue = divisible;
}

// Monkey Objects
// Old Monkeys
// let monkey0 = new Monkey([79, 98], "*", 19, 23, 2, 3);
// let monkey1 = new Monkey([54, 65, 75, 74], "+", 6, 19, 2, 0);
// let monkey2 = new Monkey([79, 60, 97], "*", null, 13, 1, 3);
// let monkey3 = new Monkey([74], "+", 3, 17, 0, 1);

let monkey0 = new Monkey([98, 89, 52], "*", 2, 5, 6, 1);
let monkey1 = new Monkey([57, 95, 80, 92, 57, 78], "*", 13, 2, 2, 6);
let monkey2 = new Monkey([82, 74, 97, 75, 51, 92, 83], "+", 5, 19, 7, 5);
let monkey3 = new Monkey([97, 88, 51, 68, 76], "+", 6, 7, 0, 4);
let monkey4 = new Monkey([63], "+", 1, 17, 0, 1);
let monkey5 = new Monkey([94, 91, 51, 63], "+", 4, 13, 4, 3);
let monkey6 = new Monkey([61, 54, 94, 71, 74, 68, 98, 83], "+", 2, 3, 2, 7);
let monkey7 = new Monkey([90, 56], "*", null, 11, 3, 5);
// Monkey Objects Placed in Array
let monkeyArray = [
  monkey0,
  monkey1,
  monkey2,
  monkey3,
  monkey4,
  monkey5,
  monkey6,
  monkey7,
];

// let monkeyArray = [monkey0, monkey1, monkey2, monkey3];
let modulo = 1;
monkeyArray.forEach((monkey) => [(modulo = modulo * monkey.divisibleValue)]);

// Round Simulator

for (let i = 0; i < 10000; i++) {
  monkeyArray.forEach((monkey) => {
    let length = monkey.items.length;
    for (let j = 0; j < length; j++) {
      let itemWorry = monkey.items.splice(0, 1);
      // Just Converts it into a Int
      itemWorry = itemWorry[0];
      // Inspect Operation
      itemWorry = monkey.operation(itemWorry);
      // Relief Division
      //   itemWorry = Math.floor(itemWorry / 3);
      itemWorry = itemWorry % modulo;

      // Item Throw
      let result = monkey.test(itemWorry);
      monkeyArray[result].items.push(itemWorry);
      monkey.inspect += 1;
    }
  });
}

monkeyArray.forEach((monkey) => {
  console.log(monkey.inspect);
});

// console.log(monkey0.items);
