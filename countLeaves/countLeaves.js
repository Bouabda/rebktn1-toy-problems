/*
Tree Count Leaves
Implement the countLeaves function in this Tree class.

A leaf node is any node in the tree that has no children. countLeaves should
traverse the tree, and return the number of leaf nodes the tree contains.

Illustration of a tree with three leaves:

      * <- root
     / \
    *    * <- leaf
   / \
  *   * <- leaf
 /
* <- leaf

Example usage:

var root = new Tree(); 
root.countLeaves(); // 1 
root.addChild(new Tree()); 
root.countLeaves(); // still 1 
root.addChild(new Tree()); 
root.children[0].addChild(new Tree()); 
root.children[0].addChild(new Tree()); 
root.children[0].children[0].addChild(new Tree()); 
root.countLeaves(); // 3

*/

var Tree = function(value) {
<<<<<<< HEAD
    this.value = value;
    this.children = [];
=======
  this.value = value;
  this.children = [];
>>>>>>> d094e0708bb603f175564af45188fa3252d79f0f
};

/**
 * You shouldn't need to change anything below here, but feel free to look.
 */

/**
 * add an immediate child
 * (wrap values in Tree nodes if they're not already)
 */
Tree.prototype.addChild = function(child) {
<<<<<<< HEAD
    if (!child || !(child instanceof Tree)) {
        child = new Tree(child);
    }

    if (!this.isDescendant(child)) {
        this.children.push(child);
    } else {
        throw new Error('That child is already a child of this tree');
    }
    // return the new child node for convenience
    return child;
=======
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
>>>>>>> d094e0708bb603f175564af45188fa3252d79f0f
};

/**
 * check to see if the provided tree is already a child of this
 * tree __or any of its sub trees__
 */
Tree.prototype.isDescendant = function(child) {
<<<<<<< HEAD
    if (this.children.indexOf(child) !== -1) {
        // `child` is an immediate child of this tree
        return true;
    } else {
        for (var i = 0; i < this.children.length; i++) {
            if (this.children[i].isDescendant(child)) {
                // `child` is descendant of this tree
                return true;
            }
        }
        return false;
    }
=======
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
>>>>>>> d094e0708bb603f175564af45188fa3252d79f0f
};

/**
 * remove an immediate child
 */
Tree.prototype.removeChild = function(child) {
<<<<<<< HEAD
    var index = this.children.indexOf(child);
    if (index !== -1) {
        // remove the child
        this.children.splice(index, 1);
    } else {
        throw new Error('That node is not an immediate child of this tree');
    }
};


Tree.prototype.countLeaves = function() {
    var leaves = 0;

    function recursive(root) {
        if (root.children.length) {
            for (let i = 0; i < root.children.length; i++) {
                recursive(root.children[i]);
            }
        } else { leaves++ }

    }
    recursive(this)
    return leaves;
}

var root = new Tree();
root.addChild(new Tree());
root.addChild(new Tree());
root.children[0].addChild(new Tree());
root.children[0].addChild(new Tree());
root.children[0].children[0].addChild(new Tree());
console.log(root.countLeaves()) //
=======
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};
>>>>>>> d094e0708bb603f175564af45188fa3252d79f0f
