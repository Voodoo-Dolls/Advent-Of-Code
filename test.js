let data = `R 5
U 8
L 8
D 3
R 17
D 10
L 25
U 20`;
data = data.split("\n");

let y = 0;
let minY = 0;
let maxY = 0;
let x = 0;
let minX = 0;
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
      if (y < minY) {
        minY = y;
      }
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
      if (x < minX) {
        minX = x;
      }
      break;
    }
  }
});
console.log(`Min X:${minX} Max X:${maxX} Min Y:${minY} Max Y:${maxY}`);

// Create Row Length
let rowTile = [];
for (let i = 0; i < Math.abs(minX) + maxX + 1; i++) {
  rowTile.push(".");
}

// Create Board
let board = [];
for (let i = 0; i < Math.abs(minY) + maxY + 1; i++) {
  board.push([...rowTile]);
}

// boardCopy
let boardCopy = [];
for (let i = 0; i < Math.abs(minY) + maxY + 1; i++) {
  boardCopy.push([...rowTile]);
}
board[0][0] = "s";
boardCopy[5][11] = "s";

x = 11;
let oneX = 11;
let twoX = 11;
let threeX = 11;
let fourX = 11;
let fiveX = 11;
let sixX = 11;
let sevenX = 11;
let eightX = 11;
let nineX = 11;
tailX = x;

y = 5;
let oneY = 5;
let twoY = 5;
let threeY = 5;
let fourY = 5;
let fiveY = 5;
let sixY = 5;
let sevenY = 5;
let eightY = 5;
let nineY = 5;
tailY = y;

let dataTest =`R 5
U 8`
// L 8
// D 3
// R 17
// D 10
// L 25
// U 20`
dataTest = dataTest.split("\n");
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
    // Head - One
    if (Math.abs(x - oneX) === 2) {
      if (oneY !== y) {
        oneY = y;
        if (x > oneX) {
          oneX = x - 1;
        } else {
          oneX = x + 1;
        }
      } else {
        if (x > oneX) {
          oneX = x - 1;
        } else {
          oneX = x + 1;
        }
      }
    }
    if (Math.abs(y - oneY) === 2) {
      if (oneX !== x) {
        oneX = x;
        if (y > oneY) {
          oneY = y - 1;
        } else {
          oneY = y + 1;
        }
      } else {
        if (y > oneY) {
          oneY = y - 1;
        } else {
          oneY = y + 1;
        }
      }
    }
    // One to Two
    if (Math.abs(oneX - twoX) === 2) {
      if (twoY !== oneY) {
        twoY = oneY;
        if (oneX > twoX) {
          twoX = oneX - 1;
        } else {
          twoX = oneX + 1;
        }
      } else {
        if (oneX > twoX) {
          twoX = oneX - 1;
        } else {
          twoX = oneX + 1;
        }
      }
    }
    if (Math.abs(oneY - twoY) === 2) {
      if (twoX !== x) {
        twoX = oneX;
        if (oneY > twoY) {
          twoY = oneY - 1;
        } else {
          twoY = oneY + 1;
        }
      } else {
        if (oneY > twoY) {
          twoY = oneY - 1;
        } else {
          twoY = oneY + 1;
        }
      }
    }
    // Two to Three

    if (Math.abs(twoX - threeX) === 2) {
      if (threeY !== twoY) {
        threeY = twoY;
        if (twoX > threeX) {
          threeX = twoX - 1;
        } else {
          threeX = twoX + 1;
        }
      } else {
        if (twoX > threeX) {
          threeX = twoX - 1;
        } else {
          threeX = twoX + 1;
        }
      }
    }
    if (Math.abs(twoY - threeY) === 2) {
      if (threeX !== x) {
        threeX = twoX;
        if (twoY > threeY) {
          threeY = twoY - 1;
        } else {
          threeY = twoY + 1;
        }
      } else {
        if (twoY > threeY) {
          threeY = twoY - 1;
        } else {
          threeY = twoY + 1;
        }
      }
    }

    // Three to Four
    if (Math.abs(threeX - fourX) === 2) {
      if (fourY !== threeY) {
        fourY = threeY;
        if (threeX > fourX) {
          fourX = threeX - 1;
        } else {
          fourX = threeX + 1;
        }
      } else {
        if (threeX > fourX) {
          fourX = threeX - 1;
        } else {
          fourX = threeX + 1;
        }
      }
    }
    if (Math.abs(threeY - fourY) === 2) {
      if (fourX !== x) {
        fourX = threeX;
        if (threeY > fourY) {
          fourY = threeY - 1;
        } else {
          fourY = threeY + 1;
        }
      } else {
        if (threeY > fourY) {
          fourY = threeY - 1;
        } else {
          fourY = threeY + 1;
        }
      }
    }

    // Four to Five

    if (Math.abs(fourX - fiveX) === 2) {
      if (fiveY !== fourY) {
        fiveY = fourY;
        if (fourX > fiveX) {
          fiveX = fourX - 1;
        } else {
          fiveX = fourX + 1;
        }
      } else {
        if (fourX > fiveX) {
          fiveX = fourX - 1;
        } else {
          fiveX = fourX + 1;
        }
      }
    }
    if (Math.abs(fourY - fiveY) === 2) {
      if (fiveX !== x) {
        fiveX = fourX;
        if (fourY > fiveY) {
          fiveY = fourY - 1;
        } else {
          fiveY = fourY + 1;
        }
      } else {
        if (fourY > fiveY) {
          fiveY = fourY - 1;
        } else {
          fiveY = fourY + 1;
        }
      }
    }

    // Five to Six

    if (Math.abs(fiveX - sixX) === 2) {
      if (sixY !== fiveY) {
        sixY = fiveY;
        if (fiveX > sixX) {
          sixX = fiveX - 1;
        } else {
          sixX = fiveX + 1;
        }
      } else {
        if (fiveX > sixX) {
          sixX = fiveX - 1;
        } else {
          sixX = fiveX + 1;
        }
      }
    }
    if (Math.abs(fiveY - sixY) === 2) {
      if (sixX !== x) {
        sixX = fiveX;
        if (fiveY > sixY) {
          sixY = fiveY - 1;
        } else {
          sixY = fiveY + 1;
        }
      } else {
        if (fiveY > sixY) {
          sixY = fiveY - 1;
        } else {
          sixY = fiveY + 1;
        }
      }
    }

    // six to seven

    if (Math.abs(sixX - sevenX) === 2) {
      if (sevenY !== sixY) {
        sevenY = sixY;
        if (sixX > sevenX) {
          sevenX = sixX - 1;
        } else {
          sevenX = sixX + 1;
        }
      } else {
        if (sixX > sevenX) {
          sevenX = sixX - 1;
        } else {
          sevenX = sixX + 1;
        }
      }
    }
    if (Math.abs(sixY - sevenY) === 2) {
      if (sevenX !== x) {
        sevenX = sixX;
        if (sixY > sevenY) {
          sevenY = sixY - 1;
        } else {
          sevenY = sixY + 1;
        }
      } else {
        if (sixY > sevenY) {
          sevenY = sixY - 1;
        } else {
          sevenY = sixY + 1;
        }
      }
    }

    // Seven to Eight

    if (Math.abs(sevenX - eightX) === 2) {
      if (eightY !== sevenY) {
        eightY = sevenY;
        if (sevenX > eightX) {
          eightX = sevenX - 1;
        } else {
          eightX = sevenX + 1;
        }
      } else {
        if (sevenX > eightX) {
          eightX = sevenX - 1;
        } else {
          eightX = sevenX + 1;
        }
      }
    }
    if (Math.abs(sevenY - eightY) === 2) {
      if (eightX !== x) {
        eightX = sevenX;
        if (sevenY > eightY) {
          eightY = sevenY - 1;
        } else {
          eightY = sevenY + 1;
        }
      } else {
        if (sevenY > eightY) {
          eightY = sevenY - 1;
        } else {
          eightY = sevenY + 1;
        }
      }
    }

    // Eight to Nine

    if (Math.abs(eightX - nineX) === 2) {
      if (nineY !== eightY) {
        nineY = eightY;
        if (eightX > nineX) {
          nineX = eightX - 1;
        } else {
          nineX = eightX + 1;
        }
      } else {
        if (eightX > nineX) {
          nineX = eightX - 1;
        } else {
          nineX = eightX + 1;
        }
      }
    }
    if (Math.abs(eightY - nineY) === 2) {
      if (nineX !== x) {
        nineX = eightX;
        if (eightY > nineY) {
          nineY = eightY - 1;
        } else {
          nineY = eightY + 1;
        }
      } else {
        if (eightY > nineY) {
          nineY = eightY - 1;
        } else {
          nineY = eightY + 1;
        }
      }
    }

    // nine to tail

    // if (Math.abs(nineX - tailX) === 2) {
    //   if (tailY !== nineY) {
    //     tailY = nineY;
    //     if (nineX > tailX) {
    //       tailX = nineX - 1;
    //     } else {
    //       tailX = nineX + 1;
    //     }
    //   } else {
    //     if (nineX > tailX) {
    //       tailX = nineX - 1;
    //     } else {
    //       tailX = nineX + 1;
    //     }
    //   }
    // }
    // if (Math.abs(nineY - tailY) === 2) {
    //   if (tailX !== x) {
    //     tailX = nineX;
    //     if (nineY > tailY) {
    //       tailY = nineY - 1;
    //     } else {
    //       tailY = nineY + 1;
    //     }
    //   } else {
    //     if (nineY > tailY) {
    //       tailY = nineY - 1;
    //     } else {
    //       tailY = nineY + 1;
    //     }
    //   }
    // }

    // Checks if Tail is connected
    // if (Math.abs(sevenX - tailX) === 2) {
    //   if (tailY !== sevenY) {
    //     tailY = sevenY;
    //     if (sevenX > tailX) {
    //       tailX = sevenX - 1;
    //     } else {
    //       tailX = sevenX + 1;
    //     }
    //   } else {
    //     if (sevenX > tailX) {
    //       tailX = sevenX - 1;
    //     } else {
    //       tailX = sevenX + 1;
    //     }
    //   }
    // }
    // if (Math.abs(sevenY - tailY) === 2) {
    //   if (tailX !== x) {
    //     tailX = x;
    //     if (sevenY > tailY) {
    //       tailY = sevenY - 1;
    //     } else {
    //       tailY = sevenY + 1;
    //     }
    //   } else {
    //     if (sevenY > tailY) {
    //       tailY = sevenY - 1;
    //     } else {
    //       tailY = sevenY + 1;
    //     }
    //   }
    // }
    // console.log(tailX);
    // console.log(oneX);
    boardCopy[nineY][nineX] = "#";
  }
});

let count = 0;
boardCopy.map((row) => {
  row.map((element) => {
    if (element === "#") {
      count++;
    }
  });
});
console.log(count);
// Final Positions
boardCopy[y][x] = "H"
boardCopy[oneY][oneX] = 1
boardCopy[twoY][twoX] = 2 
boardCopy[threeY][threeX] =3
boardCopy[fourY][fourX] = 4
boardCopy[fiveY][fiveX] = 5
boardCopy[sixY][sixX] = 6
boardCopy[sevenY][sevenX] =7
boardCopy[eightY][nineX] = 8
boardCopy[nineY][nineX] = 9

boardCopy = boardCopy.reverse()
boardCopy.forEach((element)=>{
  console.log(element.join(""))
})



// console.log(test.split("\n").length)
// console.log(test.length)