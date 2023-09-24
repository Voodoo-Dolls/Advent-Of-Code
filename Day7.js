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
let count = 0;

// console.log(listRegEx.test(commands.split("\n")[1]));

// Object Template
function Folder(name) {
  this.name = name;
  this.files = [];
  // An array of folder objects
  this.directories = [];
  this.addFile = (size, file) => {
    this.files.push([size, file]);
  };
  this.addDirectory = (name) => {
    let folder = new Folder(name);
    this.directories.push(folder);
  };
  // Math for getting Files, Updates global variable using a local scope for each recursion
  this.getFiles = () => {
    let sumAll = 0;
    // console.log("This Folder was Fired: " + this.name);
    if (this.directories.length > 0) {
      this.directories.map((folder) => {
        let subFolders = folder.getFiles();
        // console.log(subFolders);
        sumAll += subFolders;
      });
    }
    this.files.map((size) => {
      sumAll += size[0];
    });
    if (sumAll > 100) {
      console.log(this.name);
      count++;
    }
    return sumAll;
  };
  //   this.navigate = (folderName) =>{
  //     this.directories.map((folder)=>{
  //       if (folderName === folder.name )
  //     })
  //   }
  this.clone = () => {
    currentDirectory.push(this);
  };
}
let testArray = [];
let root = new Folder("root");
root.addDirectory("subFolder1");
root.directories[0].addFile(321, "subsubfolder");
root.addDirectory("subFolder2");
root.addFile(123, "root");
// root.getFiles();
// console.log(root.files[0]);

let currentDirectory = [root];
let commandRegEx = /\$/;
let listRegEx = /\$ ls/;
let changeRegEx = /\$ cd/;
let moveUpRegEx = /\$ cd \.\./;
commands = commands.split("\n");

let folderGenerator = (data) => {
  let commands = [...data];
  let length = commands.length;
  for (let i = 0; i < length; i++) {
    let currentCommand = commands.splice(0, 1)[0];
    // Checks for $
    if (commandRegEx.test(currentCommand)) {
      if ()
    }
  }
};

// folderGenerator(commands);
// console.log(commands.length);
// console.log(count);
