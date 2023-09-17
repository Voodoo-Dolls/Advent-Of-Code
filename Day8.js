let data = `30373
25512
65332
33549
35390`;

let visibleTrees = (data) => {
  let trees = data.split("\n");
  let count = 0;
  // Get Total Trees
  trees.forEach((row) => {
    count += row.length;
  });

  let row = [];
  trees.forEach((treeRow) => {
    row.push(
      treeRow.split("").map((tree) => {
        return parseInt(tree);
      })
    );
  });
  //   Getting Inputs for Function
  for (let y = 0; y < row.length; y++) {
    let currentRow = row[y];
    for (let x = 0; x < currentRow.length; x++) {
      let currentColumn = [];
      for (let i = 0; i < row.length; i++) {
        currentColumn.push(row[i][x]);
      }
      count += checkVisible(currentRow, currentColumn, x, y);
    }
  }
  return count;
};

let checkVisible = (row, column, x, y) => {
  if (x === 0 || x === row.length - 1 || y === 0 || y === column.length - 1) {
    return 1;
  } else {
    let left = false;
    let right = false;
    let up = false;
    let down = false;
    // ROW Checking
    for (let i = 0; i < row.length; i++) {
      if (i !== x) {
        if (i < x) {
          if (row[i] > row[x]) {
            left = true;
          }
        }
        if (i > x) {
          if (row[i] > row[x]) {
            right = true;
          }
        }
      }
    }
    for (let i = 0; i < column.length; i++) {
      if (i !== y) {
        if (i < y) {
          if (column[i] > column[y]) {
            up = true;
          }
        }
        if (i > y) {
          if (column[i] > column[y]) {
            down = true;
          }
        }
      }
    }

    if (left && right && up && down) {
      return -1;
    }
    // for (let i = 0; i < row.length; i++) {
    //   if (i !== y) {
    //     if (column[i] <= column[y]) {
    //       return "column";
    //     }
    //   }
    // }
  }
};

// console.log(checkVisible([2, 5, 5, 1, 2], [7, 1, 3, 4, 9], 3, 1));
console.log(visibleTrees(data));
// visibleTrees(data);
