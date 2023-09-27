let data = `noop
noop
addx 6
addx -1
noop
addx 5
addx 3
noop
addx 3
addx -1
addx -13
addx 17
addx 3
addx 3
noop
noop
noop
addx 5
addx 1
noop
addx 4
addx 1
noop
addx -38
addx 5
noop
addx 2
addx 3
noop
addx 2
addx 2
addx 3
addx -2
addx 5
addx 2
addx -18
addx 6
addx 15
addx 5
addx 2
addx -22
noop
noop
addx 30
noop
noop
addx -39
addx 1
addx 19
addx -16
addx 35
addx -28
addx -1
addx 12
addx -8
noop
addx 3
addx 4
noop
addx -3
addx 6
addx 5
addx 2
noop
noop
noop
noop
noop
addx 7
addx -39
noop
noop
addx 5
addx 2
addx 2
addx -1
addx 2
addx 2
addx 5
addx 1
noop
addx 4
addx -13
addx 18
noop
noop
noop
addx 12
addx -9
addx 8
noop
noop
addx -2
addx -36
noop
noop
addx 5
addx 2
addx 3
addx -2
addx 2
addx 2
noop
addx 3
addx 5
addx 2
addx 19
addx -14
noop
addx 2
addx 3
noop
addx -29
addx 34
noop
addx -35
noop
addx -2
addx 2
noop
addx 6
noop
noop
noop
noop
addx 2
noop
addx 3
addx 2
addx 5
addx 2
addx 1
noop
addx 4
addx -17
addx 18
addx 4
noop
addx 1
addx 4
noop
addx 1
noop
noop`;
data = data.split("\n");
// Set Up
let cycle = 0;
let x = 1;
let sum = 0;
let addSum = () => {
  sum += x * cycle;
};

// RegEx
let noopRegEx = /^noop/;
let addRegEx = /^addx/;

for (let command of data) {
  if (noopRegEx.test(command)) {
    cycle++;
    if (cycle === 20) {
      addSum();
    } else if ((cycle - 20) % 40 === 0) {
      addSum();
    }
  }
  if (addRegEx.test(command)) {
    let parts = command.split(" ");
    let quantity = parseInt(parts[1]);
    cycle++;
    if (cycle === 20) {
      addSum();
    } else if ((cycle - 20) % 40 === 0) {
      addSum();
    }
    cycle++;
    if (cycle === 20) {
      addSum();
    } else if ((cycle - 20) % 40 === 0) {
      addSum();
    }
    x += quantity;
  }
}

console.log(sum);
