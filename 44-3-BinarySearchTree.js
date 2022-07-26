class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key; //a positive integer serves as an identifier for each node
    this.value = value; //value that we want to store, can be anything
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    //If the key is null, there is no node and the tree is empty.
    //We insert a node into the tree as root node.
    if (this.key == null) {
      this.key = key;
      this.value = value;
      //Else if the tree exists, and the key we want to insert is less than the existing current node's key, we insert to the left.
    } else if (key < this.key) {
      //If the left node is empty, we insert a left tree.
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this); // `this` refers to the current node
      }
      //Else, there is an existing left child, then
      //We recursively call the insert() method so the node is added further down
      else {
        this.left.insert(key, value);
      }
    }
    //We do the same thing for the right side, if the key we want to insert is more than the existing current node's key.
    else {
      //If the right node is empty, we insert a right tree.
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this); // `this` refers to the current node
      }
      //Else, there is an existing right child, then
      //We cursively call the insert() method so the node is added further down
      else {
        this.right.insert(key, value);
      }
    }
  }

  
}

module.exports = BinarySearchTree;
