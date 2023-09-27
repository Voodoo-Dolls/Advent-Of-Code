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
let image = [];
let updateImage = () => {
  if (cycle % 40 === 0) {
    image.push(crt);
    crt = [];
  }
};
let row = [];
for (let i = 0; i < 40; i++) {
  row.push(".");
}
let spritePosition = [];
let updateSpritePosition = (x) => {
  spritePosition = [...row];
  spritePosition[x - 1] = "#";
  spritePosition[x] = "#";
  spritePosition[x + 1] = "#";

  //   if (x > 0) {
  // spritePosition[x - 1] = "#";
  // spritePosition[x] = "#";
  // spritePosition[x + 1] = "#";
  //   } else if (x === 0) {
  //     spritePosition[x] = "#";
  //     spritePosition[x + 1] = "#";
  //   } else if (x === -1) {
  //     spritePosition[x + 1] = "#";
  //   }
};
updateSpritePosition(1);
let crt = [];
let updateCrt = () => {
  crt.push(".");
  if (spritePosition[crt.length - 1] === "#") {
    crt[crt.length - 1] = "#";
  }
};
// for (let i = 0; i < 6; i++) {
//   crt.push(row);
// }
// RegEx
let noopRegEx = /^noop/;
let addRegEx = /^addx/;

for (let command of data) {
  if (noopRegEx.test(command)) {
    updateCrt();
    cycle++;
    updateImage();
  }
  if (addRegEx.test(command)) {
    let parts = command.split(" ");
    let quantity = parseInt(parts[1]);
    updateCrt();
    cycle++;
    updateImage();
    updateCrt();
    cycle++;
    updateImage();
    x += quantity;
    updateSpritePosition(x);
  }
}
// image = image.reverse();
image.forEach((row) => {
  console.log(row.join(" "));
});
