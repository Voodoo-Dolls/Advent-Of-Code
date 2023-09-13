let commands = `$ cd /
$ ls
dir bfqzjjct
dir cgcqpjpn
dir frrjh
dir jjl
293559 jztrccm.hvd
dir mqvn
$ cd bfqzjjct
$ ls
dir cgcqpjpn
dir frrjh
dir gzpbchq
12679 lzrgqrgc
dir mzm
dir phslrcw
240839 phslrcw.ljl
dir qftq
dir qlpg
169962 vntqgq.tps
114950 vzq.qvv
`;

class Folder {
  constructor(folderName) {
    this.folderName = folderName;
  }
}
let root = {
  folderName: "/",
};

let fileRegEx = /^\d+/;
let commandRegEx = /\$ .+/g;
let test = commands.split(commandRegEx);

console.log(commands.split("\n"));
// console.log(test[2].split("\n"));
// console.log(
//   test.filter((line) => {
//     return line.length > 3;
//   })
// );
