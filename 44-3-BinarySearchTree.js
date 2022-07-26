class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key; //a positive integer serves as an identifier for each node
    this.value = value; //value that we want to store, can be anything
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    //if the key is null, there is no node and the tree is empty
    if (this.key == null) {
      //we insert a node into the tree as root node
      this.key = key;
      this.value = value;
      //if the key we want to insert is less than the existing node key
    } else if (key < this.key) {
      //
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  
}

module.exports = BinarySearchTree;
