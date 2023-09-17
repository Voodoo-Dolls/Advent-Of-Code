let data = `30373
25512
65332
33549
35390`




let visibleTrees = (data) =>{
    let trees = data.split("\n")
    let count = 0
    let tallestTree = []
    trees.forEach((treeRow)=>{
        let tree = treeRow.split("");
        let treeHeights = tree.map(Number);
        
    })
    return count
}   


visibleTrees(data);