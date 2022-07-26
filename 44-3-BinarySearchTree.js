class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key; //a positive integer serves as an identifier for each node
    this.value = value; //value that we want to store, can be anything
    this.parent = parent;
    this.left = null;
    this.right = null;
  }


}

module.exports = BinarySearchTree;
