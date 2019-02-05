// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

// function fizzbuzz(num) {
//   const result = [];
//   for (let i = 1; i <= num; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//       result.push('fizzbuzz');
//     } else if (i % 3 === 0) {
//       result.push('fizz');
//     } else if (i % 5 === 0) {
//       result.push('buzz');
//     } else {
//       result.push(i);
//     }
//   }
//   return result;
// }


// module.exports = fizzbuzz;


// # Write code to parse urls into a sitemap tree structure and display it as text. For example, the following urls will result in this printed structure.
// #
// # Milestones:
// # 1. Parse routes into data structure
// # 2. Print data structure as simply as possible to check parsing
// # 3. Format text output like shown in below
// #
// # Input:

// const routes1 = [
//   '/home/anti-depressants/xanax',
//   '/home/heart/lipitor',
//   '/home/heart/atorvastatin',
//   '/home/heart/lipitor',
//   '/home/heart/heart',
//   '/drugs/nasal/flonase',
//   '/drugs/topical',
//   '/drugs/routes/oral/tablets',
//   '/drugs/routes/nasal/flonase',
// ];

// const routes = [
//   '/home/heart/lipitor',
//   '/drugs/routes/nasal/flonase',
//   '/home/heart/heart',
//   '/drugs/routes/oral/tablets',
//   '/home/heart/lipitor',
//   '/home/heart/atorvastatin',
//   '/drugs/nasal/flonase',
//   '/home/anti-depressants/xanax',
//   '/drugs/topical',
// ];
// // #
// // # Output:
// // # - home
// // #     - anti-depressants
// // #         - xanax
// // #     - heart
// // #         - lipitor
// // #         - atorvastatin
// // #         - heart
// // # - drugs
// // #     - nasal
// // #         - flonase
// // #     - topical
// // #     - routes
// // #         - oral
// // #             - tablets
// // #         - nasal
// // #             - flonase
// // */


// // Here is some code to implement a queue, which is used in the Tree code further down
// function findIndex(arr, data) {
//   let index;
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i].data === data) {
//       index = i;
//     }
//   }
//   return index;
// }

// function Queue() {
//   this.oldestIndex = 1;
//   this.newestIndex = 1;
//   this.storage = {};
// }

// Queue.prototype.size = function size() {
//   return this.newestIndex - this.oldestIndex;
// };

// Queue.prototype.enqueue = function enqueue(data) {
//   this.storage[this.newestIndex] = data;
//   this.newestIndex += 1;
// };

// Queue.prototype.dequeue = function dequeue() {
//   const { oldestIndex } = this;
//   const { newestIndex } = this;
//   let deletedData;

//   if (oldestIndex !== newestIndex) {
//     deletedData = this.storage[oldestIndex];
//     delete this.storage[oldestIndex];
//     this.oldestIndex += 1;
//   }
//   return deletedData;
// };

// // Here is code to implement a tree data structure:
// function Node(data) {
//   this.data = data;
//   this.parent = null;
//   this.children = [];
// }

// function Tree(data) {
//   const node = new Node(data);
//   this.root = node;
// }

// Tree.prototype.traverseDF = function traverseDF(callback) {
//   // this is a recurse and immediately-invoking function
//   (function recurse(currentNode) {
//     // step 2
//     for (let i = 0; i < currentNode.children.length; i += 1) {
//       // step 3
//       recurse(currentNode.children[i]);
//     }
//     // step 4
//     callback(currentNode);
//     // step 1
//   }(this.root));
// };

// Tree.prototype.traverseBF = function traverseBF(callback) {
//   const queue = new Queue();
//   queue.enqueue(this.root);

//   let currentTree = queue.dequeue();
//   while (currentTree) {
//     for (let i = 0; i < currentTree.children.length; i += 1) {
//       queue.enqueue(currentTree.children[i]);
//     }
//     callback(currentTree);
//     currentTree = queue.dequeue();
//   }
// };

// Tree.prototype.contains = function contains(callback, traversal) {
//   traversal.call(this, callback);
// };

// Tree.prototype.add = function add(data, toData, traversal) {
//   const child = new Node(data);
//   let parent = null;
//   const callback = function callback(node) {
//     if (node.data === toData) {
//       parent = node;
//     }
//   };
//   this.contains(callback, traversal);
//   if (parent) {
//     parent.children.push(child);
//     child.parent = parent;
//   } else {
//     throw new Error('Cannot add node to a non-existent parent.');
//   }
// };

// Tree.prototype.remove = function remove(data, fromData, traversal) {
//   let parent = null;
//   let childToRemove = null;
//   let index;
//   const callback = function callback(node) {
//     if (node.data === fromData) {
//       parent = node;
//     }
//   };
//   this.contains(callback, traversal);
//   if (parent) {
//     index = findIndex(parent.children, data);
//     if (index === undefined) {
//       throw new Error('Node to remove does not exist.');
//     } else {
//       childToRemove = parent.children.splice(index, 1);
//     }
//   } else {
//     throw new Error('Parent does not exist.');
//   }
//   return childToRemove;
// };

// // MY CODE:

// // 'routesName' parameter just a name for the root of the tree that will contain all the catagories
// // 'arr' is for our routes array:
// function createTreeFromArrayOfRoutes(arr, routesName) {
//   const routeTree = new Tree(routesName);
//   // create an array of arrays from the routes strings:
//   const routesArr = [];
//   arr.forEach((route) => {
//     const routeArr = route.split('/');
//     // replace empty string with tree name
//     routeArr.splice(0, 1, routesName);
//     routesArr.push(routeArr);
//   });

//   // filter the arrays to remove any duplicates by creating an array of stringified arrays.  
//   // the filter function checks if a stringified version of itself has already been stored, if not then we keep it.
//   const arrStrings = [];
//   const filteredRoutesArr = routesArr.filter((a) => {
//     let result = false;
//     const tempStr = a.toString();
//     if (arrStrings.indexOf(tempStr) === -1) {
//       arrStrings.push(tempStr);
//       result = true;
//     }
//     return result;
//   });

//   // sort the arrays so they will be grouped together correctly even if routes are out of order:
//   filteredRoutesArr.sort();

//   // find the length of the longest array so we will know how far we need to iterate:
//   const arrLengths = [];
//   filteredRoutesArr.forEach(ar => arrLengths.push(ar.length));
//   const maxArrLength = Math.max(...arrLengths);

//   // keep track of the last item and the current item to avoid repeats:
//   let prevName = routesName;
//   let currName = null;

//   // using nested loops
//   // this will loop through each item within the arrays
//   // starting with index 1 because the first item is just the name of the Tree
//   for (let i = 1; i < maxArrLength; i += 1) {
//     // the second loop will loop through all the arrays
//     for (let j = 0; j < filteredRoutesArr.length; j += 1) {
//       // because of the initial loop we start with index 1 of each array and go through them all
//       // before moving on to index 2 of each array, etc.
//       // we first check that something is there, and then that it doesn't match what we just added
//       // because the way our add method works we need to add each catagory only once
//       if (filteredRoutesArr[j][i] && filteredRoutesArr[j][i] !== currName) {
//         currName = filteredRoutesArr[j][i];
//         prevName = filteredRoutesArr[j][i - 1];
//         routeTree.add(currName, prevName, routeTree.traverseDF);
//       }
//     }
//   }
//   return routeTree;
// }

// // actually create tree using our function:
// const thisRoutesTree = createTreeFromArrayOfRoutes(routes, 'medsList');

// // function to print from tree:
// function printList(listTree, level = 0) {
//   if (listTree.children.length > 0) {
//     listTree.children.forEach((child) => {
//       // add correct amount of indentation:
//       let indentation = '';
//       for (let i = 0; i < level * 4; i += 1) {
//         indentation += ' ';
//       }
//       // create string including indentation:
//       const string = `${indentation}- ${child.data}`;
//       // print our string:
//       console.log(string);
//       // recursively print all children before moving on to the next catagory
//       // increasing level for correct indentation:
//       printList(child, level + 1);
//     });
//   }
// }

// printList(thisRoutesTree.root);
// console.log(thisRoutesTree);


function Folder() {}

Folder.prototype.add = function add(filePath) {
  const splitArray = filePath.split('/');
  splitArray.shift();
  this.insert(splitArray);
};

Folder.prototype.insert = function insert(fileArray) {
  // shift off the first item in array and save in const
  const firstItem = fileArray.shift();

  if (!this[firstItem] && fileArray.length === 0) {
    this[firstItem] = null;
  } else if (!this[firstItem]) {
    // create a new Folder
    this[firstItem] = new Folder();
  }

  if (fileArray.length > 0) {
    // call insert on subObject
    const inner = this[firstItem];
    inner.insert(fileArray);
  }
};

Folder.prototype.addMany = function addMany(routeArr) {
  routeArr.forEach((route) => {
    this.add(route);
  });
};

function printFolders(folder, level = 0) {
  // determine amount of indentation:
  let indentation = '';
  for (let i = 0; i < level * 4; i += 1) {
    indentation += ' ';
  }
  const names = Object.keys(folder);
  if (names.length > 0) {
    names.forEach((name) => {
      const line = `${indentation}- ${name}`;
      console.log(line);
      if (folder[name] !== null) {
        printFolders(folder[name], level + 1);
      }
    });
  }
}

const routes = [
  '/home/heart/lipitor',
  '/drugs/routes/nasal/flonase',
  '/home/heart/heart',
  '/drugs/routes/oral/tablets',
  '/home/heart/lipitor',
  '/home/heart/atorvastatin',
  '/drugs/nasal/flonase',
  '/home/anti-depressants/xanax',
  '/drugs/topical',
  '/home',
];

function printRoutes(routesData) {
  const result = new Folder();
  result.addMany(routesData);
  printFolders(result);
}

printRoutes(routes);
