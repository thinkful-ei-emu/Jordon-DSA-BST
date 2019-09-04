//Q1 pt.1
//   3
//  /  \
// 1    4 
//  \    \
//   2    6
//       /  \
//      5    9 
//          /
//         7 

//Q1 pt.2
//       E
//      / \
//     A   S 
//        /  \
//       Q     Y
//     /      /
//   E       U
//    \     /
//     I   S
//      \   \
//       O    T
//      /
//     N

//Q2
//     4
//   /   \
// 1       5
//   \       \
//     2       6
//              \
//               9
//              /
//             7

//       E
//      / \
//     A   S 
//        /  \
//       Q     Y
//     /      /
//   I       U
//    \       \
//     O       S
//    /         \
//   N            T

//Q4
// function tree(t){
//     if(!t){
//         return 0;
//     }
//     return tree(t.left) + t.value + tree(t.right)
// }
//This function returns the sum of all the values in a tree

const BinarySearchTree = require('./Bst');

function TreeHeight(tree) {
    let count = 0;

    if (tree.left) {
        let leftHeight = 1 + TreeHeight(tree.left);
        if (leftHeight > count) {
            count = leftHeight;
        }
    }
    if (tree.right) {
        let rightHeight = 1 + TreeHeight(tree.right);
        if (rightHeight > count) {
            count = rightHeight;
        }
    }
    if (!tree.left && !tree.right) {
        count = 1;
    }

    return count;
}

function isBST(tree) {
    if (tree.left) {
        if (tree.left.key > tree.key) {
            return false;
        }
        return isBST(tree.left);
    }
    if (tree.right) {
        if (tree.right.key < tree.key) {
            return false;
        }
        return isBST(tree.right);
    }
    return true;
}

function main() {
    let bstNum = new BinarySearchTree();
    bstNum.insert(3);
    bstNum.insert(1);
    bstNum.insert(4);
    bstNum.insert(6);
    bstNum.insert(9);
    bstNum.insert(2);
    bstNum.insert(5);
    bstNum.insert(7);
    console.log(bstNum);
    console.log(TreeHeight(bstNum));
    //EASYQUESTION
    let bstChar = new BinarySearchTree();
    bstChar.insert('E');
    bstChar.insert('A');
    bstChar.insert('S');
    bstChar.insert('Y');
    bstChar.insert('Q');
    bstChar.insert('U');
    bstChar.insert('E');
    bstChar.insert('S');
    bstChar.insert('T');
    bstChar.insert('I');
    bstChar.insert('O');
    bstChar.insert('N');
    console.log(bstChar);
    console.log(TreeHeight(bstChar));


}

main();