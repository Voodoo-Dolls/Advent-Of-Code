let data = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`;
data = data.split("\n");

let y = 0;
let maxY = 0;
let x = 0;
let maxX = 0;
let tailY = 0;
let tailX = 0;

// Creates Board Size
data.map((command) => {
  let parts = command.split(" ");
  let direction = parts[0];
  let quantity = parseInt(parts[1]);
  switch (direction) {
    case "U": {
      y += quantity;
      if (y > maxY) {
        maxY = y;
      }
      break;
    }
    case "D": {
      y -= quantity;
      break;
    }
    case "R": {
      x += quantity;
      if (x > maxX) {
        maxX = x;
      }
      break;
    }
    case "L": {
      x -= quantity;
      break;
    }
  }
});
// console.log(`Max X:${maxX} Max Y:${maxY}`);

// Create Row Length
let rowTile = [];
for (let i = 0; i < maxX + 1; i++) {
  rowTile.push(".");
}

// Create Board
let board = [];
for (let i = 0; i < maxY + 1; i++) {
  board.push([...rowTile]);
}
// boardCopy
let boardCopy = [];
for (let i = 0; i < maxY + 1; i++) {
  boardCopy.push([...rowTile]);
}
board[0][0] = "s";
boardCopy[0][0] = "s";

x = 0;
y = 0;
data.map((command) => {
  let parts = command.split(" ");
  let direction = parts[0];
  let quantity = parseInt(parts[1]);

  for (let i = 0; i < quantity; i++) {
    // Increment Head and Checks for Tail Position
    if (direction === "U") {
      y++;
    } else if (direction === "D") {
      y--;
    } else if (direction === "R") {
      x++;
    } else if (direction === "L") {
      x--;
    }
    // Checks if Tail is connected
    if (Math.abs(x - tailX) >= 2 && Math.abs(y - tailY) === 0) {
      // Checks if Head Moves Non-Diagonal
      if (x === tailX || y === tailY) {
        // console.log(`X:${x} Y:${y} tailX:${tailX} tailY:${tailY}`);
        if (x !== tailX) {
          if (x > tailX) {
            tailX++;
          } else {
            tailX--;
          }
        }
        if (y !== tailY) {
          if (y > tailY) {
            tailY++;
          } else {
            tailY--;
          }
        }
      }
      //   Diagonal Movement
      //   Notes: Checks for displacement for 2, then make the appropriate value the same to "catch up"
      else {
        if (Math.abs(x - tailX) === 2) {
          tailY = y;
        } else {
          tailX = x;
        }
      }
    }
    console.log(tailY);
    // boardCopy[tailY][tailX] = "#";
  }
});
