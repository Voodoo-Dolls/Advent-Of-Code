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
  // Places
  let row = [];
  trees.forEach((treeRow) => {
    row.push(
      treeRow.split("").map((tree) => {
        return parseInt(tree);
      })
    );
  });


  return count;
};

let checkVisible = (row, column, x, y)=>{
    if (x === 0 || x=== row.length || y === 0 || y === column.length){
        return -1;
    }
    if ()

}

visibleTrees(data);
